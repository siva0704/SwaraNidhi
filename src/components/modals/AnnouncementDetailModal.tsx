import React from 'react';
import { X, Calendar, FileText, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Announcement } from '../../types';

interface AnnouncementDetailModalProps {
  announcement: Announcement | null;
  onClose: () => void;
  onActionClick: (url: string) => void;
}

export const AnnouncementDetailModal: React.FC<AnnouncementDetailModalProps> = ({
  announcement,
  onClose,
  onActionClick,
}) => {
  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#D5CEBF] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E5E0D5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-[#FEF3C7] text-[#92400E]">
              {announcement.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#71717A] hover:bg-[#F4F1EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="text-xs font-mono text-[#78716C] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Published: {announcement.date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-[#1E2022]">
            {announcement.title}
          </h3>

          <p className="text-sm text-[#44403C] leading-relaxed">
            {announcement.details}
          </p>

          <div className="p-4 bg-white rounded-xl border border-[#E5E0D5] text-xs text-[#52525B] space-y-1">
            <div className="font-semibold text-[#1E2022]">Governance Context:</div>
            <p>
              Ratified under Master Event Project Plan 1.0 controls (Section 11 Event Supporting Systems & Section 10 Judging Integrity).
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#E5E0D5] bg-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#57534E] hover:text-[#1E2022]"
          >
            Close Notice
          </button>

          {announcement.actionUrl && (
            <button
              onClick={() => {
                onClose();
                onActionClick(announcement.actionUrl!);
              }}
              className="px-5 py-2.5 rounded-full bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase hover:bg-[#B45309] transition-colors flex items-center gap-1.5"
            >
              <span>{announcement.actionLabel || 'Proceed'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
