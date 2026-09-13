import React, { useEffect, useState } from 'react';

interface SpineNode {
  id: string;
  number: string;
  label: string;
  subtitle: string;
}

const SPINE_NODES: SpineNode[] = [
  { id: 'home', number: '01', label: 'DISCOVER', subtitle: 'Vision & Hero' },
  { id: 'about', number: '02', label: 'UNDERSTAND', subtitle: 'About & Portfolio' },
  { id: 'why-now', number: '03', label: 'WHY NOW', subtitle: 'Story & Blueprint' },
  { id: 'articles', number: '04', label: 'EXPLORE', subtitle: 'Media & Evidence' },
  { id: 'apply', number: '05', label: 'APPLY', subtitle: 'Choose Pathway' },
  { id: 'contact', number: '06', label: 'CONNECT', subtitle: 'Institutional Lead' },
];

export const StorySpine: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 260;
      for (let i = SPINE_NODES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SPINE_NODES[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SPINE_NODES[i].id);
          break;
        }
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      id="storytelling-spine-rail"
      aria-label="Story Progression Spine"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
    >
      {/* Background track line */}
      <div className="relative w-px h-80 bg-[#E5E0D5]">
        {/* Dynamic scroll progress fill */}
        <div 
          className="absolute top-0 left-0 w-full bg-[#B45309] transition-all duration-150 ease-out"
          style={{ height: `${scrollPercent}%` }}
        />

        {/* Nodes along the spine */}
        <div className="absolute inset-0 flex flex-col justify-between items-center -my-2">
          {SPINE_NODES.map((node) => {
            const isActive = activeSection === node.id;
            return (
              <div 
                key={node.id} 
                className="relative group flex items-center cursor-pointer"
                onClick={() => scrollTo(node.id)}
              >
                {/* Visual node dot */}
                <div 
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isActive 
                      ? 'bg-[#B45309] border-[#B45309] scale-125 shadow-sm shadow-[#B45309]/30' 
                      : 'bg-[#FAF9F5] border-[#D1C7B7] group-hover:border-[#B45309] group-hover:scale-110'
                  }`}
                >
                  {isActive && <div className="w-1 h-1 rounded-full bg-white" />}
                </div>

                {/* Floating tooltip label on hover or active */}
                <div 
                  className={`absolute left-7 px-2.5 py-1 rounded border text-xs whitespace-nowrap tracking-wide font-medium transition-all duration-200 pointer-events-none ${
                    isActive
                      ? 'opacity-100 translate-x-0 bg-[#1E2022] text-[#FAF9F5] border-[#1E2022] shadow-md'
                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#FFFFFF] text-[#4A4E53] border-[#E5E0D5]'
                  }`}
                >
                  <span className="text-[#B45309] font-mono mr-1.5 font-bold">{node.number}</span>
                  <span>{node.label}</span>
                  <span className="text-[10px] opacity-70 ml-1.5 hidden 2xl:inline">({node.subtitle})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-[10px] uppercase font-mono tracking-widest text-[#8C827A] writing-vertical transform -rotate-180 select-none">
        Story Spine
      </div>
    </aside>
  );
};
