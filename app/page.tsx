import Hero from '@/components/hero';
import Features from '@/components/features';
import Examples from  '@/components/examples';
import Subscribe from '@/components/subscribe';
import Footer from  '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Examples />
      <Subscribe />
      <Footer />
    </main>
  );
}
