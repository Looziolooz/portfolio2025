'use client';

import ScrollArrow from '@/components/ui/scroll-arrow';

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center mt-12">
      <ScrollArrow
        direction="up"
        onClick={handleScrollToTop}
        className="hover:scale-110 transition-transform"
      />
    </div>
  );
}