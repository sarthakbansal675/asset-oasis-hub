
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Layers, BarChart, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Tokenization",
    description: "Assets are securely tokenized using blockchain technology, ensuring transparent and immutable ownership records."
  },
  {
    icon: Layers,
    title: "Fractional Ownership",
    description: "Own a fraction of premium real-world assets that were previously accessible only to institutional investors."
  },
  {
    icon: BarChart,
    title: "Stable Returns",
    description: "Generate consistent returns backed by the performance of tangible assets in the real world."
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "All listed assets comply with relevant regulations and undergo thorough due diligence."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our RWA Marketplace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging traditional finance with blockchain technology to democratize access to premium real-world assets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 bg-white shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-blue-100 p-2.5 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
