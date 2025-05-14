
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/5845712/pexels-photo-5845712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Manhattan Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Tokenized Real-World Assets Marketplace
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Invest in high-quality, tokenized real-world assets including prime real estate, 
            commodities, and invoice financing opportunities through our secure blockchain platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className={cn(
                "bg-blue-500 hover:bg-blue-600 text-white text-lg py-6 px-8"
              )}
            >
              Explore Marketplace
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-900/20 text-lg py-6 px-8"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-blue-400">$1.2B+</span>
              <span className="text-sm text-gray-300">Assets Tokenized</span>
            </div>
            <div className="h-10 w-px bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-blue-400">12,000+</span>
              <span className="text-sm text-gray-300">Global Investors</span>
            </div>
            <div className="h-10 w-px bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-blue-400">200+</span>
              <span className="text-sm text-gray-300">Listed Assets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
