import React from 'react';
import { ArrowRight, Compass, Sparkles, CheckCircle, Award, Cpu, Flame, Layers } from 'lucide-react';
import { SITE_METADATA } from '../../data/cms';

interface HeroSectionProps {
  onOpenApply: () => void;
  onExploreJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApply,
  onExploreJourney,
}) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E0D5]"
    >
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E2022 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient warm radial accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F3EAD3]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#DDD7CC] text-xs font-semibold tracking-wider uppercase text-[#78350F]">
              <span className="w-2 h-2 rounded-full bg-[#B45309] animate-pulse" />
              <span>{SITE_METADATA.projectPlanVersion}</span>
              <span className="text-[#A1A1AA]">•</span>
              <span className="text-[#57534E]">Ages 16–25 Talent Ecosystem</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif tracking-tight text-[#1E2022] leading-[1.12]">
              Learn while building. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B45309]">Build while learning.</span> <br />
              Create evidence for your future.
            </h1>

            {/* Supporting statement */}
            <p className="text-lg sm:text-xl text-[#52525B] max-w-2xl font-normal leading-relaxed">
              SwaraNidhi provides engineering, polytechnic diploma, and multidisciplinary students a rigorous platform to discover their strengths, build real solutions, receive industry mentorship, compete fairly, and connect capabilities to startups, careers, and research.
            </p>

            {/* Core Value Pillars Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Real Prototypes, Not Mockups',
                'Engineering & Diploma Tracks',
                'Audited Judging Rubrics',
                'Verifiable Evidence Records',
              ].map((pill, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E0D5] rounded-md text-xs font-medium text-[#44403C]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-apply-cta"
                onClick={onOpenApply}
                className="px-8 py-4 rounded-full bg-[#1E2022] text-[#FAF9F5] text-sm font-semibold tracking-wide uppercase hover:bg-[#B45309] active:scale-98 transition-all shadow-md flex items-center justify-center gap-3 group"
              >
                <span>Apply For Event 1.0</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-explore-cta"
                onClick={onExploreJourney}
                className="px-7 py-4 rounded-full bg-white border border-[#D5CEBF] text-[#1E2022] text-sm font-semibold tracking-wide hover:bg-[#EFECE6] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#B45309]" />
                <span>Explore the Journey</span>
              </button>
            </div>

            {/* Sub-context notes */}
            <div className="pt-2 text-xs text-[#78716C] flex items-center gap-4">
              <span className="font-mono text-[#A8A29E]">FLOW:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                Discover
              </span>
              <span>→</span>
              <span>Build</span>
              <span>→</span>
              <span>Compete</span>
              <span>→</span>
              <span>Showcase</span>
              <span>→</span>
              <span className="font-semibold text-[#1E2022]">Thrive</span>
            </div>
          </div>

          {/* Right / Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D5CEBF] shadow-xl bg-white aspect-4/5 sm:aspect-square lg:aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Students engineering IoT hardware prototype in workshop"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022]/90 via-[#1E2022]/30 to-transparent" />

                {/* Inset Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B45309]/90 backdrop-blur-xs text-[11px] font-mono uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Hardware Sprint • Innovate Arena</span>
                  </div>
                  <h3 className="text-lg font-serif font-medium text-white leading-snug">
                    "Agrimod" Multispectral Sensor Test
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Engineered by polytechnic diploma and undergraduate students, tested on 40 acres of active agricultural land.
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Verified Telemetry */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D5CEBF] shadow-lg max-w-[220px] hidden sm:block animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] mb-1">
                  <span>BENCHMARK DATA</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#1E2022]">94.2%</div>
                <div className="text-xs text-[#57534E] font-medium">Field NDVI Accuracy vs. ₹45,000 Lab Spectrometer</div>
                <div className="mt-2 pt-2 border-t border-[#F4F1EA] text-[10px] text-[#A8A29E] font-mono">
                  Verified by Master Rubric M4
                </div>
              </div>

              {/* Floating Card 2: Six Arenas Indicator */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#1E2022] text-[#FAF9F5] p-4 rounded-xl shadow-xl max-w-[240px] border border-[#3F3F46]">
                <div className="flex items-center gap-2 mb-1.5 text-xs text-[#D97706] font-semibold tracking-wide">
                  <Layers className="w-4 h-4" />
                  <span>SIX TALENT ARENAS</span>
                </div>
                <div className="text-xs text-neutral-300 leading-snug">
                  Innovate • Express • Perform • Create • Discover • Lead
                </div>
                <div className="mt-2 text-[10px] text-neutral-400 font-mono">
                  Phase 1 Founding Portfolio
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
