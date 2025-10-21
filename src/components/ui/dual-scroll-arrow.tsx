'use client';

import ScrollArrow from '@/components/ui/scroll-arrow';

interface DualScrollArrowsProps {
  onUpClick?: () => void;
  onDownClick?: () => void;
  upSectionId?: string;
  downSectionId?: string;
  color?: string;
  upColor?: string;
  downColor?: string;
  size?: number;
  gap?: number;
  className?: string;
  showUp?: boolean;
  showDown?: boolean;
}

// Definisci i tuoi colori personalizzati
const COLORS = {
  teal: '#14b8a6',
  orange: '#D97D55',
  gray: '#718096',
  purple: '#8b5cf6',
  pink: '#ec4899'
};

export default function DualScrollArrows({ 
  onUpClick,
  onDownClick,
  upSectionId,
  downSectionId,
  color = COLORS.orange,
  upColor,
  downColor,
  size = 32,
  gap = 4,
  className = '',
  showUp = true,
  showDown = true
}: DualScrollArrowsProps) {
  
  const handleUpClick = () => {
    if (onUpClick) {
      onUpClick();
    } else if (upSectionId) {
      const section = document.querySelector(`#${upSectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownClick = () => {
    if (onDownClick) {
      onDownClick();
    } else if (downSectionId) {
      const section = document.querySelector(`#${downSectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className={`flex items-center gap-${gap} mt-12 md:mt-16 ${className}`}>
      {showUp && (
        <ScrollArrow 
          color={upColor || color}
          size={size}
          direction="up"
          onClick={handleUpClick}
          className="hover:scale-110 transition-transform"
        />
      )}
      {showDown && (
        <ScrollArrow 
          color={downColor || color}
          size={size}
          direction="down"
          onClick={handleDownClick}
          className="hover:scale-110 transition-transform"
        />
      )}
    </div>
  );
}

// Export anche i colori per usarli altrove
export { COLORS };