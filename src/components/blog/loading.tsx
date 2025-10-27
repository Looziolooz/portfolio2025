// app/blog/loading.tsx
import BlogSkeleton from '@/components/blog/blog-skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-16 bg-gray-300 rounded-lg max-w-2xl mx-auto mb-4" />
          <div className="h-6 bg-gray-300 rounded max-w-xl mx-auto mb-2" />
          <div className="h-4 bg-gray-300 rounded max-w-md mx-auto" />
        </div>
        <BlogSkeleton />
      </div>
    </main>
  );
}