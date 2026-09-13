import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { APPLICATION_CATEGORIES } from '../../data/cms';
import { ApplicationCategoryOption } from '../../types';

interface ApplicationSectionProps {
  onSelectCategoryToApply: (categoryId: string) => void;
}

export const ApplicationSection: React.FC<ApplicationSectionProps> = ({
  onSelectCategoryToApply,
}) => {
  return (
    <section id="apply" className="py-24 md:py-32 border-b border-[#E5E0D5] relative bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#B45309] font-bold tracking-widest uppercase">
              05 / APPLY
            </span>
            <div className="w-12 h-px bg-[#B45309]" />
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Participation Pathways
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E2022] leading-tight">
            Where does your journey begin?
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            SwaraNidhi is open to ambitious individuals, multi-talent teams, seasoned mentors, and educational campuses. Choose your category to begin the Event 1.0 onboarding process.
          </p>
        </div>

        {/* The 5 Numbered Category Cards (Direct translation of the hand-drawn sketch!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {APPLICATION_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-3xl border border-[#E5E0D5] p-6 flex flex-col justify-between hover:border-[#B45309] hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="space-y-4">
                
                {/* Number Badge (Hand-drawn sketch: (1) (2) (3) (4) (5)) */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#F4F1EA] group-hover:bg-[#B45309] group-hover:text-white transition-colors flex items-center justify-center font-serif text-lg font-bold text-[#1E2022]">
                    {cat.num}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#F4F1EA] px-2 py-0.5 rounded text-[#78716C]">
                    Open Track
                  </span>
                </div>

                {/* Title & Badge */}
                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2022] group-hover:text-[#B45309] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#B45309] font-medium">
                    {cat.badge}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#52525B] leading-relaxed">
                  {cat.description}
                </p>

                {/* Key Points */}
                <div className="space-y-1.5 pt-3 border-t border-[#F4F1EA]">
                  <div className="text-[10px] font-mono uppercase text-[#78716C]">Eligible For:</div>
                  {cat.nextOpportunities.slice(0, 2).map((opp, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#44403C]">
                      <span className="w-1 h-1 rounded-full bg-[#B45309]" />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectCategoryToApply(cat.id)}
                  className="w-full py-2.5 px-4 bg-[#FAF9F5] group-hover:bg-[#1E2022] text-[#1E2022] group-hover:text-white rounded-xl text-xs font-semibold tracking-wide uppercase transition-all flex items-center justify-center gap-2 border border-[#E5E0D5] group-hover:border-[#1E2022]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Supporting Notice Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B45309]/10 text-[#B45309] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1E2022]">
                Guaranteed Fair & Rubric-Audited Assessment
              </h4>
              <p className="text-xs text-[#52525B]">
                All participating cohorts are evaluated under published rubrics with zero undisclosed backroom scoring.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectCategoryToApply('eng-student')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#1E2022] text-white text-xs font-semibold tracking-wide uppercase hover:bg-[#B45309] transition-colors flex items-center gap-2"
          >
            <span>Start Multi-Step Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
