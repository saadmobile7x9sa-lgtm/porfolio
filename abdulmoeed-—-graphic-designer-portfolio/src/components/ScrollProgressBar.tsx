import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollProgressBarProps {
  darkMode?: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ darkMode }) => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for fluid, premium response to scroll velocity
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      {/* Background Track (Subtle Hairline) */}
      <div className="absolute inset-0 bg-black/5 dark:bg-white/5" />

      {/* Animated Active Progress Fill */}
      <motion.div
        className="h-full bg-gradient-to-r from-[#FF5C3B] via-[#FF3B1D] to-[#E02E12] origin-left relative shadow-[0_1px_8px_rgba(255,59,29,0.6)]"
        style={{ scaleX }}
      >
        {/* Leading Tip Glow Accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FF3B1D] opacity-90" />
      </motion.div>
    </div>
  );
};
