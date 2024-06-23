import Hero from '@/components/hero';
import Features from '@/components/features';
import Demo from  '@/components/demo';
import Subscribe from '@/components/subscribe';
import Footer from  '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Demo />
      <Subscribe />
      <Footer />
    </main>
  );
}
