import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Lightbulb, 
  Mic, 
  Drama, 
  Palette, 
  Compass, 
  Users, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { TALENT_ARENAS, PORTFOLIO_PROJECTS } from '../../data/cms';
import { TalentArena, PortfolioItem } from '../../types';

interface AboutSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
  onOpenApply: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSelectProject,
  onOpenApply,
}) => {
  const [activeArenaId, setActiveArenaId] = useState<string>('innovate');
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');

  const activeArena = TALENT_ARENAS.find((a) => a.id === activeArenaId) || TALENT_ARENAS[0];

  const filteredProjects = portfolioFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === portfolioFilter || p.arenaId === portfolioFilter.toLowerCase());

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const supportingProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  const categories = ['All', 'Student Projects', 'Innovation', 'Technology', 'Research', 'Arts & Expression'];

  const getArenaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      case 'Drama': return <Drama className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Editorial Section Anchor & Intro */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#B45309] font-bold tracking-widest uppercase">
              02 / UNDERSTAND
            </span>
            <div className="w-12 h-px bg-[#B45309]" />
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              About SwaraNidhi & Evidence
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E2022] leading-tight">
                Not a one-time contest. <br />
                <span className="italic font-normal text-[#B45309]">A sustainable talent engine.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-4 text-[#52525B] text-base sm:text-lg leading-relaxed">
              <p>
                SwaraNidhi was initiated to solve a fundamental contradiction in Indian education: while our institutions are packed with hungry talent, students graduate with certificates instead of verifiable proof of what they can create.
              </p>
              <p className="text-sm text-[#78716C]">
                Governed by the <strong>Master Event Project Plan 1.0</strong> and architected for integration into <strong>THRIVE OS</strong>, we structure the continuum between self-discovery, engineering craftsmanship, rubric evaluation, and industry opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophical Pillars (Who we are, What we build, Why it matters) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 bg-white rounded-2xl border border-[#E5E0D5] space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#1E2022] font-mono text-sm font-bold">
              01
            </div>
            <h3 className="text-xl font-serif text-[#1E2022]">Who We Are</h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              A coalition of educators, startup founders, industrial engineers, and cultural mentors dedicated to uncovering youth capability before conventional recruitment filters discard it.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#E5E0D5] space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#B45309] font-mono text-sm font-bold">
              02
            </div>
            <h3 className="text-xl font-serif text-[#1E2022]">What We Are Building</h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              A multi-domain competition and incubation framework spanning hardware prototyping, expressive communication, stage performance, applied sciences, and civic changemaking.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#E5E0D5] space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#1E2022] font-mono text-sm font-bold">
              03
            </div>
            <h3 className="text-xl font-serif text-[#1E2022]">Why We Are Building It</h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Because true confidence cannot be memorized. When a student fabricates a working sensor, defends an ethical thesis, or commands a stage, they generate lifelong agency and evidence.
            </p>
          </div>
        </div>

        {/* Six Talent Arenas Blueprint (Interactive architectural selector) */}
        <div className="space-y-8 bg-[#F4F1EA]/60 p-6 sm:p-10 rounded-3xl border border-[#E5E0D5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#B45309] font-bold">
                Framework 1.0
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E2022] mt-1">
                The Six Talent Arenas
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#78716C] max-w-md">
              Every arena features custom blueprints, specialized rubrics, and dedicated mentors. Select an arena to inspect its initial competition directions.
            </p>
          </div>

          {/* Arena Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {TALENT_ARENAS.map((arena) => {
              const isSelected = activeArenaId === arena.id;
              return (
                <button
                  key={arena.id}
                  onClick={() => setActiveArenaId(arena.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-[#1E2022] text-white border-[#1E2022] shadow-md -translate-y-0.5'
                      : 'bg-white text-[#4A4E53] border-[#E5E0D5] hover:border-[#B45309]/50 hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] opacity-70">{arena.code}</span>
                    <span className={isSelected ? 'text-[#D97706]' : 'text-[#78716C]'}>
                      {getArenaIcon(arena.icon)}
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm tracking-wide uppercase">
                    {arena.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Arena Deep-Dive Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-[#B45309]/10 text-[#B45309]">
                    ARENA {activeArena.code} • {activeArena.name}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif text-[#1E2022]">
                  {activeArena.tagline}
                </h4>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {activeArena.description}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-[#78716C] mb-2">
                    Core Skills Emphasized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeArena.skillsEmphasized.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#F4F1EA] text-xs font-medium text-[#44403C]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E0D5] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold flex items-center justify-between">
                  <span>Initial Competition Portfolio</span>
                  <span className="text-[10px] text-[#A8A29E]">Master Plan Phase 1</span>
                </div>

                <div className="space-y-2">
                  {activeArena.initialCompetitions.map((comp, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E2022] bg-white p-2.5 rounded-lg border border-[#E5E0D5]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                      <span className="font-medium">{comp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs">
                  <span className="text-[#78716C]">Ready to enter this arena?</span>
                  <button
                    onClick={onOpenApply}
                    className="font-semibold text-[#B45309] hover:text-[#92400E] inline-flex items-center gap-1"
                  >
                    <span>Register Team</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Editorial Portfolio Showcase Section */}
        <div className="space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E5E0D5]">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] font-bold">
                PORTFOLIO & EVIDENCE
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#1E2022]">
                Artifacts of Capability
              </h3>
              <p className="text-sm text-[#78716C] max-w-xl">
                A showcase of working hardware, social interventions, and technical systems engineered by our pilot cohorts.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPortfolioFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    portfolioFilter === cat
                      ? 'bg-[#1E2022] text-[#FAF9F5] shadow-xs'
                      : 'bg-white border border-[#E5E0D5] text-[#52525B] hover:bg-[#F4F1EA]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Editorial Portfolio Layout */}
          <div className="space-y-8">
            
            {/* 1. Large Featured Project Block */}
            {featuredProject && (
              <div 
                className="group relative bg-white rounded-3xl border border-[#D5CEBF] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => onSelectProject(featuredProject)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Visual Frame */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#1E2022]">
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-white/90 backdrop-blur-xs text-[#1E2022] shadow-xs">
                      Featured Showcase
                    </span>
                  </div>

                  {/* Editorial Copy */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#B45309] font-bold">
                          {featuredProject.category}
                        </span>
                        <span className="text-[#A1A1AA]">•</span>
                        <span className="text-xs font-mono text-[#78716C]">
                          {featuredProject.institutionType}
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-serif text-[#1E2022] group-hover:text-[#B45309] transition-colors leading-tight">
                        {featuredProject.title}
                      </h4>

                      <p className="text-sm text-[#52525B] leading-relaxed">
                        {featuredProject.summary}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E5E0D5]">
                      {featuredProject.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <div className="text-[10px] uppercase font-mono text-[#78716C]">{m.label}</div>
                          <div className="text-lg font-serif font-bold text-[#1E2022]">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-medium text-[#78716C]">
                        {featuredProject.studentTeam}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E2022] group-hover:text-[#B45309] group-hover:translate-x-1 transition-all">
                        <span>Inspect Evidence</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* 2. Secondary Supporting Projects Grid (Non-generic editorial cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group bg-white rounded-2xl border border-[#E5E0D5] overflow-hidden hover:border-[#B45309]/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden bg-[#1E2022]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/90 text-[#1E2022] font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/60 backdrop-blur-xs text-white">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-serif text-lg font-semibold text-[#1E2022] group-hover:text-[#B45309] transition-colors line-clamp-2">
                        {project.title}
                      </h5>
                      <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F4F1EA] flex items-center justify-between text-xs">
                      <span className="text-[#78716C] font-mono text-[11px] truncate max-w-[170px]">
                        {project.studentTeam}
                      </span>
                      <span className="font-semibold text-[#B45309] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
