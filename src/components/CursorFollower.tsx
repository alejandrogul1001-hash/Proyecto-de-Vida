import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  // High-response spring physics for instant, fluid trailing motion
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const springConfig = { damping: 28, stiffness: 360, mass: 0.18 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop with mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          'button, a, input, select, textarea, [role="button"], [tabindex="0"], summary'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Feather-light Ambient Glow (Soft Screen Light, never dark or muddy) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute rounded-full pointer-events-none will-change-transform mix-blend-screen"
        animate={{
          width: isHovered ? 120 : 70,
          height: isHovered ? 120 : 70,
          opacity: isHovered ? 0.35 : 0.2,
          background: isHovered
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)',
        }}
        transition={{ duration: 0.18 }}
      />

      {/* 2. Precision Minimalist Orbit Ring (Transparent fill with crisp luminous outline) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute rounded-full pointer-events-none will-change-transform bg-transparent"
        animate={{
          width: isHovered ? 46 : isClicking ? 20 : 28,
          height: isHovered ? 46 : isClicking ? 20 : 28,
          borderWidth: isHovered ? '1.5px' : '1px',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.9)' : 'rgba(56, 189, 248, 0.55)',
          boxShadow: isHovered
            ? '0 0 16px rgba(34, 211, 238, 0.45), inset 0 0 8px rgba(34, 211, 238, 0.15)'
            : '0 0 10px rgba(56, 189, 248, 0.25)',
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 380,
          mass: 0.15,
        }}
      />

      {/* 3. Luminous Micro-Core (Direct pointer anchor) */}
      <motion.div
        className="absolute rounded-full pointer-events-none will-change-transform -translate-x-1/2 -translate-y-1/2 bg-cyan-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          width: isHovered ? 5 : 3.5,
          height: isHovered ? 5 : 3.5,
          boxShadow: isHovered
            ? '0 0 10px 2px rgba(34, 211, 238, 0.9)'
            : '0 0 6px 1px rgba(56, 189, 248, 0.8)',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};
