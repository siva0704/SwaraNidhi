import { 
  TalentArena, 
  PortfolioItem, 
  JourneyMilestone, 
  MediaStory, 
  ApplicationCategoryOption, 
  Announcement 
} from '../types';

export const SITE_METADATA = {
  brandName: 'SWARANIDHI',
  tagline: 'Talent • Learning • Innovation • Future',
  motto: 'Learn while building. Build while learning. Connect capability to your future.',
  projectPlanVersion: 'Master Event Project Plan 1.0',
  ecosystemParent: 'THRIVE OS Architecture',
};

export const TALENT_ARENAS: TalentArena[] = [
  {
    id: 'innovate',
    code: '01',
    name: 'INNOVATE',
    tagline: 'Ideas, invention, entrepreneurship and tangible impact',
    description: 'Empowering students to transform conceptual theories into functional hardware, software solutions, and social enterprise prototypes that solve pressing local and national challenges.',
    initialCompetitions: [
      'Student Pitch Arena',
      'Hardware & IoT Prototype Sprint',
      'Community Problem Solver Challenge',
      'Sustainable Agri-Tech Innovations',
      'Startup Viability Track'
    ],
    skillsEmphasized: ['Rapid Prototyping', 'Systems Thinking', 'User Validation', 'Techno-Economic Pitching'],
    futureOutcomes: ['Seed Incubator Entry', 'Patent Filing Support', 'Deep-Tech Internships', 'Enterprise Pilots'],
    icon: 'Lightbulb',
    themeColor: '#B45309', // Warm bronze/amber
  },
  {
    id: 'express',
    code: '02',
    name: 'EXPRESS',
    tagline: 'Voice, persuasive communication and articulate discourse',
    description: 'Fostering courageous thinkers who can debate complex issues, deliver inspiring narratives, and command public discourse with clarity and ethical substance.',
    initialCompetitions: [
      'National Parliamentary Debate',
      'Keynote Storytelling Arena',
      'Bilingual Oratory & Elocution',
      'Tech-Ethics Policy Colloquium',
      'Spoken Word & Thought Leadership'
    ],
    skillsEmphasized: ['Rhetorical Analysis', 'Impromptu Framing', 'Voice Modulation', 'Evidence-Based Argumentation'],
    futureOutcomes: ['Public Policy Fellowships', 'Media & Communications Roles', 'Diplomatic Youth Delegations'],
    icon: 'Mic',
    themeColor: '#0369A1', // Deep azure
  },
  {
    id: 'perform',
    code: '03',
    name: 'PERFORM',
    tagline: 'Stage craft, performing arts and collaborative rhythm',
    description: 'Celebrating bodily discipline, theatrical storytelling, classical and contemporary dance forms, and the expressive synchronization of collective human performance.',
    initialCompetitions: [
      'Classical & Contemporary Solo Dance',
      'Symphonic & Folk Ensemble Choreography',
      'Street Play & Social Theatre (Nukkad Natak)',
      'Acoustic & Classical Vocal Showcase',
      'Dramatic Monologue Championship'
    ],
    skillsEmphasized: ['Stage Presence', 'Spatial Choreography', 'Emotional Range', 'Team Synchronization'],
    futureOutcomes: ['Cultural Fellowships', 'Performance Grants', 'National Stage Residencies'],
    icon: 'Drama',
    themeColor: '#7C3AED', // Regal violet
  },
  {
    id: 'create',
    code: '04',
    name: 'CREATE',
    tagline: 'Visual art, spatial craft and digital aesthetics',
    description: 'Bridging fine art traditions and forward-looking digital media, UI/UX architecture, kinetic installations, and industrial design.',
    initialCompetitions: [
      'Generative & Digital Fine Art',
      'UI/UX Architecture Sprint',
      'Fine Arts & Canvas Exposition',
      'Sustainable Product & Ergonomics Craft',
      'Visual Identity & Poster Narrative'
    ],
    skillsEmphasized: ['Visual Hierarchy', 'Material Exploration', 'Color Theory', 'Human-Centered Design'],
    futureOutcomes: ['Design Studio Placements', 'Gallery Showcases', 'Creative Agency Fellowships'],
    icon: 'Palette',
    themeColor: '#BE185D', // Crimson rose
  },
  {
    id: 'discover',
    code: '05',
    name: 'DISCOVER',
    tagline: 'Applied science, exploratory research and empirical rigor',
    description: 'Encouraging exploratory experimental methodology, scientific investigations, algorithmic analysis, and curiosity-driven discovery across STEM domains.',
    initialCompetitions: [
      'Applied Science Innovation Exposition',
      'Clean Energy & Material Research Challenge',
      'STEM Olympiad & Algorithmic Hack',
      'Undergraduate Research Paper Symposium',
      'Biotech & Agronomy Exploratory Fair'
    ],
    skillsEmphasized: ['Empirical Methodology', 'Data Synthesis', 'Hypothesis Testing', 'Scientific Publication'],
    futureOutcomes: ['Research Lab Placements', 'Higher Education Grants', 'Academic Journal Mentorship'],
    icon: 'Compass',
    themeColor: '#047857', // Emerald green
  },
  {
    id: 'lead',
    code: '06',
    name: 'LEAD',
    tagline: 'Collaborative governance, ethics and grassroots changemaking',
    description: 'Developing empathetic student leaders who mobilize peers, resolve operational gridlocks, design civic initiatives, and build enduring community institutions.',
    initialCompetitions: [
      'Young Changemaker Action Summit',
      'Crisis Simulation & Leadership Taskforce',
      'Social Impact Field Experiment',
      'Rural Development Challenge',
      'Institutional Campus Governance Hack'
    ],
    skillsEmphasized: ['Consensus Building', 'Crisis Mitigation', 'Resource Mobilization', 'Ethical Governance'],
    futureOutcomes: ['Social Enterprise Grants', 'Governance Fellowships', 'Public Sector Internships'],
    icon: 'Users',
    themeColor: '#C2410C', // Rust orange
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-drone-sensor',
    title: 'Agrimod: Decentralized IoT Crop Stress Monitor',
    subtitle: 'Low-cost multispectral sensor array built by third-year diploma & degree engineers',
    category: 'Student Projects',
    arenaId: 'innovate',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    summary: 'A field-tested edge sensor unit calculating vegetative NDVI indexes at 1/10th commercial cost, designed for smallholder marginal farmers.',
    fullStory: 'Developed across an intensive 8-week Build & Test cycle within the SwaraNidhi pilot cohort. The student engineering team fabricated custom dual-sensor optical PCBs, implemented lightweight LoRa mesh networking for connectivity in remote fields, and gathered field telemetry from 40 test acres.',
    keyInnovations: ['Custom embedded LoRa firmware', 'Optical NDVI ratio filtering', 'Solar-scavenging power circuit', 'Vernacular SMS farmer alerts'],
    studentTeam: 'Team Agrimod (3 Engineering + 1 Diploma Student)',
    institutionType: 'Polytechnic Diploma',
    status: 'Pilot Deployment',
    year: '2025–2026',
    metrics: [
      { label: 'Field Accuracy', value: '94.2%' },
      { label: 'Bill of Materials', value: '< ₹1,800' },
      { label: 'Telemetry Range', value: '4.8 km' },
      { label: 'Pilot Farmers', value: '28 Families' }
    ],
    outcomes: ['Startups', 'Patent Application', 'Industry Career'],
    featured: true
  },
  {
    id: 'proj-smart-prosthetic',
    title: 'KineticFlex: Modular 3D-Printed Myoelectric Gripper',
    subtitle: 'Adaptive bio-signal prosthetic hand engineered for affordable rehabilitation',
    category: 'Innovation',
    arenaId: 'innovate',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    summary: 'Using surface EMG signal processing and compliant 3D-printed flexural joints, providing tactile pinch grasp for vocational trainees.',
    fullStory: 'Mentored by orthopedic bio-engineers and fabrication specialists, the students iterated through 6 mechanical hand designs to reduce weight while preserving a 15kg dynamic pull strength.',
    keyInnovations: ['Tendon-driven mechanical design', 'Real-time noise filtering for raw EMG', 'On-device calibration'],
    studentTeam: 'BioKinetic Laboratory Cohort',
    institutionType: 'Engineering College',
    status: 'State Recognition',
    year: '2025',
    metrics: [
      { label: 'Grip Latency', value: '< 65 ms' },
      { label: 'Unit Weight', value: '380 grams' },
      { label: 'Rehab Cost', value: '₹4,500' }
    ],
    outcomes: ['Research Fellowship', 'Patent Application'],
    featured: false
  },
  {
    id: 'proj-vernacular-energy',
    title: 'SuryaGrid: Micro-Hydro Kinetic Turbine for Canal Canopies',
    subtitle: 'Scalable renewable generation designed by mechanical diploma students',
    category: 'Technology',
    arenaId: 'discover',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    summary: 'A sub-surface low-head hydro generator that harnesses uniform water flow in irrigation canals without requiring concrete civil dams.',
    fullStory: 'Diploma students utilized fluid dynamics simulation and recycled high-density polymers to construct modular floating hydro-pods that can power rural telecom nodes.',
    keyInnovations: ['Helical Darrieus turbine blades', 'Hermetic waterproof generator pod', 'Sub-meter flow induction'],
    studentTeam: 'HydroCraft Polytechnic Team',
    institutionType: 'Polytechnic Diploma',
    status: 'Prototype Validated',
    year: '2025',
    metrics: [
      { label: 'Continuous Output', value: '650 Watts' },
      { label: 'Turbine Efficiency', value: '38.4%' },
      { label: 'Installation Time', value: '< 2 Hours' }
    ],
    outcomes: ['Industry Career', 'Community Impact'],
    featured: false
  },
  {
    id: 'proj-nukkad-dignity',
    title: 'Dhwani: Theatre for Digital Literacy & Financial Safety',
    subtitle: 'Original theatrical street play staged across 18 semi-urban transit hubs',
    category: 'Arts & Expression',
    arenaId: 'perform',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
    summary: 'A high-impact satirical drama combining percussive folk rhythms and live legal awareness to demystify digital banking fraud.',
    fullStory: 'Crafted under the PERFORM arena, students researched actual fraud case studies with local bank ombudsmen, translating complex cybersecurity guidance into compelling vernacular dialogue.',
    keyInnovations: ['Audience-participatory staging', 'Vernacular phrasebooks distribution', 'On-spot helpline guidance'],
    studentTeam: 'Rangbhoomi Student Collective',
    institutionType: 'Inter-University',
    status: 'Award Winner',
    year: '2025',
    metrics: [
      { label: 'Live Spectators', value: '4,200+' },
      { label: 'Staged Shows', value: '18 Locations' },
      { label: 'Helpline Referrals', value: '340+' }
    ],
    outcomes: ['Community Impact', 'Cultural Fellowships'],
    featured: false
  },
  {
    id: 'proj-rural-telecom',
    title: 'MeshBand: Resilient Offline Disaster Mesh Network',
    subtitle: 'Packet-radio emergency routing for isolated flood and landslide regions',
    category: 'Research',
    arenaId: 'innovate',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    summary: 'A rapid-deployable solar repeater network enabling offline emergency SOS broadcasting when cellular grids collapse.',
    fullStory: 'Created after studying state disaster response bottlenecks, students tested autonomous packet transmission over encrypted 868MHz frequencies with zero internet reliance.',
    keyInnovations: ['Store-and-forward mesh protocol', 'Low-power standby draw < 15mA', 'Waterproof IP67 casing'],
    studentTeam: 'SignalLabs Undergraduate Fellows',
    institutionType: 'Engineering College',
    status: 'In Incubation',
    year: '2026',
    metrics: [
      { label: 'Mesh Hops', value: 'Up to 12' },
      { label: 'Battery Backup', value: '72 Hours' },
      { label: 'SOS Broadcast Time', value: '< 4 Seconds' }
    ],
    outcomes: ['Startups', 'Industry Career', 'Community Impact'],
    featured: false
  },
  {
    id: 'proj-craft-revival',
    title: 'VastraKosh: Algorithmic Loom Weaver Assistive Software',
    subtitle: 'Translating traditional handloom jacquard patterns into open-source digital drafts',
    category: 'Arts & Expression',
    arenaId: 'create',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    summary: 'Computer science students partnered with rural master weavers to digitally preserve geometric motifs and automate punch-card drafting.',
    fullStory: 'Bridging generational craft knowledge with computational geometry, reducing pattern mapping time from 14 days to 45 minutes while retaining artisan copyright.',
    keyInnovations: ['Pixel-to-warp translation engine', 'Open-source SVG vector export', 'Color harmony simulator'],
    studentTeam: 'CraftTech Collaborative Guild',
    institutionType: 'Inter-University',
    status: 'State Recognition',
    year: '2025',
    metrics: [
      { label: 'Motifs Digitized', value: '180+' },
      { label: 'Draft Time Saved', value: '95%' },
      { label: 'Artisan Co-ops', value: '6 Clusters' }
    ],
    outcomes: ['Community Impact', 'Higher Education Grants'],
    featured: false
  }
];

