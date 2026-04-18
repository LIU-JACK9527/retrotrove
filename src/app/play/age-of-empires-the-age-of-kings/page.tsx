import GamesSection from '@/components/GamesSection';
import Features from '@/components/Features';
import WhatHowWhy from '@/components/WhatHowWhy';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlayAgeOfEmpires() {
  return (
    <>
      <Header />
      <main>
        <GamesSection />
        <Features />
        <WhatHowWhy />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
