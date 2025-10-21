'use client';

import ScrollArrow from '@/components/ui/scroll-arrow';

interface BlogNavigationArrowsProps {
  prevSectionId?: string;
  nextSectionId?: string;
  color?: string;
}

export default function BlogNavigationArrows({ 
  prevSectionId = 'projects',
  nextSectionId = 'contact',
  color = '#D97D55'
}: BlogNavigationArrowsProps) {
  const scrollToPrevious = () => {
    const previousSection = document.querySelector(`#${prevSectionId}`);
    if (previousSection) {
      previousSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top if section not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector(`#${nextSectionId}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to bottom if section not found
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="flex items-center gap-4 mt-12 md:mt-16">
      <ScrollArrow 
        color={color}
        size={32}
        direction="up"
        onClick={scrollToPrevious}
        className="hover:scale-110 transition-transform"
      />
      <ScrollArrow 
        color={color}
        size={32}
        direction="down"
        onClick={scrollToNext}
        className="hover:scale-110 transition-transform"
      />
    </div>
  );
}