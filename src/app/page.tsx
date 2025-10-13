import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import TechSection from '@/components/ui/tech-section';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TechSection />
    </main>
  );
}