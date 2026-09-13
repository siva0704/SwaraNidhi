import React from 'react';
import { X, Bell, ExternalLink, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { ANNOUNCEMENTS } from '../../data/cms';
import { Announcement } from '../../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAnnouncement: (announcement: Announcement) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectAnnouncement,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#FAF9F5] text-[#1E2022] shadow-2xl z-10 flex flex-col h-full border-l border-[#E5E0D5] animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E5E0D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#B45309]/10 flex items-center justify-center text-[#B45309]">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg tracking-tight text-[#1E2022]">Announcements & Notices</h3>
              <p className="text-xs text-[#71717A]">Official updates, blueprints and timelines</p>
            </div>
          </div>
          <button
            id="close-notifications-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-[#71717A] hover:text-[#1E2022] hover:bg-[#F4F1EA] transition-colors"
            aria-label="Close notifications"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="p-3 bg-[#FEF3C7]/40 border border-[#FDE68A] rounded-lg text-xs text-[#92400E] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              All operational updates conform to <strong>Master Event Project Plan 1.0</strong>. Results and schedules are audited before publication.
            </span>
          </div>

          {ANNOUNCEMENTS.map((item) => (
            <article 
              key={item.id}
              className="p-5 bg-white border border-[#E5E0D5] rounded-xl hover:border-[#B45309]/40 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                  item.isUrgent 
                    ? 'bg-rose-100 text-rose-800' 
                    : 'bg-[#F4F1EA] text-[#52525B]'
                }`}>
                  {item.category}
                </span>
                <span className="text-[11px] text-[#A1A1AA] font-mono">{item.date}</span>
              </div>

              <h4 className="font-semibold text-sm text-[#1E2022] mb-1.5 group-hover:text-[#B45309] transition-colors leading-snug">
                {item.title}
              </h4>

              <p className="text-xs text-[#52525B] leading-relaxed mb-3">
                {item.summary}
              </p>

              <div className="pt-3 border-t border-[#F4F1EA] flex items-center justify-between">
                <button
                  id={`view-notice-${item.id}`}
                  onClick={() => {
                    onSelectAnnouncement(item);
                  }}
                  className="text-xs font-semibold text-[#B45309] hover:text-[#92400E] inline-flex items-center gap-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read Full Notice
                </button>

                {item.actionUrl && (
                  <a
                    href={item.actionUrl}
                    onClick={onClose}
                    className="text-xs text-[#71717A] hover:text-[#1E2022] inline-flex items-center gap-1"
                  >
                    <span>{item.actionLabel || 'Proceed'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E0D5] bg-white text-center">
          <p className="text-[11px] text-[#71717A]">
            Official communications of SwaraNidhi & THRIVE OS Governance.
          </p>
        </div>
      </div>
    </div>
  );
};
