import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

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

export function getPostSlugs(): string[] {
  try {
    // Crea la directory se non esiste
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      console.log('Created content/posts directory');
      return [];
    }
    
    const files = fs.readdirSync(postsDirectory);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    
    if (mdxFiles.length === 0) {
      console.log('No MDX files found in content/posts');
    } else {
      console.log(`Found ${mdxFiles.length} MDX files:`, mdxFiles);
    }
    
    return mdxFiles.map(file => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    const formattedDate = data.date ? formatDate(data.date) : formatDate(new Date().toISOString());

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: formattedDate,
      excerpt: data.excerpt || content.slice(0, 150) + '...',
      content,
      readTime: stats.text,
      image: data.image || '/blog/default.svg',
      tags: data.tags || [],
      author: data.author || 'Anonymous',
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  console.log('Getting all posts, slugs:', slugs);
  
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => {
      const date1 = new Date(post1.date);
      const date2 = new Date(post2.date);
      return date2.getTime() - date1.getTime();
    });
  
  console.log(`Loaded ${posts.length} posts`);
  
  return posts;
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

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