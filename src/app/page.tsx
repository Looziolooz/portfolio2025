import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/sections/hero-section';
import TechSection from '@/components/sections/tech-section';
import ProjectsSection from '@/components/sections/projects-section';
import BlogSection from '@/components/blog/blog-section';
import { getAllPosts } from '@/lib/blog';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <BlogSection posts={posts} />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}