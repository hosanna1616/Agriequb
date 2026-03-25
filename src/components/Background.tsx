import React, { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const Background = ({ isDarkMode = true }: { isDarkMode?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 5000], [0, 500]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particleColor = isDarkMode ? "#C47B4B" : "#3B2A1E";
      const secondColor = isDarkMode ? "#FFFFFF" : "#FFFFFF";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        const currentOpacity = p.opacity * (0.8 + Math.sin(Date.now() * 0.001 + p.id) * 0.2);
        ctx.fillStyle = p.id % 2 === 0 
          ? `${particleColor}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`
          : `${secondColor}${Math.floor(currentOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
        
        ctx.fill();

        p.y += p.speed;
        p.x += Math.sin(Date.now() * 0.001 + p.id) * 0.3;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Gradient */}
      <motion.div
        className={cn(
          "absolute inset-0 transition-colors duration-1000 ease-in-out",
          isDarkMode ? "bg-[#1A0F0F]" : "bg-[#F5E8C7]"
        )}
      />

      {/* Radial Moving Glows */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px]",
            isDarkMode ? "bg-[#C47B4B]/20" : "bg-[#C47B4B]/10"
          )}
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px]",
            isDarkMode ? "bg-[#D4AF37]/15" : "bg-[#D4AF37]/5"
          )}
        />
      </div>

      {/* Particle Canvas */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ y: yParallax }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 noise-overlay" 
        style={{ opacity: isDarkMode ? 0.05 : 0.03 }}
      />

      {/* Vignette */}
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-1000",
          isDarkMode ? "opacity-100" : "opacity-40"
        )}
        style={{
          background: isDarkMode 
            ? "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)"
            : "radial-gradient(circle, transparent 50%, rgba(196, 123, 75, 0.1) 100%)"
        }}
      />
    </div>
  );
};