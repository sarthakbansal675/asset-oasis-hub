
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the stroke-dashoffset based on scroll progress
  const circleCircumference = 2 * Math.PI * 40; // 2πr where r is 40
  const dashOffset = circleCircumference - (scrollProgress * circleCircumference);

  return (
    <div className="scroll-progress-container hidden lg:block">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          className="scroll-progress-circle"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
