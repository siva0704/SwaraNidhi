export type TalentArenaId = 'innovate' | 'express' | 'perform' | 'create' | 'discover' | 'lead';

export interface TalentArena {
  id: TalentArenaId;
  code: string;
  name: string;
  tagline: string;
  description: string;
  initialCompetitions: string[];
  skillsEmphasized: string[];
  futureOutcomes: string[];
  icon: string;
  themeColor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Innovation' | 'Technology' | 'Student Projects' | 'Entrepreneurship' | 'Research' | 'Social Impact' | 'Arts & Expression';
  arenaId: TalentArenaId;
  image: string;
  summary: string;
  fullStory: string;
  keyInnovations: string[];
  studentTeam: string;
  institutionType: 'Engineering College' | 'Polytechnic Diploma' | 'Inter-University' | 'STEM Institute';
  status: 'Prototype Validated' | 'In Incubation' | 'State Recognition' | 'Pilot Deployment' | 'Award Winner';
  year: string;
  metrics: { label: string; value: string }[];
  outcomes: ('Startups' | 'Industry Career' | 'Research Fellowship' | 'Patent Application' | 'Community Impact' | 'Cultural Fellowships' | 'Higher Education Grants')[];
  featured?: boolean;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
  activity: string;
  deliverable: string;
}

export interface MediaStory {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  type: 'video' | 'image' | 'article';
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readingTime: string;
  coverImage: string;
  mediaDuration?: string;
  tags: string[];
  featured?: boolean;
  galleryImages?: { url: string; caption: string }[];
  videoEmbedUrl?: string;
}

export interface ApplicationCategoryOption {
  id: string;
  num: string;
  title: string;
  badge: string;
  description: string;
  targetAudience: string;
  eligibility: string[];
  nextOpportunities: string[];
  recommendedArenas: TalentArenaId[];
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Competition Blueprint' | 'Deadline' | 'Masterclass' | 'Ecosystem Update' | 'Rules & Regulations';
  date: string;
  summary: string;
  details: string;
  isUrgent?: boolean;
  actionUrl?: string;
  actionLabel?: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone?: string;
  organization: string;
  category: 'Student' | 'Institution / College' | 'Mentor' | 'Industry Partner' | 'Media' | 'General';
  subject: string;
  message: string;
}

export interface ApplicationFormData {
  category: string;
  applicantType: 'individual' | 'team';
  applicantName: string;
  teamName?: string;
  teamSize?: string;
  institutionName: string;
  academicLevel: 'Engineering (B.E/B.Tech)' | 'Diploma (Polytechnic)' | 'Postgraduate' | 'Faculty/Mentor' | 'Other';
  selectedArena: TalentArenaId;
  projectIdeaTitle: string;
  projectAbstract: string;
  email: string;
  phone: string;
  portfolioOrGithubLink?: string;
  termsAccepted: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  chips?: string[];
}
