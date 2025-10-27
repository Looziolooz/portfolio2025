// app/blog/page.tsx - USA getAllPosts invece di getOptimizedAllPosts
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog'; // CAMBIA QUI
import BlogGrid from '@/components/blog/blog-grid';
import BlogPagination from '@/components/blog/blog-pagination';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import BlogSkeleton from '@/components/blog/blog-skeleton';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tech Deep Dive - Blog',
    description: 'Explore my thoughts on coding, creativity, and building amazing digital experiences',
    metadataBase: new URL(process.env.NODE_ENV === 'production' 
      ? 'https://tuosito.com'
      : 'http://localhost:3000'
    ),
  };
}

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const postsPerPage = 6;
  
  const allPosts = getAllPosts(); // USA getAllPosts direttamente
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D97D55] mb-4">
            Tech Deep Dive
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore my thoughts on coding, creativity, and building amazing digital experiences
          </p>
          {totalPosts > 0 && (
            <p className="text-gray-600 mt-4">
              {totalPosts} article{totalPosts !== 1 ? 's' : ''} available
            </p>
          )}
          <Link
            href="/"
            className="inline-flex items-center py-2 gap-2 text-[#D97D55] hover:text-[#B85C3C] mb-8 transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={25} />
            Back to CV
          </Link>
        </div>

        {currentPosts.length > 0 ? (
          <>
            <Suspense fallback={<BlogSkeleton />}>
              <BlogGrid posts={currentPosts} />
            </Suspense>
            
            {totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog"
              />
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                No blog posts yet
              </h2>
              <p className="text-gray-600 mb-8">
                To see blog posts here, add MDX files to the{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-[#D97D55]">
                  content/posts/
                </code>{' '}
                directory in your project root.
              </p>
              <div className="text-left bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-3">Quick Start:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Create <code className="bg-gray-100 px-1">content/posts/</code> in project root</li>
                  <li>Add a file like <code className="bg-gray-100 px-1">my-first-post.mdx</code></li>
                  <li>Add frontmatter with title, date, and excerpt</li>
                  <li>Refresh this page to see your post</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}