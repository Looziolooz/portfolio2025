'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/data/consts';
import { Project } from '@/types/project';
import ProjectCard from './project-card';
import ScrollArrow from './scroll-arrow';

// Import projects data directly
import projectsData from '@/data/projects.json';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects from imported JSON
    try {
      setProjects(projectsData.projects);
      setLoading(false);
    } catch (error) {
      console.error('Error loading projects:', error);
      setLoading(false);
    }
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const scrollToTech = () => {
    document.getElementById('tech-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToNext = () => {
    const projectsSection = document.getElementById('projects-section');
    const nextSection = projectsSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section 
        id="projects-section"
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="text-center">
          <p className="text-2xl font-heading mb-4" style={{ color: COLORS.teal }}>
            Loading projects...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="projects-section"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: COLORS.white }}
    >

      <div className="max-w-7xl w-full">
        {/* Title */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 lg:mb-16"
          style={{ color: COLORS.teal }}
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-gray-600 font-body text-lg">
              No projects available.
            </p>
            <p className="text-sm text-gray-500">
              Please create <code className="bg-gray-100 px-2 py-1 rounded">src/data/projects.json</code>
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mt-12 md:mt-16">
        <ScrollArrow 
          color={COLORS.teal}
          size={32}
          direction="up"
          onClick={scrollToTech}
        />
        <ScrollArrow 
          color={COLORS.teal}
          size={32}
          direction="down"
          onClick={scrollToNext}
        />
      </div>
    </section>
  );
}