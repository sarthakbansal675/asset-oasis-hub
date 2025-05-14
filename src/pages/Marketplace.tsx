
import React from 'react';
import Header from '@/components/Header';
import TabsSection from '@/components/TabsSection';
import Footer from '@/components/Footer';

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-marketplace-darkGray">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-marketplace-gray">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              RWA Marketplace
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Browse and invest in a wide range of tokenized real-world assets across different categories
            </p>
          </div>
        </div>
        <TabsSection isMarketplacePage={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
