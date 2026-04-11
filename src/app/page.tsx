import Header from '@/components/Header';
import GamesSection from '@/components/GamesSection';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GamesSection />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
