// mdx-components.tsx (nella root del progetto)
import type { MDXComponents } from 'mdx/types';
import { mdxComponents } from '@/components/blog/mdx-components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}