import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import TechSection from '@/components/ui/tech-section';
import ProjectsSection from '@/components/ui/projects-section';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TechSection />
      <ProjectsSection />

    </main>
  );
}