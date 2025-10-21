'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from './blog-card';
import ScrollArrow from '@/components/ui/scroll-arrow';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPrevious = () => {
    const previousSection = document.querySelector('#projects');
    previousSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Prendi solo i primi 4 post per la home page
  const displayPosts = posts.slice(0, 4);

  return (
    <section id="blog" className="min-h-screen bg-[#F5E6D3] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D97D55] mb-4">
            Tech Deep Dive
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore my thoughts on coding, creativity, and building amazing digital experiences
          </p>
        </motion.div>

        {displayPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {displayPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  {...post}
                  index={index}
                />
              ))}
            </div>

            {/* Link to blog page if there are more posts */}
            {posts.length > 4 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 text-[#D97D55] hover:text-[#B85C3C] font-semibold text-lg transition-colors group"
                >
                  View All Articles ({posts.length} total)
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">No blog posts available yet.</p>
            <p className="text-gray-500">Add MDX files to content/posts/ to see them here.</p>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16">
          <ScrollArrow 
            color="#14b8a6"  // Teal color come nel tuo esempio
            size={32}
            direction="up"
            onClick={handleScrollToPrevious}
            className="hover:scale-110 transition-transform"
          />
          <ScrollArrow 
            color="#14b8a6"  // Teal color come nel tuo esempio
            size={32}
            direction="down"
            onClick={handleScrollToNext}
            className="hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </section>
  );
}