export const PHILOSOPHY_STEPS: JourneyMilestone[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Surface innate curiosity, domain affinities, and latent strengths beyond conventional classroom marks.',
    activity: 'Diagnostics, arena exploratory workshops, interest mapping',
    deliverable: 'Individual Student Capability Baseline'
  },
  {
    step: '02',
    title: 'LEARN',
    description: 'Acquire practical tools, modern design methodologies, and domain-specific engineering principles through real challenges.',
    activity: 'Hands-on bootcamps, sandbox challenges, open technical resources',
    deliverable: 'Applied Skills Mastery'
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'Translate theory into working prototypes, tangible artifacts, research papers, or expressive performances.',
    activity: 'Fabrication sprints, software engineering, rehearsals, field work',
    deliverable: 'Functional Prototype / Original Creative Artifact'
  },
  {
    step: '04',
    title: 'MENTOR',
    description: 'Receive direct, rigorous critique and technical guidance from practicing industry veterans, academic faculty, and domain experts.',
    activity: 'Design reviews, code audits, dress rehearsals, rubric calibration',
    deliverable: 'Structured Expert Feedback Matrix'
  },
  {
    step: '05',
    title: 'IMPROVE',
    description: 'Iterate relentlessly based on empirical testing, user interviews, peer evaluation, and operational stress-testing.',
    activity: 'Version 2.0 refactoring, error handling, aesthetic polish',
    deliverable: 'Validated & Hardened Work'
  },
  {
    step: '06',
    title: 'COMPETE',
    description: 'Test capabilities in fair, transparent, rubric-evaluated competitive arenas with clear benchmarks.',
    activity: 'Live pitch rounds, stage performances, live exhibitions, timed tasks',
    deliverable: 'Audited Evaluation & Performance Score'
  },
  {
    step: '07',
    title: 'SHOWCASE',
    description: 'Present high-impact work on visible stages before juries, institutional leaders, venture sponsors, and peers.',
    activity: 'Grand Finale Showcase, Public Demo Day, Annual Exhibition',
    deliverable: 'High-Visibility Public Portfolio'
  },
  {
    step: '08',
    title: 'RECOGNIZE',
    description: 'Earn credentialed recognition, awards, verified digital evidence records, and merit-based institutional honors.',
    activity: 'Certification of excellence, performance badges, cash grants',
    deliverable: 'Tamper-Evident Capability Credential'
  },
  {
    step: '09',
    title: 'CONNECT',
    description: 'Link verified talent directly with startups, research fellowships, leading corporations, and advanced academic opportunities.',
    activity: 'Talent matching, recruiter introductions, venture incubator interviews',
    deliverable: 'Direct Career & Fellowship Offers'
  },
  {
    step: '10',
    title: 'THRIVE',
    description: 'Transition into self-sustaining momentum as confident innovators, leaders, founders, researchers, and cultural architects.',
    activity: 'Lifelong alumni network, peer mentorship, venture scaling',
    deliverable: 'Sustained Societal & Career Leadership'
  }
];

