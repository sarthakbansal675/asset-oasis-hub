
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto rounded-full bg-black/40 backdrop-blur-md border border-blue-900/20">
      <div className="flex h-14 items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white font-bold text-xl px-2 py-1 rounded">RWA</div>
            <span className="font-semibold text-xl hidden sm:inline-block text-white">Marketplace</span>
          </a>
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
