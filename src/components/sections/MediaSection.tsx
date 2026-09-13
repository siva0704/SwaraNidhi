import React, { useState } from 'react';
import { Play, Image as ImageIcon, FileText, ArrowUpRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { MEDIA_STORIES } from '../../data/cms';
import { MediaStory } from '../../types';

interface MediaSectionProps {
  onSelectStory: (story: MediaStory) => void;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ onSelectStory }) => {
  const [filterType, setFilterType] = useState<'all' | 'video' | 'image' | 'article'>('all');

  const filteredStories = filterType === 'all'
    ? MEDIA_STORIES
    : MEDIA_STORIES.filter((s) => s.type === filterType);

  const featuredStory = MEDIA_STORIES.find((s) => s.featured) || MEDIA_STORIES[0];
  const otherStories = filteredStories.filter((s) => s.id !== (filterType === 'all' ? featuredStory?.id : ''));

  return (
    <section id="articles" className="py-24 md:py-32 border-b border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E0D5]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#B45309] font-bold tracking-widest uppercase">
                04 / EXPLORE
              </span>
              <div className="w-12 h-px bg-[#B45309]" />
              <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
                Articles & Media Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E2022]">
              Stories from the Arena
            </h2>
            <p className="text-sm text-[#78716C] max-w-xl">
              Documenting the student journey across video documentaries, photo archives, and analytical research on talent architecture.
            </p>
          </div>

          {/* Media Format Filter Buttons (as indicated in sketch: Video, Image, Article) */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'video', label: 'Video Features', icon: Play },
              { id: 'image', label: 'Photo Archives', icon: ImageIcon },
              { id: 'article', label: 'In-Depth Essays', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id as any)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filterType === tab.id
                      ? 'bg-[#1E2022] text-[#FAF9F5] shadow-xs'
                      : 'bg-white border border-[#E5E0D5] text-[#52525B] hover:bg-[#F4F1EA]'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Layout: Featured Story + Media Grid */}
        <div className="space-y-12">
          
          {/* Featured Video / Main Story (Dominant Editorial Space) */}
          {filterType === 'all' && featuredStory && (
            <div 
              onClick={() => onSelectStory(featuredStory)}
              className="group relative bg-white rounded-3xl border border-[#D5CEBF] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Media frame */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-black">
                  <img 
                    src={featuredStory.coverImage} 
                    alt={featuredStory.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play badge for video */}
                  {featuredStory.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#B45309]/95 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-white/90 text-[#1E2022]">
                      FEATURED {featuredStory.type.toUpperCase()}
                    </span>
                  </div>

                  {featuredStory.mediaDuration && (
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-black/70 text-white font-mono text-xs">
                      {featuredStory.mediaDuration}
                    </div>
                  )}
                </div>

                {/* Editorial text */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#78716C]">
                      <span className="text-[#B45309] font-bold uppercase">{featuredStory.category}</span>
                      <span>•</span>
                      <span>{featuredStory.readingTime}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#1E2022] group-hover:text-[#B45309] transition-colors leading-tight">
                      {featuredStory.title}
                    </h3>

                    <p className="text-sm text-[#52525B] leading-relaxed">
                      {featuredStory.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E5E0D5] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#1E2022]">{featuredStory.author.name}</div>
                      <div className="text-[11px] text-[#78716C]">{featuredStory.author.role}</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E2022] group-hover:text-[#B45309] transition-colors">
                      <span>Watch & Read</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Supporting Media Cards (Video, Image, Article) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStories.map((story) => (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="group bg-white rounded-2xl border border-[#E5E0D5] overflow-hidden hover:border-[#B45309]/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/90 text-[#1E2022] font-semibold flex items-center gap-1">
                      {story.type === 'video' && <Play className="w-3 h-3 fill-current" />}
                      {story.type === 'image' && <ImageIcon className="w-3 h-3" />}
                      {story.type === 'article' && <FileText className="w-3 h-3" />}
                      <span>{story.type}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/60 backdrop-blur-xs text-white">
                      {story.readingTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#B45309] font-medium uppercase">
                      {story.category}
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1E2022] group-hover:text-[#B45309] transition-colors leading-snug">
                      {story.title}
                    </h4>
                    <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F4F1EA] flex items-center justify-between text-xs">
                    <span className="text-[#78716C] font-mono text-[11px]">
                      {story.date}
                    </span>
                    <span className="font-semibold text-[#1E2022] group-hover:text-[#B45309] flex items-center gap-1 transition-colors">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
