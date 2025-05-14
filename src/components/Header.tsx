
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-marketplace-darkGray/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-marketplace-blue text-white font-bold text-xl px-2 py-1 rounded">RWA</div>
            <span className="font-semibold text-xl hidden sm:inline-block text-white">Marketplace</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-marketplace-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/marketplace' ? 'text-marketplace-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="#" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              How it Works
            </Link>
            <Link 
              to="#" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Partners
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex border-marketplace-blue text-marketplace-blue hover:bg-marketplace-blue/20"
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
