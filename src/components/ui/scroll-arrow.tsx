'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  color?: string;
  size?: number;
  className?: string;
  duration?: number;
  distance?: number;
  onClick?: () => void;
}

export default function ScrollArrow({ 
  color = '#D97D55',
  size = 32,
  className = '',
  duration = 2,
  distance = 10,
  onClick
}: ScrollArrowProps) {
  const bounceAnimation = {
    animate: {
      y: [0, distance, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      {...bounceAnimation}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ChevronDown 
        size={size} 
        style={{ color }}
      />
    </motion.div>
  );
}