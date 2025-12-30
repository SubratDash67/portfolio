"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseInfluence?: number;
}

export function ParticleField({
  className = "",
  particleCount = 80,
  connectionDistance = 150,
  mouseInfluence = 100,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        connections: [],
      });
    }
    return particles;
  }, [particleCount]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Update and draw particles
    particles.forEach((particle, i) => {
      // Mouse influence
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < mouseInfluence) {
        const force = (mouseInfluence - dist) / mouseInfluence;
        particle.vx -= (dx / dist) * force * 0.02;
        particle.vy -= (dy / dist) * force * 0.02;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary wrapping
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        const connDx = particle.x - other.x;
        const connDy = particle.y - other.y;
        const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

        if (connDist < connectionDistance) {
          const opacity = (1 - connDist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
  }, [connectionDistance, mouseInfluence]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      if (particlesRef.current.length === 0) {
        particlesRef.current = initParticles(width, height);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      drawParticles(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, drawParticles]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  );
}
