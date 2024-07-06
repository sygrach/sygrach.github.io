import Hero from '@/components/hero';
import Features from '@/components/features';
import Bot from '@/components/bot';
import CTA from '@/components/cta';
import Demo from  '@/components/demo';
import Subscribe from '@/components/subscribe';
import Footer from  '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Bot />
      <CTA />
      <Demo />
      <Subscribe />
      <Footer />
    </main>
  );
}