export const ENGINEERING_SUBSTORY = [
  { phase: '01', name: 'Problem', detail: 'Discover unaddressed industrial, civic, or environmental friction.' },
  { phase: '02', name: 'Idea', detail: 'Formulate hypotheses and synthesize cross-disciplinary technical concepts.' },
  { phase: '03', name: 'Prototype', detail: 'Build the Minimum Testable Artifact: breadboards, CAD, code, and clay.' },
  { phase: '04', name: 'Testing', detail: 'Deploy into actual stress environments with real end-users.' },
  { phase: '05', name: 'Mentorship', detail: 'Receive systematic feedback from seasoned engineers and domain specialists.' },
  { phase: '06', name: 'Iteration', detail: 'Refactor mechanical tolerances, optimize latency, and simplify user workflows.' },
  { phase: '07', name: 'Validation', detail: 'Gather verifiable benchmarks, pilot data, and safety confirmations.' },
  { phase: '08', name: 'Pitch', detail: 'Articulate the techno-economic value proposition clearly to evaluation panels.' },
  { phase: '09', name: 'Opportunity', detail: 'Progress toward a deep-tech startup, industry R&D career, patent, or higher studies.' },
];

export const MEDIA_STORIES: MediaStory[] = [
  {
    id: 'story-video-01',
    title: 'Beyond the Marksheet: How Polytechnic Builders are Engineering Real Hardware',
    excerpt: 'A documentary feature following four diploma students who transformed an irrigation canal into a clean renewable energy pod.',
    content: `When third-year diploma student Ramesh and his team first sketched a miniature hydro-turbine in their college workshop, many dismissed it as just a class assignment. 

Under the SwaraNidhi pilot framework, however, the team was paired with hydraulic systems engineers and provided bench testing materials. They did not just receive a grade; they received 8 weeks of iterative design feedback, learned computational fluid analysis, and successfully lit up a village connectivity hub.

"Before this, our marksheets only proved we memorized circuit diagrams," explains teammate Sneha. "SwaraNidhi gave us proof that we can build machines that survive the monsoon."`,
    type: 'video',
    category: 'Documentary Feature',
    author: {
      name: 'Editorial Collective',
      role: 'SwaraNidhi Media Desk'
    },
    date: 'February 24, 2026',
    readingTime: '6 min video',
    mediaDuration: '05:42',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tags: ['Diploma Education', 'Hardware Engineering', 'CleanTech', 'Student Journey'],
    featured: true,
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'story-gallery-02',
    title: 'Visualizing the Spark: From Workshop Sparks to the Final Showcase Stage',
    excerpt: 'A curated visual photo essay capturing the raw grit, soldering burns, and triumphant finale presentations across our six talent arenas.',
    content: `True innovation is rarely sterile. It is forged amidst late-night solder smoke, messy whiteboard erasures, stage rehearsals with cracked voices, and the quiet camaraderie of young minds refusing to accept mediocrity.

This photo archive documents the progression of over 300 students through the M1–M4 milestones of SwaraNidhi Event 1.0. Every image tells a story of perseverance: an engineering student testing stress fractures on a chassis, a classical dancer adjusting ankle bells before the stage lights rise, and a public debater refining counter-arguments in the hall.`,
    type: 'image',
    category: 'Photo Essay',
    author: {
      name: 'Ananya Deshmukh',
      role: 'Visual Documentarian'
    },
    date: 'March 02, 2026',
    readingTime: '12 curated photographs',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    tags: ['Exhibition', 'Visual Journey', 'Creative Process', 'Grand Showcase'],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', caption: 'Precision calibration on the dual-sensor optical board' },
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Inter-disciplinary sprint: Computer science meets classical design' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Peer code-review and structural stress diagnostics' },
      { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', caption: 'Grand Showcase auditorium under evaluation lights' }
    ]
  },
  {
    id: 'story-article-03',
    title: 'The Evidence Deficit: Why Indian Higher Education Must Shift From Testing to Building',
    excerpt: 'An analytical blueprint on why resume credentials fail to communicate actual student problem-solving capacity, and how portfolios change the hiring equation.',
    content: `Every year, millions of Indian engineering and diploma graduates enter the labor market with nearly indistinguishable marks and certificates. Yet recruiters from startups to multinational labs consistently cite an acute shortage of candidates who can independently debug a live system or navigate ambiguous constraints.

This is not a failure of student capability; it is a structural failure of evidence.

When a student participates in SwaraNidhi, they don't just leave with a certificate of attendance. They leave with a traceable portfolio: an audited rubric assessment, recorded judge feedback, a GitHub repository with commits spanning weeks, or a video record of a prototype under field load. That evidence turns an invisible resume into undeniable proof of capability.`,
    type: 'article',
    category: 'Thought Leadership',
    author: {
      name: 'Dr. K. S. Ramanathan',
      role: 'Advisor, Talent Architecture'
    },
    date: 'March 08, 2026',
    readingTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    tags: ['Education Reform', 'Portfolio Architecture', 'Workforce Readiness', 'THRIVE OS']
  }
];

