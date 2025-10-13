'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { HERO_CONTENT, COLORS } from '@/data/consts';

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const bounceAnimation = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: COLORS.secondary }}
    >
      <div className="max-w-7xl w-full">
        {/* Mobile & Tablet Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Profile Image */}
          <motion.div
            {...scaleIn}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-opacity-20"
            style={{ borderColor: COLORS.teal }}
          >
            <Image
              src={HERO_CONTENT.profileImage}
              alt="Lorenzo Dastoli"
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-3 md:space-y-4">
            <motion.h2 
              {...fadeInUp}
              className="text-base sm:text-lg md:text-xl font-heading font-medium"
              style={{ color: COLORS.primary }}
            >
              {HERO_CONTENT.greeting}
            </motion.h2>
            
            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
              style={{ color: COLORS.teal }}
            >
              {HERO_CONTENT.title}
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg font-body leading-relaxed max-w-2xl mx-auto px-4"
              style={{ color: COLORS.dark }}
            >
              {HERO_CONTENT.description}
            </motion.p>
          </div>

          {/* Arrow Down */}
          <motion.div
            {...bounceAnimation}
            className="mt-8"
          >
            <ChevronDown 
              size={32} 
              className="mx-auto"
              style={{ color: COLORS.primary }}
            />
          </motion.div>
        </div>

        {/* Desktop Layout (>= 1024px) */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          {/* Profile Image - Left Side */}
          <motion.div
            {...scaleIn}
            className="relative flex-shrink-0 w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-opacity-20"
            style={{ borderColor: COLORS.teal }}
          >
            <Image
              src={HERO_CONTENT.profileImage}
              alt="Lorenzo Dastoli"
              fill
              sizes="(max-width: 1280px) 256px, 320px"
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="flex-1 space-y-4 xl:space-y-6">
            <motion.h2 
              {...fadeInUp}
              className="text-xl xl:text-2xl font-heading font-medium"
              style={{ color: COLORS.primary }}
            >
              {HERO_CONTENT.greeting}
            </motion.h2>
            
            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl xl:text-6xl font-heading font-bold leading-tight"
              style={{ color: COLORS.teal }}
            >
              {HERO_CONTENT.title}
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base xl:text-lg font-body leading-relaxed max-w-2xl"
              style={{ color: COLORS.dark }}
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* Arrow Down - Desktop */}
            <motion.div
              {...bounceAnimation}
              className="pt-6"
            >
              <ChevronDown 
                size={36} 
                style={{ color: COLORS.primary }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}