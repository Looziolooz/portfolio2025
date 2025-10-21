'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  index?: number;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  slug, 
  date, 
  readTime, 
  image,
  index = 0 
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
              {date}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#D97D55] transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {readTime}
              </span>
            </div>
            
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#D97D55] font-semibold hover:gap-3 transition-all"
            >
              Read article
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}