export const APPLICATION_CATEGORIES: ApplicationCategoryOption[] = [
  {
    id: 'eng-student',
    num: '01',
    title: 'Engineering Student',
    badge: 'Undergraduate B.E / B.Tech',
    description: 'For students eager to translate theoretical coursework into validated prototypes, software architectures, or applied research projects.',
    targetAudience: '1st to 4th Year Engineering undergraduates across all branches',
    eligibility: ['Enrolled in recognized technical university/college', 'Individual or team entry', 'Work must be original and demonstrable'],
    nextOpportunities: ['Industry R&D Placements', 'Venture Incubation Entry', 'Patent Filing Guidance', 'Showcase Prizes'],
    recommendedArenas: ['innovate', 'discover', 'lead']
  },
  {
    id: 'diploma-student',
    num: '02',
    title: 'Polytechnic / Diploma Builder',
    badge: 'Hands-on Vocational & Diploma',
    description: 'Dedicated track celebrating practical shop-floor expertise, mechanical fabrication, electrical wiring, and direct machine building.',
    targetAudience: 'Students pursuing 3-year polytechnic or technical diploma programs',
    eligibility: ['Active enrollment in polytechnic institute', 'Emphasis on physical prototypes or industrial utilities'],
    nextOpportunities: ['Direct Corporate Apprenticeships', 'Specialized Prototype Grants', 'Bridge to B.Tech Opportunities'],
    recommendedArenas: ['innovate', 'create', 'discover']
  },
  {
    id: 'cross-team',
    num: '03',
    title: 'Cross-Disciplinary Team',
    badge: 'Multi-Talent Collaborations (2-5 Members)',
    description: 'Bring together coders, designers, communicators, and strategists into a cohesive squad capable of solving complex multi-dimensional problems.',
    targetAudience: 'Teams uniting technical, design, and management students from one or multiple campuses',
    eligibility: ['Teams of 2 to 5 members', 'Designated Team Lead', 'Collaborative project artifact submitted'],
    nextOpportunities: ['Seed Acceleration Track', 'Team Hackathon Entries', 'Co-Founder Matching'],
    recommendedArenas: ['innovate', 'lead', 'perform']
  },
  {
    id: 'mentor-expert',
    num: '04',
    title: 'Industry Mentor & Domain Jury',
    badge: 'Professionals & Academicians',
    description: 'Guide promising student squads, evaluate competitive rounds with published rubrics, and spot high-potential talent early.',
    targetAudience: 'Engineers, startup founders, research scientists, performing artists, and senior faculty',
    eligibility: ['Minimum 3+ years professional or domain experience', 'Commitment to objective, rubric-governed assessment'],
    nextOpportunities: ['Jury Credentials', 'Talent Scout Privileges', 'SwaraNidhi Academic Advisory Council'],
    recommendedArenas: ['innovate', 'express', 'perform', 'create', 'discover', 'lead']
  },
  {
    id: 'institution-partner',
    num: '05',
    title: 'Academic Institution / College',
    badge: 'Campus Chapter & Nodal Center',
    description: 'Partner with SwaraNidhi to host regional qualifying rounds, establish talent incubators, and elevate institutional NAAC/NIRF outcomes.',
    targetAudience: 'Principals, Deans, HODs, and Student Affairs Directors',
    eligibility: ['Accredited technical or multidisciplinary collegiate body', 'Designated Campus Faculty Coordinator'],
    nextOpportunities: ['Institutional Excellence Recognition', 'Campus Talent Heatmaps', 'Exclusive Mentorship Access'],
    recommendedArenas: ['innovate', 'discover', 'lead']
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-01',
    title: 'Master Event Project Plan 1.0 Formally Released',
    category: 'Competition Blueprint',
    date: 'March 10, 2026',
    summary: 'Detailed operational sequence, six-arena framework, and participation rubrics ratified by the Project Steering Group.',
    details: 'The official blueprint establishes operational boundaries for Event 1.0, focusing on high-quality competition portfolios across Innovate, Express, Perform, Create, Discover, and Lead. Rubrics prioritize growth and improvement alongside final scores.',
    isUrgent: false,
    actionLabel: 'Read Blueprint Summary',
    actionUrl: '#why-now'
  },
  {
    id: 'ann-02',
    title: 'Phase 1 Priority Registration Window Now Open',
    category: 'Deadline',
    date: 'March 12, 2026',
    summary: 'Institutions and student teams can now submit preliminary expressions of interest for Event 1.0 pilot rounds.',
    details: 'Early applicants gain access to preliminary mentorship webinars, hardware sandbox specifications, and stage technical briefs prior to public round qualifiers.',
    isUrgent: true,
    actionLabel: 'Apply for Phase 1',
    actionUrl: '#apply'
  },
  {
    id: 'ann-03',
    title: 'Standard Judging Rubric & Conflict-of-Interest Controls Adopted',
    category: 'Rules & Regulations',
    date: 'March 05, 2026',
    summary: 'Ensuring absolute integrity: all evaluation rounds locked under cryptographic score logging and verified tie-breaker criteria.',
    details: 'Section 10 of the Master Plan dictates that judges must be briefed on explicit weightages for Technical Skill, Creativity, Impact, Presentation, and Documented Improvement.',
    isUrgent: false,
    actionLabel: 'View Criteria',
    actionUrl: '#about'
  }
];

