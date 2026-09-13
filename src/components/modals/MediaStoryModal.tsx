import React, { useState } from 'react';
import { X, Play, Image as ImageIcon, FileText, Calendar, Clock, User, Share2, Bookmark, Check } from 'lucide-react';
import { MediaStory } from '../../types';

interface MediaStoryModalProps {
  story: MediaStory | null;
  onClose: () => void;
}

export const MediaStoryModal: React.FC<MediaStoryModalProps> = ({ story, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!story) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#D5CEBF] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Top bar with close */}
        <div className="p-4 sm:p-5 border-b border-[#E5E0D5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-bold uppercase bg-[#FEF3C7] text-[#92400E]">
              {story.type.toUpperCase()} • {story.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-[#71717A] hover:text-[#1E2022] hover:bg-[#F4F1EA] transition-colors"
              title="Copy share link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              id="close-media-modal-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-[#71717A] hover:text-[#1E2022] hover:bg-[#F4F1EA] transition-colors"
              aria-label="Close media view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Headline & Metadata */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E2022] leading-tight">
              {story.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#71717A] pb-4 border-b border-[#E5E0D5]">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#B45309]" />
                <span className="font-semibold text-[#1E2022]">{story.author.name}</span>
                <span>({story.author.role})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{story.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Media Presentation based on type */}
          {story.type === 'video' && (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#D5CEBF] shadow-md flex items-center justify-center">
                <img 
                  src={story.coverImage} 
                  alt={story.title}
                  className="w-full h-full object-cover opacity-75" 
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B45309] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                  <p className="text-white text-xs mt-3 font-mono">
                    Video Feature ({story.mediaDuration}) • High Definition
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-[#71717A] text-center font-mono">
                Audio/Video documentary recorded during SwaraNidhi Event 1.0 Field Sprints.
              </p>
            </div>
          )}

          {story.type === 'image' && story.galleryImages && (
            <div className="space-y-4">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-black border border-[#D5CEBF]">
                <img 
                  src={story.galleryImages[activePhotoIdx].url} 
                  alt={story.galleryImages[activePhotoIdx].caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-4 text-white text-xs">
                  {story.galleryImages[activePhotoIdx].caption}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {story.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 aspect-video transition-all ${
                      activePhotoIdx === idx ? 'border-[#B45309] scale-102' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {story.type === 'article' && (
            <div className="relative rounded-2xl overflow-hidden border border-[#D5CEBF] max-h-80">
              <img 
                src={story.coverImage} 
                alt={story.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Full Text Body */}
          <div className="prose prose-neutral max-w-none text-[#292524] text-base leading-relaxed space-y-4">
            {story.content.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#E5E0D5] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#78716C]">TOPICS:</span>
            {story.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 bg-white border border-[#E5E0D5] rounded-md text-xs font-medium text-[#44403C]"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
