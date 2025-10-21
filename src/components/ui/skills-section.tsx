'use client';

import { motion } from 'framer-motion';
import ScrollArrow from './scroll-arrow';
import { COLORS } from '@/data/consts';
import { skillsData } from '@/types/skills';
import SkillsGrid from './SkillsGrid';


export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

    const scrollToBlog = () => {
    document.getElementById('blog-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContacts = () => {
    const projectsSection = document.getElementById('contacts-section');
    const nextSection = projectsSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-teal-600 flex flex-col justify-center items-center relative px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h1>

        <SkillsGrid 
          mobile={skillsData.mobile}
          tablet={skillsData.tablet}
          desktop={skillsData.desktop}
          largeDesktop={skillsData.largeDesktop}
        />
      </motion.div>

   <div className="flex items-center gap-4 mt-12 md:mt-16">
          <ScrollArrow 
            color={COLORS.white}
            size={32}
            direction="up"
            onClick={scrollToBlog}
          />
          <ScrollArrow 
            color={COLORS.white}
            size={32}
            direction="down"
            onClick={scrollToContacts}
          />
        </div>
    </section>
  );
}