
import React, { useEffect, useRef } from 'react';

const AboutRwa: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const textElements = textRef.current?.querySelectorAll('.animate-on-scroll');
    if (textElements) {
      textElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (textElements) {
        textElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3285716/pexels-photo-3285716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Real World Assets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10" ref={textRef}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="animate-on-scroll opacity-0 text-4xl md:text-5xl font-bold text-white mb-6">
            Real-World Assets on the Blockchain
          </h2>
          
          <p className="animate-on-scroll opacity-0 text-xl text-gray-200 mb-6 delay-100">
            Real-World Assets (RWAs) represent the next frontier in blockchain technology, 
            bringing the stability of traditional finance to the innovation of decentralized networks.
          </p>
          
          <p className="animate-on-scroll opacity-0 text-lg text-gray-300 mb-8 delay-200">
            By tokenizing physical and financial assets like real estate, commodities, and revenue streams, 
            we create new investment opportunities that were previously inaccessible to most investors.
          </p>
          
          <p className="animate-on-scroll opacity-0 text-lg text-gray-300 delay-300">
            Our marketplace connects asset owners seeking liquidity with investors looking for stable, 
            asset-backed returns — all secured by the transparency and immutability of blockchain technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutRwa;
