// app/blog/[slug]/page.tsx - SOSTITUISCI con questo
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { mdxComponents } from '@/components/blog/mdx-components';
import BlogCard from '@/components/blog/blog-card';
import ScrollToTop from '@/components/blog/scroll-to-top';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { Suspense } from 'react';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Definiamo un tipo per il nodo
interface CodeNode {
  children: Array<{ type: string; value?: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        metadataBase: new URL(process.env.NODE_ENV === 'production' 
          ? 'https://tuosito.com'
          : 'http://localhost:3000'
        ),
      };
    }

    return {
      title: `${post.title} - Dev in Progress`,
      description: post.excerpt,
      metadataBase: new URL(process.env.NODE_ENV === 'production' 
        ? 'https://tuosito.com'
        : 'http://localhost:3000'
      ),
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.image],
        type: 'article',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post - Dev in Progress',
      metadataBase: new URL(process.env.NODE_ENV === 'production' 
        ? 'https://tuosito.com'
        : 'http://localhost:3000'
      ),
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Componente separato per il contenuto MDX
async function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'one-dark-pro',
                  keepBackground: false,
                  onVisitLine(node: CodeNode) {
                    if (node.children.length === 0) {
                      node.children = [{ type: 'text', value: ' ' }];
                    }
                  },
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}

// Componente per Related Posts
async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = getRelatedPosts(currentSlug, 3);
  
  if (relatedPosts.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((relatedPost, index: number) => (
          <BlogCard
            key={relatedPost.slug}
            {...relatedPost}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-[#F5E6D3]">
        <article className="max-w-4xl mx-auto px-4 md:px-8 py-20">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#D97D55] hover:text-[#B85C3C] mb-8 transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
              {post.author && (
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </span>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content con Suspense */}
          <div className="mb-12">
            <Suspense fallback={<LoadingSpinner />}>
              <MDXContent source={post.content} />
            </Suspense>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 mb-12" />

          {/* Related Posts con Suspense */}
          <Suspense fallback={<LoadingSpinner />}>
            <RelatedPosts currentSlug={post.slug} />
          </Suspense>

          {/* Scroll to Top */}
          <ScrollToTop />
        </article>
      </main>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}