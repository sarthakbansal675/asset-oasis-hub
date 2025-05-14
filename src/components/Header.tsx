
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-black/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white font-bold text-xl px-2 py-1 rounded">RWA</div>
            <span className="font-semibold text-xl hidden sm:inline-block text-white">Marketplace</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#marketplace" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              Marketplace
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              How it Works
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              Partners
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex border-blue-500 text-blue-400 hover:bg-blue-900/20"
          >
            Connect Wallet
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className={cn(
              "bg-blue-500 hover:bg-blue-600 text-white"
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