export const FAQS = [
  {
    question: 'Is SwaraNidhi exclusively for engineering students?',
    answer: 'No. While we feature dedicated hardware, IoT, and software tracks tailored specifically for engineering and polytechnic diploma students, SwaraNidhi encompasses six full talent arenas including Express (oratory/debate), Perform (dance/drama), Create (visual arts/design), and Lead (social change).',
    category: 'Participation'
  },
  {
    question: 'Does every project have to become a startup?',
    answer: 'Absolutely not. Startup creation is one possible pathway, but SwaraNidhi equally values paths into industrial research, engineering careers, internships, higher academic fellowships, patents, or grassroots community impact. The objective is creating verifiable evidence of capability.',
    category: 'Philosophy'
  },
  {
    question: 'How are competitions scored to ensure fairness?',
    answer: 'Every competition adheres to pre-published, audited rubrics measuring Technical Execution, Novelty, Real-World Impact, and demonstrated Growth across iterations. Judges are bound by strict conflict-of-interest disclosures and scores are locked upon entry.',
    category: 'Judging'
  },
  {
    question: 'What is the connection to THRIVE OS?',
    answer: 'SwaraNidhi Event 1.0 is the immediate competitive and showcase platform. In the long term, participant data, mentorship feedback, and project submissions feed into THRIVE OS — a persistent Talent Growth Operating System that tracks a student’s longitudinal journey.',
    category: 'Platform'
  }
];
