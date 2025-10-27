'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { MENUITEMS, COLORS } from '@/data/consts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all section IDs from menu items
      const sectionIds = MENUITEMS.map(item => item.path.substring(1));
      
      // Add hero section since it's not in MENUITEMS but is linked from logo
      const allSections = ['hero-section', ...sectionIds];
      
      let currentSection = '';

      for (const sectionId of allSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const windowHeight = window.innerHeight;
          
          // Check if section is in viewport (more precise calculation)
          if (sectionTop <= windowHeight / 2 && sectionBottom >= windowHeight / 3) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check and add event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 80; // approx height of navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        window.history.pushState(null, '', path);
        
        setIsOpen(false); // Close mobile menu after navigation
      }
    }
    // External links will behave normally
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? COLORS.white : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Links to Hero Section */}
          <Link 
            href="#hero-section" 
            onClick={(e) => handleSmoothScroll(e, '#hero-section')}
            className="text-xl md:text-2xl font-heading font-bold transition-colors hover:opacity-80 flex-shrink-0"
            style={{ color: COLORS.primary }}
            aria-label="Home - Lorenzo Dastoli"
          >
            Lorenzo Dastoli
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {MENUITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className={`text-sm lg:text-base font-body font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === item.path 
                    ? 'font-bold' 
                    : 'hover:opacity-80'
                }`}
                style={{ 
                  color: activeSection === item.path ? COLORS.primary : COLORS.dark,
                  backgroundColor: activeSection === item.path ? `${COLORS.secondary}40` : 'transparent'
                }}
                aria-current={activeSection === item.path ? 'page' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 flex-shrink-0"
            style={{ color: COLORS.primary }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {MENUITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleSmoothScroll(e, item.path)}
              className={`block px-4 py-3 rounded-lg text-base font-body font-medium transition-all ${
                activeSection === item.path ? 'font-bold' : ''
              }`}
              style={{ 
                color: activeSection === item.path ? COLORS.primary : COLORS.dark,
                backgroundColor: activeSection === item.path ? COLORS.secondary : 'transparent'
              }}
              aria-current={activeSection === item.path ? 'page' : undefined}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}