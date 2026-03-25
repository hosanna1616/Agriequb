import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientX });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', (e) => setMousePos({ x: e.clientX, y: e.clientY }));
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', (e) => setMousePos({ x: e.clientX, y: e.clientY }));
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-caramel-highlight pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(196, 123, 75, 0.1)' : 'rgba(196, 123, 75, 0)',
        borderWidth: isHovering ? 0.5 : 1,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};