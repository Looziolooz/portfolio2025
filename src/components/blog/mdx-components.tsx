'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  id?: string;
}

export const mdxComponents = {
  h1: ({ children, id }: HeadingProps) => (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      id={id}
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-8"
    >
      {children}
    </motion.h1>
  ),
  
  h2: ({ children, id }: HeadingProps) => (
    <h2 id={id} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8 first:mt-0">
      {children}
    </h2>
  ),
  
  h3: ({ children, id }: HeadingProps) => (
    <h3 id={id} className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 mt-6">
      {children}
    </h3>
  ),
  
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
      {children}
    </p>
  ),
  
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <Link
      href={href || '#'}
      className="text-[#D97D55] hover:text-[#B85C3C] underline underline-offset-4 transition-colors"
    >
      {children}
    </Link>
  ),
  
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
      {children}
    </ul>
  ),
  
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
      {children}
    </ol>
  ),
  
  li: ({ children }: { children: ReactNode }) => (
    <li className="ml-4">
      {children}
    </li>
  ),
  
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-[#D97D55] pl-6 py-2 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 text-[#D97D55] px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full h-64 md:h-96 my-8 rounded-lg overflow-hidden"
    >
      <Image
        src={src || ''}
        alt={alt || ''}
        fill
        className="object-cover"
      />
    </motion.div>
  ),
  
  hr: () => (
    <hr className="border-gray-200 my-8" />
  ),
  
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  ),
  
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  ),
  
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {children}
    </td>
  ),
};