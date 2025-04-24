import '../styles/animations.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}