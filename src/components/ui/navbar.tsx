'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { MENUITEMS, COLORS } from '@/data/consts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? COLORS.white : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold transition-colors hover:opacity-80"
            style={{ color: COLORS.primary }}
          >
            LD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {MENUITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className={`text-sm lg:text-base font-medium transition-all hover:opacity-80 ${
                  pathname === item.path ? 'font-bold' : ''
                }`}
                style={{ 
                  color: pathname === item.path ? COLORS.primary : COLORS.dark 
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: COLORS.primary }}
            aria-label="Toggle menu"
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
        <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {MENUITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => {
                handleSmoothScroll(e, item.path);
                setIsOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                pathname === item.path ? 'font-bold' : ''
              }`}
              style={{ 
                color: pathname === item.path ? COLORS.primary : COLORS.dark,
                backgroundColor: pathname === item.path ? COLORS.secondary : 'transparent'
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}