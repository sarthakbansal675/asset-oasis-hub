
import React, { useEffect, useRef } from 'react';
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
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200); // Stagger the animations
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-marketplace-gray relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Our RWA Marketplace</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bridging traditional finance with blockchain technology to democratize access to premium real-world assets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={el => featureRefs.current[index] = el} 
              className="feature-reveal"
            >
              <Card className="border bg-marketplace-darkGray shadow-md">
                <CardContent className="pt-6 p-6 flex items-center">
                  <div className="mb-0 mr-6 rounded-full bg-marketplace-blue/20 p-3 w-14 h-14 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-marketplace-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
