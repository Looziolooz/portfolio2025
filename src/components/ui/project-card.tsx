'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Github } from 'lucide-react';
import { COLORS } from '@/data/consts';
import { Project } from '@/types/project';

interface ProjectCardProps extends Project {
  index: number;
}

export default function ProjectCard({
  name,
  description,
  image,
  tags,
  netlify,
  github,
  index
}: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Mobile & Tablet Layout (< 1024px) */}
      <div className="lg:hidden">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 
            className="text-xl sm:text-2xl font-heading font-bold"
            style={{ color: COLORS.primary }}
          >
            {name}
          </h3>

          <p className="text-sm sm:text-base font-body text-gray-700 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-body font-medium text-white rounded"
                style={{ backgroundColor: COLORS.dark }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {netlify && (
              <a
                href={netlify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all hover:opacity-80"
                style={{ 
                  backgroundColor: COLORS.secondary,
                  color: COLORS.dark 
                }}
              >
                <Globe size={18} />
                Live demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all hover:opacity-80"
              style={{ 
                backgroundColor: COLORS.dark,
                color: COLORS.white 
              }}
            >
              <Github size={18} />
              View the code
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex lg:items-stretch">
        {/* Image - Left Side */}
        <div className="relative w-64 xl:w-80 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 p-6 xl:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 
              className="text-2xl xl:text-3xl font-heading font-bold"
              style={{ color: COLORS.primary }}
            >
              {name}
            </h3>

            <p className="text-base font-body text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-body font-medium text-white rounded"
                  style={{ backgroundColor: COLORS.dark }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            {netlify && (
              <a
                href={netlify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all hover:opacity-80"
                style={{ 
                  backgroundColor: COLORS.secondary,
                  color: COLORS.dark 
                }}
              >
                <Globe size={18} />
                Live demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all hover:opacity-80"
              style={{ 
                backgroundColor: COLORS.dark,
                color: COLORS.white 
              }}
            >
              <Github size={18} />
              View the code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}