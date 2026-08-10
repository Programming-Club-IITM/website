import React, { useEffect, useRef } from 'react';

// Brand palette used for the node network (spark used sparingly)
const NODE_COLORS = [
  { color: '47, 189, 165', weight: 5 },  // primary teal
  { color: '27, 143, 176', weight: 4 },  // accent blue
  { color: '134, 196, 64', weight: 3 },  // highlight lime
  { color: '242, 169, 59', weight: 1 },  // spark amber (rare)
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

// Draws a flat-topped hexagon outline
const drawHexagon = (ctx, cx, cy, radius, rotation, color, alpha, lineWidth) => {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = rotation + (Math.PI / 3) * i;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = `rgba(${color}, ${alpha})`;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
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
    let hexagons = [];
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

      const nodeCount = Math.max(24, Math.min(52, Math.floor((width * height) / 22000)));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1,
        color: pickColor(),
      }));

      hexagons = [
        { cx: width * 0.18, cy: height * 0.28, radius: Math.min(width, height) * 0.22, rot: 0, speed: 0.00015, color: '47, 189, 165' },
        { cx: width * 0.82, cy: height * 0.68, radius: Math.min(width, height) * 0.16, rot: 1.1, speed: -0.00022, color: '27, 143, 176' },
      ];
    };

    const linkDist = 140;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // large faint rotating hexagons (brand motif)
      hexagons.forEach((h) => {
        const rot = prefersReducedMotion ? h.rot : h.rot + time * h.speed;
        drawHexagon(ctx, h.cx, h.cy, h.radius, rot, h.color, 0.07, 1.5);
        drawHexagon(ctx, h.cx, h.cy, h.radius * 0.86, -rot * 1.3, h.color, 0.05, 1);
      });

      // update + draw nodes
      nodes.forEach((n) => {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (mouseRef.current.active) {
            const dx = n.x - mouseRef.current.x;
            const dy = n.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 0.01) {
              const force = (120 - dist) / 120 * 0.04;
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
        ctx.fillStyle = `rgba(${n.color}, 0.55)`;
        ctx.fill();
      });

      // connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
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
