import { TALENT_ARENAS, FAQS, PHILOSOPHY_STEPS, APPLICATION_CATEGORIES } from '../data/cms';

export interface ChatResponse {
  reply: string;
  suggestedChips?: string[];
  actionLink?: {
    label: string;
    url: string;
  };
}

export class AssistantService {
  /**
   * Generates a context-aware response for the SwaraNidhi AI Assistant.
   * Grounded strictly in the SwaraNidhi Master Event Plan and Platform Philosophy.
   */
  public static async askAssistant(userQuery: string): Promise<ChatResponse> {
    // Artificial brief delay for realistic human/AI interaction feel
    await new Promise((resolve) => setTimeout(resolve, 400));

    const q = userQuery.toLowerCase().trim();

    if (q.includes('what is') || q.includes('about') || q.includes('swaranidhi')) {
      return {
        reply: `SwaraNidhi is a future-oriented student talent and opportunity platform. Rather than a conventional one-off competition, it is designed around the philosophy: Learn while building. Build while learning. Students discover their strengths, solve real-world problems, receive seasoned mentorship, showcase demonstrable evidence of capability, and connect that proof directly to careers, research, and startup opportunities.`,
        suggestedChips: ['Who can participate?', 'Six Talent Arenas', 'How to Apply'],
        actionLink: { label: 'Explore About & Vision', url: '#about' }
      };
    }

    if (q.includes('who can') || q.includes('eligib') || q.includes('diploma') || q.includes('engineering')) {
      return {
        reply: `SwaraNidhi welcomes all young learners! We feature dedicated technical and prototyping tracks for Engineering (B.E/B.Tech) and Polytechnic Diploma students, as well as multidisciplinary categories for oratory, fine arts, science exploration, and social leadership. Both individual creators and squads (2-5 members) can apply.`,
        suggestedChips: ['Engineering Tracks', 'Application Pathways', 'Is it only startups?'],
        actionLink: { label: 'View Application Categories', url: '#apply' }
      };
    }

    if (q.includes('arena') || q.includes('competition') || q.includes('category') || q.includes('tracks')) {
      const arenaList = TALENT_ARENAS.map(a => `• ${a.name} (${a.tagline})`).join('\n');
      return {
        reply: `SwaraNidhi is organized into six distinct Talent Arenas:\n\n${arenaList}\n\nEach arena features standardized blueprints, objective scoring rubrics, and expert mentorship.`,
        suggestedChips: ['Explore Innovate Arena', 'How is judging conducted?', 'Apply for an Arena'],
        actionLink: { label: 'Browse All Arenas', url: '#about' }
      };
    }

    if (q.includes('journey') || q.includes('step') || q.includes('thrive') || q.includes('philosophy') || q.includes('how it works')) {
      return {
        reply: `The SwaraNidhi progression follows 10 connected stages: Discover → Learn → Build → Mentor → Improve → Compete → Showcase → Recognize → Connect → Thrive. For technical students, this translates into: Problem → Idea → Prototype → Testing → Mentorship → Iteration → Validation → Pitch → Opportunity.`,
        suggestedChips: ['Why Now Narrative', 'Engineering Pathway', 'Apply Now'],
        actionLink: { label: 'Inspect the Journey Timeline', url: '#why-now' }
      };
    }

    if (q.includes('mentor') || q.includes('judge') || q.includes('expert')) {
      return {
        reply: `We actively welcome practicing industry engineers, startup founders, research scientists, and academic leaders. Mentors participate in rubric-driven evaluation, technical workshops, and direct project reviews, helping students elevate prototypes into production-grade solutions.`,
        suggestedChips: ['Mentor Application', 'Judging Rubrics', 'Contact Team'],
        actionLink: { label: 'Apply as a Mentor', url: '#apply' }
      };
    }

    if (q.includes('college') || q.includes('institution') || q.includes('university') || q.includes('principal')) {
      return {
        reply: `Colleges and polytechnics can partner as SwaraNidhi Campus Chapters and Nodal Centers. Participating institutions receive campus talent analytics, visibility at the Grand Finale Showcase, and structured extracurricular validation that directly bolsters NAAC, NBA, and NIRF outcomes.`,
        suggestedChips: ['Institutional Partnership', 'Contact Us', 'Apply for College'],
        actionLink: { label: 'Institutional Collaboration', url: '#contact' }
      };
    }

    if (q.includes('startup') || q.includes('entrepreneur')) {
      return {
        reply: `Startup creation is one vital outcome, but definitely NOT the only one! Some students build deep-tech startups and enter incubators, while others secure industrial R&D internships, win research fellowships, file patents, or pursue higher education. What matters most is producing verifiable proof of what you can actually build.`,
        suggestedChips: ['Engineering Sub-story', 'Portfolio Evidence', 'Application Categories'],
        actionLink: { label: 'Read Our Plan & Story', url: '#why-now' }
      };
    }

    if (q.includes('apply') || q.includes('register') || q.includes('deadline')) {
      return {
        reply: `You can submit your application right now via our interactive multi-step pathway! Priority registration for Event 1.0 is currently active for Students, Teams, Mentors, and Institutions. Simply pick your category, choose your preferred arena, and outline your project or interests.`,
        suggestedChips: ['Start Application Form', 'Rules & Regulations', 'Check Arenas'],
        actionLink: { label: 'Open Application Pathway', url: '#apply' }
      };
    }

    // Default intelligent fallback
    return {
      reply: `SwaraNidhi is here to help students learn through building and connect real capability to future opportunities across technology, oratory, performing arts, research, and leadership. What specific aspect would you like to explore?`,
      suggestedChips: ['What is SwaraNidhi?', 'How do I apply?', 'Explore the 6 Arenas', 'Why Now Story'],
      actionLink: { label: 'Explore the Platform', url: '#about' }
    };
  }
}
