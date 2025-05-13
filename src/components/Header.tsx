
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-marketplace-blue text-white font-bold text-xl px-2 py-1 rounded">RWA</div>
            <span className="font-semibold text-xl hidden sm:inline-block">Marketplace</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-marketplace-blue transition-colors">
              About
            </a>
            <a href="#marketplace" className="text-sm font-medium hover:text-marketplace-blue transition-colors">
              Marketplace
            </a>
            <a href="#" className="text-sm font-medium hover:text-marketplace-blue transition-colors">
              How it Works
            </a>
            <a href="#" className="text-sm font-medium hover:text-marketplace-blue transition-colors">
              Partners
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex border-marketplace-blue text-marketplace-blue hover:bg-marketplace-lightBlue"
          >
            Connect Wallet
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className={cn(
              "bg-marketplace-blue hover:bg-marketplace-blue/90 text-white"
            )}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
