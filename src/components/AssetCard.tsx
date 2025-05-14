
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AssetProps {
  asset: {
    id: string;
    title: string;
    image: string;
    price: string;
    tokenSymbol: string;
    apy: string;
    location: string;
    category: string;
    color: string;
  };
  onBuyClick: () => void;
  showBuy?: boolean;
}

const AssetCard: React.FC<AssetProps> = ({ asset, onBuyClick, showBuy = true }) => {
  let colorClass = {
    blue: "bg-marketplace-blue/20 text-marketplace-blue",
    green: "bg-marketplace-green/20 text-marketplace-green",
    orange: "bg-marketplace-orange/20 text-marketplace-orange",
  }[asset.color] || "bg-marketplace-blue/20 text-marketplace-blue";

  return (
    <Card className="overflow-hidden border border-white/10 asset-card bg-marketplace-gray/80">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={asset.image}
          alt={asset.title}
          className="h-full w-full object-cover transition-transform"
        />
        <Badge className={`absolute top-3 right-3 ${colorClass}`}>
          {asset.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-white">{asset.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">{asset.tokenSymbol}</span>
          <span className="text-sm font-medium text-marketplace-blue">{asset.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xs text-gray-400">APY</span>
            <span className="ml-2 text-sm font-semibold text-marketplace-green">{asset.apy}</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-400">Location</span>
            <span className="ml-2 text-sm text-gray-300">{asset.location}</span>
          </div>
        </div>
      </CardContent>
      {showBuy && (
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full bg-marketplace-blue hover:bg-marketplace-blue/90 text-white"
            onClick={onBuyClick}
          >
            Buy Token
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AssetCard;
