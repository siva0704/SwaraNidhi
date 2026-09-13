import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="global-scroll-progress" 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent pointer-events-none"
    >
      <div 
        className="h-full bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#451A03] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
