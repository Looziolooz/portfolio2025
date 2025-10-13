'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ScrollArrowProps {
  color?: string;
  size?: number;
  className?: string;
  duration?: number;
  distance?: number;
  onClick?: () => void;
  direction?: 'up' | 'down';
}

export default function ScrollArrow({ 
  color = '#D97D55',
  size = 32,
  className = '',
  duration = 2,
  distance = 10,
  onClick,
  direction = 'down'
}: ScrollArrowProps) {
  const bounceAnimation = {
    animate: {
      y: direction === 'down' ? [0, distance, 0] : [0, -distance, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const ArrowIcon = direction === 'down' ? ChevronDown : ChevronUp;

  return (
    <motion.div
      {...bounceAnimation}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ArrowIcon 
        size={size} 
        style={{ color }}
      />
    </motion.div>
  );
}