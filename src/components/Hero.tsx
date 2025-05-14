
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    navigate('/marketplace');
  };

  return (
    <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
      {/* Animated building construction background */}
      <div className="absolute inset-0 z-0 construction-gif">
        <div className="absolute inset-0 flex items-center justify-center animate-building-construction">
          <img 
            src="https://images.unsplash.com/photo-1486728297118-82a07bc48a28?auto=format&fit=crop&q=80" 
            alt="Building Construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-marketplace-darkGray via-marketplace-darkGray/90 to-marketplace-darkGray/80" />
      </div>
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            Tokenized Real-World Assets Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Invest in high-quality, tokenized real-world assets through our secure blockchain platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className={cn(
                "bg-marketplace-blue hover:bg-marketplace-blue/90 text-white text-lg py-6 px-8"
              )}
              onClick={handleExplore}
            >
              Explore Marketplace
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
