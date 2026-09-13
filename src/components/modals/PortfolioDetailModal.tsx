import React from 'react';
import { X, CheckCircle2, Award, Calendar, Layers, ArrowRight, Building, Users } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onApplyForSimilar: (category: string) => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  item,
  onClose,
  onApplyForSimilar,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FAF9F5] rounded-2xl shadow-2xl border border-[#D5CEBF] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header Media */}
        <div className="relative h-64 sm:h-72 w-full bg-[#1E2022] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022] via-[#1E2022]/40 to-transparent" />
          
          <button
            id="close-portfolio-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-[#B45309] text-white">
                {item.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-white/20 backdrop-blur-xs text-white">
                {item.status}
              </span>
              <span className="text-xs text-white/70 font-mono ml-auto">
                {item.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">{item.title}</h2>
            <p className="text-sm text-white/80">{item.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-[#E5E0D5]">
            {item.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-[11px] uppercase tracking-wider text-[#78716C] font-mono">
                  {metric.label}
                </div>
                <div className="text-lg font-serif font-bold text-[#1E2022]">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Student Team & Institution */}
          <div className="flex flex-wrap gap-4 text-xs text-[#57534E] border-b border-[#E5E0D5] pb-4">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#B45309]" />
              <span className="font-semibold text-[#1E2022]">Team:</span> {item.studentTeam}
            </div>
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#B45309]" />
              <span className="font-semibold text-[#1E2022]">Track:</span> {item.institutionType}
            </div>
          </div>

          {/* Story */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C]">The Project Evolution</h3>
            <p className="text-sm text-[#44403C] leading-relaxed">
              {item.fullStory}
            </p>
          </div>

          {/* Key Innovations */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C]">Demonstrated Technical Innovations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.keyInnovations.map((innovation, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#292524] bg-white p-2.5 rounded-lg border border-[#E5E0D5]">
                  <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <span>{innovation}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Outcomes */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C]">Viable Future Pathways</h3>
            <div className="flex flex-wrap gap-2">
              {item.outcomes.map((outcome, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-xs font-medium">
                  {outcome}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#E5E0D5] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#78716C]">
            Verified submission in SwaraNidhi Event 1.0 Archive
          </span>
          <button
            onClick={() => {
              onClose();
              onApplyForSimilar(item.category);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase rounded-full hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2"
          >
            <span>Apply For Similar Track</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
