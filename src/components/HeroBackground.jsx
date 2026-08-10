import React, { useEffect, useRef } from 'react';

// Brand palette used for the node network
const NODE_COLORS = [
  { color: '47, 189, 165', weight: 5 },  // primary teal
  { color: '27, 143, 176', weight: 4 },  // accent cyan
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

      // Increase node density for a better network effect
      const nodeCount = Math.max(30, Math.min(80, Math.floor((width * height) / 16000)));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, // slightly faster
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 1.2,
        color: pickColor(),
      }));
    };

    const linkDist = 180; // Connect nodes from further away

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // update + draw nodes
      nodes.forEach((n) => {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          // Mouse attraction physics
          if (mouseRef.current.active) {
            const dx = n.x - mouseRef.current.x;
            const dy = n.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200 && dist > 0.01) {
              // Nodes accelerate towards the cursor
              const force = (200 - dist) / 200 * 0.12;
              n.x += (dx / dist) * force;
              n.y += (dy / dist) * force;
            }
          }

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
            ctx.strokeStyle = `rgba(47, 189, 165, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };
    const handleMouseLeave = () => { mouseRef.current.active = false; };

    setup();
    animationId = requestAnimationFrame(render);

    window.addEventListener('resize', setup);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setup);
      canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default HeroBackground;
