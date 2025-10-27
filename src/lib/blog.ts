// lib/blog.ts - VERSIONE CORRETTA
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cache } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
  tags?: string[];
  author?: string;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

// Cache ultra-aggressiva
let cachedPosts: BlogPost[] | null = null;

export const getAllPosts = cache((): BlogPost[] => {
  if (cachedPosts) {
    return cachedPosts;
  }

  try {
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }

    const files = fs.readdirSync(postsDirectory);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));

    const posts = mdxFiles
      .map(file => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, file);
        
        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          const stats = readingTime(content);

          const post: BlogPost = {
            slug,
            title: data.title || 'Untitled',
            date: data.date ? formatDate(data.date) : formatDate(new Date().toISOString()),
            excerpt: data.excerpt || content.slice(0, 200) + '...',
            content,
            readTime: stats.text,
            image: data.image || '/blog/default.svg',
            tags: data.tags || [],
            author: data.author || 'Anonymous',
          };
          
          return post;
        } catch (error) {
          console.error(`Error reading post ${file}:`, error);
          return null;
        }
      })
      // CORREZIONE: Filtra i null e assicura il tipo
      .filter((post): post is BlogPost => post !== null)
      // CORREZIONE: Aggiungi controlli null per la sort
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });

    cachedPosts = posts;
    return posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
});

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
});

export const getRelatedPosts = cache((currentSlug: string, limit: number = 3): BlogPost[] => {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
});

export function getPaginatedPosts(page: number = 1, postsPerPage: number = 6) {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    currentPage: page,
    totalPages,
    totalPosts,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  };
}

// Funzione alias per compatibilità
export const getOptimizedAllPosts = getAllPosts;