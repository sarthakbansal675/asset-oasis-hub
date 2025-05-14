
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TabsSection from '@/components/TabsSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-marketplace-darkGray">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <TabsSection />
        <ScrollProgress />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
