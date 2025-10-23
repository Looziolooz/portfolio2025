'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Linkedin, 
  Github, 
  Globe
} from 'lucide-react';

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lorenzo-dastoli/',
      icon: Linkedin,
      color: 'hover:text-[#0077b5]',
      ariaLabel: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Looziolooz/',
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      ariaLabel: 'GitHub Profile'
    },
    {
      name: 'Portfolio',
      url: 'https://lorenzodastoli.netlify.app/',
      icon: Globe,
      color: 'hover:text-[#f48024]',
      ariaLabel: 'Portfolio Website'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center bg-white py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full text-center"
      >
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5EADB3] mb-20"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Let&apos;s talk
        </motion.h2>

        {/* Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-52 h-52 mx-auto">
            <div className="absolute inset-0 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/profile.png"
                alt="Lorenzo Dastoli - Frontend Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 200px, 208px"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-medium text-[#5EADB3] mb-8"
        >
          Lorenzo Dastoli
        </motion.h3>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 mb-12"
        >
          {/* Phone */}
          <Link 
            href="tel:+460763123345"
            className="block text-xl md:text-2xl text-[#5EADB3] hover:text-[#4A8B91] transition-colors duration-300"
          >
            +46(0)763 12 33 45
          </Link>
          
          {/* Email */}
          <Link 
            href="mailto:lorenzo.dastoli@mail.com"
            className="block text-xl md:text-2xl text-[#5EADB3] hover:text-[#4A8B91] transition-colors duration-300"
          >
            lorenzo.dastoli@mail.com
          </Link>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-8"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.2, 
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[#A8C8C3] transition-all duration-300 ${link.color} inline-block`}
                aria-label={link.ariaLabel}
              >
                <link.icon size={30} strokeWidth={1.5} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}