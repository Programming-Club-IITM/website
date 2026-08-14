import React, { useEffect, useRef } from 'react';

// Brand palette used for the node network
const NODE_COLORS = [
  { color: '48, 189, 165', weight: 5 },  // primary teal
  { color: '22, 132, 177', weight: 4 },  // accent cyan
  { color: '134, 196, 64', weight: 2 },  // highlight lime
];

const pickColor = () => {
  const total = NODE_COLORS.reduce((s, c) => s + c.weight, 0);
  let r = Math.random() * total;
  for (const c of NODE_COLORS) {
    if (r < c.weight) return c.color;
    r -= c.weight;
  }
  return NODE_COLORS[0].color;
};

// ── Cursor interaction tuning ────────────────────────────────────────
const INFLUENCE = 170;   // px radius around the cursor that nudges nodes
const PUSH = 0.9;        // impulse strength at the cursor's centre
const DAMPING = 0.94;    // how fast a nudged node eases back to its own drift
const MAX_SPEED = 3.2;   // px/frame ceiling, keeps the field from flying apart

const HeroBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, dpr;
    let nodes = [];
    let animationId;
    let bounds = canvas.getBoundingClientRect();

    const setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bounds = canvas.getBoundingClientRect();

      // Increase node density for a better network effect
      const nodeCount = Math.max(30, Math.min(80, Math.floor((width * height) / 16000)));
      nodes = Array.from({ length: nodeCount }, () => {
        // bvx/bvy is the node's own ambient drift; vx/vy is what actually moves
        // it, so a cursor nudge decays back to the drift instead of persisting.
        const bvx = (Math.random() - 0.5) * 0.25; // slightly faster
        const bvy = (Math.random() - 0.5) * 0.25;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: bvx,
          vy: bvy,
          bvx,
          bvy,
          r: Math.random() * 1.8 + 1.2,
          color: pickColor(),
        };
      });
    };

    const linkDist = 180; // Connect nodes from further away

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // update + draw nodes
      nodes.forEach((n) => {
        if (!prefersReducedMotion) {
          // Cursor pushes nearby nodes outward — an impulse on velocity, so they
          // carry momentum and coast instead of snapping.
          const pointer = mouseRef.current;
          if (pointer.active) {
            const dx = n.x - pointer.x;
            const dy = n.y - pointer.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < INFLUENCE * INFLUENCE && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / INFLUENCE) * PUSH;
              n.vx += (dx / dist) * force;
              n.vy += (dy / dist) * force;
            }
          }

          // Bleed the nudge off, easing each node back to its ambient drift
          n.vx = n.bvx + (n.vx - n.bvx) * DAMPING;
          n.vy = n.bvy + (n.vy - n.bvy) * DAMPING;

          const speed = Math.hypot(n.vx, n.vy);
          if (speed > MAX_SPEED) {
            n.vx = (n.vx / speed) * MAX_SPEED;
            n.vy = (n.vy / speed) * MAX_SPEED;
          }

          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0) n.x = width;
          if (n.x > width) n.x = 0;
          if (n.y < 0) n.y = height;
          if (n.y > height) n.y = 0;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color}, 0.9)`; // Brighter nodes
        ctx.fill();
      });

      // connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            // Stronger alpha for more visible lines
            const alpha = (1 - dist / linkDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            // Use the primary teal color for all lines to keep it clean
            ctx.strokeStyle = `rgba(48, 189, 165, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    // Tracked on window rather than on the canvas' parent: the hero copy and
    // buttons sit in a sibling layer above the canvas, so a listener down here
    // would never see the pointer over most of the hero. The canvas itself stays
    // pointer-events-none, so this reads the cursor without ever capturing it.
    const trackPointer = (e) => {
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const inside = x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height;
      mouseRef.current = { x, y, active: inside };
    };
    const clearPointer = () => { mouseRef.current.active = false; };

    // bounds is viewport-relative, so it moves as the hero scrolls
    const refreshBounds = () => { bounds = canvas.getBoundingClientRect(); };

    setup();
    animationId = requestAnimationFrame(render);

    window.addEventListener('resize', setup);
    window.addEventListener('scroll', refreshBounds, { passive: true });
    window.addEventListener('pointermove', trackPointer, { passive: true });
    window.addEventListener('pointerdown', trackPointer, { passive: true });
    // pointerleave doesn't bubble, so it has to sit on the root element to catch
    // the cursor leaving the window entirely (no further moves would arrive).
    document.documentElement.addEventListener('pointerleave', clearPointer);
    window.addEventListener('pointercancel', clearPointer);
    window.addEventListener('blur', clearPointer);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setup);
      window.removeEventListener('scroll', refreshBounds);
      window.removeEventListener('pointermove', trackPointer);
      window.removeEventListener('pointerdown', trackPointer);
      document.documentElement.removeEventListener('pointerleave', clearPointer);
      window.removeEventListener('pointercancel', clearPointer);
      window.removeEventListener('blur', clearPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default HeroBackground;
