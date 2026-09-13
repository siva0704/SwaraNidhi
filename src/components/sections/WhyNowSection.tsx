import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { PHILOSOPHY_STEPS, ENGINEERING_SUBSTORY } from '../../data/cms';

interface WhyNowSectionProps {
  onOpenApply: () => void;
}

export const WhyNowSection: React.FC<WhyNowSectionProps> = ({ onOpenApply }) => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(2); // Default to "BUILD"
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'engineering'>('ecosystem');

  const currentMilestone = PHILOSOPHY_STEPS[selectedMilestoneIndex];

  return (
    <section id="why-now" className="py-24 md:py-32 border-b border-[#E5E0D5] relative bg-[#FAF9F5]">
      
      {/* Decorative architectural background watermark */}
      <div className="absolute right-12 top-24 font-serif text-8xl md:text-9xl text-[#EFECE6]/60 select-none pointer-events-none font-bold">
        THRIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#B45309] font-bold tracking-widest uppercase">
              03 / WHY NOW
            </span>
            <div className="w-12 h-px bg-[#B45309]" />
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              The Plan & The Narrative
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E2022] leading-tight">
                Education cannot stop at memorization. <br />
                <span className="italic font-normal text-[#B45309]">
                  The future belongs to those who build.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-3 text-base text-[#52525B] leading-relaxed">
              <p>
                The world has changed. Conventional degree certificates alone no longer guarantee competence. Industry, research laboratories, and startup ecosystems urgently demand candidates who can prove what they know by demonstrating what they have created.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Mode Switcher (Full Ecosystem Flow vs. Engineering/Diploma Sprint) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 bg-[#EFECE6] rounded-2xl max-w-xl mx-auto sm:mx-0">
          <button
            onClick={() => setActiveTab('ecosystem')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'ecosystem'
                ? 'bg-white text-[#1E2022] shadow-xs'
                : 'text-[#57534E] hover:text-[#1E2022]'
            }`}
          >
            The 10-Stage Platform Continuum
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'engineering'
                ? 'bg-white text-[#1E2022] shadow-xs'
                : 'text-[#57534E] hover:text-[#1E2022]'
            }`}
          >
            <Cpu className="w-4 h-4 text-[#B45309]" />
            <span>Engineering & Diploma Track</span>
          </button>
        </div>

        {/* TAB 1: FULL 10-STAGE ECOSYSTEM TIMELINE */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-12">
            
            {/* Interactive Timeline Stepper */}
            <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center gap-2 min-w-[760px] lg:min-w-full">
                {PHILOSOPHY_STEPS.map((milestone, idx) => {
                  const isSelected = selectedMilestoneIndex === idx;
                  return (
                    <button
                      key={milestone.step}
                      onClick={() => setSelectedMilestoneIndex(idx)}
                      className={`group relative flex-1 text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-[#1E2022] text-[#FAF9F5] border-[#1E2022] shadow-md scale-102'
                          : 'bg-white text-[#52525B] border-[#E5E0D5] hover:border-[#B45309]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                        <span className={isSelected ? 'text-[#D97706]' : 'text-[#78716C]'}>
                          {milestone.step}
                        </span>
                        {idx < PHILOSOPHY_STEPS.length - 1 && (
                          <ChevronRight className="w-3 h-3 text-[#A8A29E]" />
                        )}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider truncate">
                        {milestone.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Stage Detail Editorial Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D5CEBF] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-mono text-xs font-semibold">
                    <span>STAGE {currentMilestone.step} OF 10</span>
                    <span>•</span>
                    <span>{currentMilestone.title}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1E2022]">
                    {currentMilestone.description}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5E0D5]">
                    <div>
                      <div className="text-[11px] font-mono uppercase text-[#78716C] mb-1">
                        Cohort Activity
                      </div>
                      <div className="text-sm font-medium text-[#1E2022]">
                        {currentMilestone.activity}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono uppercase text-[#78716C] mb-1">
                        Tangible Artifact Generated
                      </div>
                      <div className="text-sm font-medium text-[#B45309] flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-[#B45309] shrink-0" />
                        <span>{currentMilestone.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F5] p-6 rounded-2xl border border-[#E5E0D5] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#78716C]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Evidence-Driven Architecture</span>
                  </div>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    Under SwaraNidhi, no student leaves empty-handed. Every stage is logged as an immutable milestone credential that links into their longitudinal <strong>THRIVE OS</strong> portfolio.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onOpenApply}
                      className="w-full py-2.5 bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase rounded-xl hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Join as a Participant</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DEDICATED ENGINEERING & DIPLOMA SUB-STORY */}
        {activeTab === 'engineering' && (
          <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#D5CEBF] shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B45309] font-bold">
                Specialized Technical Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E2022]">
                The Engineering & Polytechnic Prototyping Cycle
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Designed specifically for B.E, B.Tech, and 3-Year Polytechnic Diploma students. Moving from blank breadboards and raw CAD drafts to audited live pilot deployments.
              </p>
            </div>

            {/* Step sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3 pt-4">
              {ENGINEERING_SUBSTORY.map((step, idx) => (
                <div 
                  key={step.phase}
                  className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] flex flex-col justify-between space-y-2 relative group hover:border-[#B45309]"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#B45309] font-bold">{step.phase}</span>
                    {idx < ENGINEERING_SUBSTORY.length - 1 && (
                      <span className="hidden lg:inline text-[#A8A29E]">→</span>
                    )}
                  </div>
                  <div className="font-bold text-sm text-[#1E2022]">
                    {step.name}
                  </div>
                  <div className="text-[11px] text-[#78716C] leading-snug">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#FEF3C7]/50 rounded-xl border border-[#FDE68A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#92400E]">
              <span>
                <strong>Equal Status for Polytechnic Builders:</strong> We recognize that hands-on diploma students possess exceptional shop-floor fabrication intuition that degree theory programs often miss.
              </span>
              <button
                onClick={onOpenApply}
                className="shrink-0 font-bold uppercase tracking-wider underline hover:text-[#78350F]"
              >
                Apply for Diploma Track
              </button>
            </div>
          </div>
        )}

        {/* The 4 Non-Exclusive Future Pathways (Startup is ONE, not the only) */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] font-bold">
              MULTI-DESTINATION PLATFORM
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1E2022]">
              Startup creation is one outcome. Not the only one.
            </h3>
            <p className="text-xs sm:text-sm text-[#78716C]">
              We respect every student's distinct ambitions. Demonstrated capability unlocks multiple future doors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1E2022]">
                Startups & Venturing
              </h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                For student teams with scalable market viability, connect into incubator pipelines, seed grants, and patent counsel.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1E2022]">
                High-Tier Industry Careers
              </h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Bypass sterile keyword resume screenings by presenting hiring managers with verified live project evidence and git histories.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1E2022]">
                Research & Higher Studies
              </h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Publish peer-reviewed exploratory papers and secure prestigious national & international academic research fellowships.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1E2022]">
                Social Impact & Civic Change
              </h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Deploy grassroots solutions that alleviate rural poverty, conserve drinking water, or enrich cultural heritage.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
