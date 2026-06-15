export const profile = {
  name: 'Prince Goyal',
  firstName: 'Prince',
  lastName: 'Goyal',
  title: 'B.Tech (AI/ML) · Software Developer · Full Stack',
  eyebrow: 'AI Engineer · Full Stack Developer · Problem Solver',
  tagline:
    'Building production-grade full-stack applications with JavaScript, React.js, Node.js, and integrating AI/ML pipelines. B.Tech (AI/ML) graduate passionate about solving real-world problems.',
  openToWork: true,
  email: 'princegoyal8865@gmail.com',
  phone: '+91 8865037375',
  linkedin: 'https://linkedin.com/in/prince-goyal-130631266',
  github: 'https://github.com/Prince-74',
  location: 'Noida, Uttar Pradesh, India',
  githubUsername: 'Prince-74',
  heroTags: ['React.js', 'Node.js', 'Python', 'AI/ML', 'MongoDB'],
} as const;

export const about = {
  label: 'About · Profile',
  heading: 'Who I Am',
  bio: [
    'B.Tech (AI/ML) graduate and ',
    { highlight: 'Software Developer' },
    ' with hands-on experience building and shipping ',
    { highlight: 'production-grade full-stack applications' },
    '. Designed RESTful APIs, integrated ',
    { highlight: 'AI/ML pipelines' },
    ', and deployed ',
    { highlight: '2 production applications' },
    ' with live users. Participated in ',
    { highlight: '15+ national hackathons' },
    ', consistently delivering functional solutions under time constraints.',
  ],
  openTo: ['Full-time roles', 'AI/ML Engineering', 'Internships', 'Freelance Projects'],
  tags: ['Full Stack', 'AI/ML', 'REST APIs', 'OCR Pipelines', 'Problem Solver'],
} as const;

export const techStack = {
  label: 'Tech Stack',
  heading: 'Tools I Build With',
  categories: [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'Python', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Frontend',
      items: ['React.js', 'Responsive Design', 'CSS', 'HTML5'],
    },
    {
      title: 'Backend & Databases',
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'AI/ML & Cloud',
      items: ['Machine Learning', 'OCR', 'LLMs', 'Gemini API', 'LiveKit Agents', 'GCP', 'OCI', 'Docker', 'Git'],
    },
  ],
} as const;

export const aiExpertise = {
  label: 'AI / ML Expertise',
  heading: 'Intelligence Layer',
  rows: [
    { domain: 'LLM Integration', proficiency: 'Advanced', details: 'Gemini API, Voice AI Agents, Prompt Engineering' },
    { domain: 'Computer Vision & OCR', proficiency: 'Advanced', details: 'Medical report OCR, Automated data extraction, Document processing' },
    { domain: 'Voice AI', proficiency: 'Advanced', details: 'LiveKit Agents, Real-time speech-to-response pipelines, Sub-2s latency' },
    { domain: 'Machine Learning', proficiency: 'Intermediate', details: 'Data analysis, Model optimization, Training pipelines' },
  ],
} as const;

export const projects = [
  {
    name: 'AI-MED (Sehat Saathi)',
    description:
      'Full-stack telemedicine web application with automated OCR pipeline for medical records. Designed 2 distinct user roles (patient, doctor), supporting online consultations, digital records, and secure prescription access.',
    stack: 'React.js, Node.js, Express.js, MongoDB, OCR, Machine Learning',
    scale: 'Presented at India AI Impact Summit 2026',
    performance: 'OCR pipeline reducing manual processing by 60%+',
    security: 'JWT-based authentication, Role-based access control',
    impact: 'Cut medical report turnaround time by 40%',
    repository: 'https://github.com/Prince-74',
  },
  {
    name: 'Voice AI Agents Platform',
    description:
      'Real-time voice AI application platform integrating Gemini LLMs and LiveKit Agents. Built 10+ production-grade voice AI agents across 5+ use-case scenarios with sub-2s response latency.',
    stack: 'Python, Node.js, Express.js, LiveKit Agents, Gemini LLMs',
    scale: '10+ agents, 5+ use-case scenarios',
    performance: 'Sub-2s response latency, 70% faster development time',
    security: 'Session state management, Input validation, Error handling',
    impact: 'Reduced per-agent development time by 70%',
    repository: 'https://github.com/Prince-74',
  },
] as const;

export const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Self-Employed (Freelance Projects)',
    period: 'Jun 2024 — Present',
    description:
      'Built and shipped 2 production AI-powered applications with live users. Designed RESTful API endpoints, integrated AI/ML pipelines, and optimized systems for performance and reliability.',
    bullets: [
      'Built 15+ RESTful API endpoints using Node.js and Express.js with MongoDB',
      'Integrated OCR pipeline reducing manual processing by 60%+',
      'Engineered 3-layer modular Node.js backend achieving sub-2s response latency',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OCR', 'AI/ML'],
  },
  {
    title: 'Hackathon Participant & Problem Solver',
    company: 'National & Inter-College Hackathons',
    period: 'Jun 2022 — Present',
    description:
      'Collaborated in cross-functional teams across 15+ national and inter-college hackathons, consistently delivering functional AI-powered solutions within 24–48 hour sprints.',
    bullets: [
      'Shipped 15+ hackathon projects with working prototypes',
      'Developed full-stack applications under tight time constraints',
      'Selected to present AI-MED at India AI Impact Summit 2026 (500+ AI professionals)',
    ],
    skills: ['Full Stack Development', 'Problem Solving', 'Teamwork', 'Rapid Prototyping'],
  },
] as const;

export const achievements = [
  { recognition: 'India AI Impact Summit 2026', details: 'Selected to exhibit AI-MED among top national projects, presenting to 500+ AI professionals' },
  { recognition: 'Google Cloud Champion (2x)', details: 'Completed 30+ skill badges through Google Arcade' },
  { recognition: 'Hackathon Champion', details: 'Collaborated in 15+ national and inter-college hackathons, consistently shipping functional solutions' },
  { recognition: 'Student Innovation', details: 'Building production AI/ML applications while pursuing B.Tech (AI/ML)' },
] as const;

export const certifications = {
  oracle: ['Oracle Cloud Infrastructure (OCI) Generative AI Professional Certification'],
  aws: ['Full Stack Web Development Virtual Internship Certificate'],
  nptel: ['MongoDB Basics Certification'],
  cisco: ['Google Cloud Champion (2x) – Google Arcade'],
} as const;

export const codingProfiles = [
  { name: 'GitHub', url: 'https://github.com/Prince-74', badge: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/prince-goyal-130631266', badge: 'LinkedIn' },
] as const;

export const currentFocus = {
  learning: ['Advanced AI/ML concepts', 'System Design at scale', 'Enterprise cloud architecture'],
  building: ['Production AI/ML applications', 'Full-stack web applications', 'Voice AI agents'],
  exploring: ['Generative AI innovations', 'Real-time AI pipelines', 'Cloud-native development'],
  openTo: ['Full-time SWE roles', 'AI/ML engineering positions', 'Freelance projects', 'Open source contributions'],
} as const;

export const footerQuote =
  'Building with purpose — designing systems that solve real problems, one line of code at a time.';