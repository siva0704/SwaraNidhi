import React from 'react';
import { ArrowUp, Layers, ShieldCheck, Heart } from 'lucide-react';
import { SITE_METADATA, TALENT_ARENAS } from '../../data/cms';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191A1B] text-[#E5E0D5] pt-20 pb-12 border-t border-[#2A2B2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Col (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#B45309] text-white flex items-center justify-center font-bold text-sm">
                SN
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {SITE_METADATA.brandName}
              </span>
            </div>

            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              {SITE_METADATA.motto}
            </p>

            <div className="pt-2 text-xs font-mono text-[#71717A] space-y-1">
              <div>Blueprint: {SITE_METADATA.projectPlanVersion}</div>
              <div>Operating Layer: {SITE_METADATA.ecosystemParent}</div>
            </div>
          </div>

          {/* Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li><a href="#home" className="hover:text-white transition-colors">Home / Vision</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Portfolio</a></li>
              <li><a href="#why-now" className="hover:text-white transition-colors">Why Now Narrative</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Media & Articles</a></li>
              <li><a href="#apply" className="hover:text-white transition-colors">Application Tracks</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Desk</a></li>
            </ul>
          </div>

          {/* Talent Arenas (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-semibold">
              Talent Arenas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
              {TALENT_ARENAS.map((arena) => (
                <li key={arena.id}>
                  <a href="#about" className="hover:text-white transition-colors">
                    {arena.code}. {arena.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#2A2B2D] text-white hover:bg-[#B45309] transition-all flex items-center gap-2 text-xs font-semibold"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-[#71717A] mt-6 lg:mt-0 lg:text-right">
              Audited by Master Evaluation Rubrics
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2B2D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div>
            © {new Date().getFullYear()} SwaraNidhi Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Confidential Planning Blueprint 1.0</span>
            <span>•</span>
            <span>THRIVE OS Integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
