'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function BlogPagination({ 
  currentPage, 
  totalPages, 
  basePath 
}: BlogPaginationProps) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      {/* Previous Button */}
      {hasPreviousPage ? (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#D97D55] hover:bg-[#D97D55] hover:text-white shadow-md transition-all"
        >
          <ChevronLeft size={20} />
          Previous
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
          <ChevronLeft size={20} />
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <Link
            key={page}
            href={page === 1 ? basePath : `${basePath}?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
              page === currentPage
                ? 'bg-[#D97D55] text-white'
                : 'bg-white text-gray-700 hover:bg-[#D97D55] hover:text-white'
            } shadow-md`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {hasNextPage ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#D97D55] hover:bg-[#D97D55] hover:text-white shadow-md transition-all"
        >
          Next
          <ChevronRight size={20} />
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
          Next
          <ChevronRight size={20} />
        </span>
      )}
    </div>
  );
}