import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import TechSection from '@/components/ui/tech-section';
import ProjectsSection from '@/components/ui/projects-section';
import BlogSection from '@/components/blog/blog-section';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <BlogSection posts={posts} />
    </main>
  );
}