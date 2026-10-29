import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer ring lag
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad), skip touch screens
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsPointer(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      const isProjectCard = target.closest('#work .group, #case-studies .group');

      if (isProjectCard) {
        setIsHovered(true);
        setHoverText('VIEW');
      } else if (interactive) {
        setIsHovered(true);
        setHoverText(null);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden" aria-hidden="true">
      {/* Exact Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF3B1D] -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_8px_#FF3B1D]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Fluid Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF3B1D]/80 flex items-center justify-center backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: hoverText ? 72 : isHovered ? 52 : 32,
          height: hoverText ? 72 : isHovered ? 52 : 32,
          backgroundColor: isHovered ? 'rgba(255, 59, 29, 0.18)' : 'rgba(255, 59, 29, 0.04)',
          borderColor: isHovered ? '#FF3B1D' : 'rgba(255, 59, 29, 0.5)',
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-mono font-bold tracking-widest text-[#FF3B1D] uppercase drop-shadow-sm select-none"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
