'use client';

import BlogCard from './blog-card';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          {...post}
          index={index}
        />
      ))}
    </div>
  );
}