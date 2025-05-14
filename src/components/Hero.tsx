
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80" 
          alt="Manhattan Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Tokenized Real-World Assets Marketplace
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Invest in high-quality, tokenized real-world assets including prime real estate, 
            commodities, and invoice financing opportunities through our secure blockchain platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className={cn(
                "bg-marketplace-blue hover:bg-marketplace-blue/90 text-white text-lg py-6 px-8"
              )}
            >
              Explore Marketplace
            </Button>
            <Button 
              variant="outline" 
              className="border-marketplace-blue text-marketplace-blue hover:bg-marketplace-lightBlue text-lg py-6 px-8"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-marketplace-blue">$1.2B+</span>
              <span className="text-sm text-gray-600">Assets Tokenized</span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-marketplace-blue">12,000+</span>
              <span className="text-sm text-gray-600">Global Investors</span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-marketplace-blue">200+</span>
              <span className="text-sm text-gray-600">Listed Assets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
