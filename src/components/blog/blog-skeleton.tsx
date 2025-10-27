// components/blog/blog-skeleton.tsx
export default function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 md:h-56 bg-gray-300" />
            <div className="p-6">
              <div className="h-6 bg-gray-300 rounded mb-3" />
              <div className="h-4 bg-gray-300 rounded mb-2" />
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-300 rounded w-20" />
                <div className="h-4 bg-gray-300 rounded w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}