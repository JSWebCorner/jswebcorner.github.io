import React, { useRef, useEffect, useCallback } from 'react';

interface ParticlesBackgroundProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  mouseLineColor?: string;
  particleRadius?: number;
  particleDensityFactor?: number; // e.g., 0.00008 for 80 particles per 1M pixels
  maxLineDistance?: number;
  maxMouseDistance?: number;
  particleSpeed?: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  className = '',
  particleColor = 'rgba(56, 189, 248, 0.7)', // sky-400 with opacity
  lineColor = 'rgba(56, 189, 248, 0.3)',
  mouseLineColor = 'rgba(14, 165, 233, 0.5)', // sky-500 with opacity
  particleRadius = 3,
  particleDensityFactor = 0.0000007, // Adjusted for potentially better performance/look
  maxLineDistance = 200,
  maxMouseDistance = 300,
  particleSpeed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const mousePosition = useRef<{ x: number | undefined; y: number | undefined }>({ x: undefined, y: undefined });
  const animationFrameId = useRef<number | null>(null);

  const createParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current = [];
    const area = canvas.width * canvas.height;
    const numParticles = Math.floor(area * particleDensityFactor);

    for (let i = 0; i < numParticles; i++) {
      particlesArray.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: particleRadius,
        vx: (Math.random() - 0.5) * particleSpeed * 2,
        vy: (Math.random() - 0.5) * particleSpeed * 2,
      });
    }
  }, [particleDensityFactor, particleRadius, particleSpeed]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particlesArray.current) {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Boundary check
      if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.vx *= -1;
      if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();

      // Draw lines to other particles
      for (const otherP of particlesArray.current) {
        if (p === otherP) continue;
        const dist = Math.sqrt((p.x - otherP.x) ** 2 + (p.y - otherP.y) ** 2);
        if (dist < maxLineDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(otherP.x, otherP.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = Math.max(0.1, 1 - dist / maxLineDistance); // Thinner lines further away
          ctx.stroke();
        }
      }
      
      // Draw line to mouse
      if (mousePosition.current.x !== undefined && mousePosition.current.y !== undefined) {
        const distToMouse = Math.sqrt((p.x - mousePosition.current.x) ** 2 + (p.y - mousePosition.current.y) ** 2);
        if (distToMouse < maxMouseDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          ctx.strokeStyle = mouseLineColor;
           ctx.lineWidth = Math.max(0.2, 1.2 - distToMouse / maxMouseDistance); // Slightly thicker lines to mouse
          ctx.stroke();
        }
      }
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, [particleColor, lineColor, maxLineDistance, mousePosition, mouseLineColor, maxMouseDistance, particleSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            canvas.width = width;
            canvas.height = height;
            createParticles(canvas);
        }
    });

    // Observe the parent element to set canvas size
    if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
        // Initial setup
        const { clientWidth, clientHeight } = canvas.parentElement;
        canvas.width = clientWidth;
        canvas.height = clientHeight;
        createParticles(canvas);
    }


    const handleMouseMove = (event: MouseEvent) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mousePosition.current.x = event.clientX - rect.left;
        mousePosition.current.y = event.clientY - rect.top;
      }
    };
    
    const handleMouseOut = () => {
        mousePosition.current.x = undefined;
        mousePosition.current.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut); // Use canvas for mouseout

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement);
      }
      resizeObserver.disconnect();
    };
  }, [createParticles, animate]);

  return <canvas ref={canvasRef} className={`${className} `} style={{pointerEvents: 'none'}} />;
};

export default ParticlesBackground;