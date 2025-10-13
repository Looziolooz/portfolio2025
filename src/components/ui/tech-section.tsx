'use client';

import { motion } from 'framer-motion';
import { TECH_CONTENT, COLORS } from '@/data/consts';
import ScrollArrow from './scroll-arrow';

export default function TechSection() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const scrollToHero = () => {
    document.getElementById('hero-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToNext = () => {
    // Find next section after tech-section
    const techSection = document.getElementById('tech-section');
    const nextSection = techSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="tech-section"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Arrow Up - Top */}
      <ScrollArrow 
        color={COLORS.secondary}
        size={32}
        direction="up"
        onClick={scrollToHero}
        className="mb-8 md:mb-12"
      />

      <div className="max-w-7xl w-full">
        {/* Mobile & Tablet Layout (< 1024px) */}
        <motion.div 
          className="lg:hidden flex flex-col items-center text-center space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            {...fadeInUp}
            className="text-6xl sm:text-7xl md:text-8xl font-heading font-bold"
            style={{ color: COLORS.white }}
          >
            {TECH_CONTENT.title}
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-2"
          >
            {TECH_CONTENT.technologies.map((tech, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl font-body font-medium"
                style={{ color: COLORS.white }}
              >
                {tech}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Layout (>= 1024px) */}
        <motion.div 
          className="hidden lg:flex lg:items-center lg:justify-between lg:gap-16 xl:gap-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title - Left Side */}
          <motion.h2 
            {...fadeInLeft}
            className="text-8xl xl:text-9xl font-heading font-bold"
            style={{ color: COLORS.white }}
          >
            {TECH_CONTENT.title}
          </motion.h2>

          {/* Technologies List - Right Side */}
          <motion.div 
            {...fadeInRight}
            className="flex-1 space-y-3"
          >
            {TECH_CONTENT.technologies.map((tech, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-2xl xl:text-3xl font-body font-medium"
                style={{ color: COLORS.white }}
              >
                {tech}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Arrow Down - Bottom */}
      <ScrollArrow 
        color={COLORS.secondary}
        size={32}
        direction="down"
        onClick={scrollToNext}
        className="mt-8 md:mt-12"
      />
    </section>
  );
}