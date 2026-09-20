import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Skills } from '@/components/Skills/Skills';
import { Projects } from '@/components/Projects/Projects';
import { Impact } from '@/components/Impact/Impact';
import { Contact } from '@/components/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Impact />
      <Contact />
    </>
  );
}
