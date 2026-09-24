// Single source of truth for all portfolio content.
// Edit this file to update the site - components read from here.

export type ProjectLink = {
  label: string
  href: string
}

export type CurrentProject = {
  title: string
  role: string
  org: string
  period: string
  description: string
  links?: ProjectLink[]
}

export type PastProject = {
  title: string
  role: string
  period: string
  summary: string
  details: string
  links?: ProjectLink[]
}

export type ProjectSkill = {
  name: string
  status: 'have' | 'developing'
}

export type CollegeProject = {
  title: string
  context: string
  period: string
  status: 'ongoing' | 'planned' | 'completed'
  description: string
  skills: ProjectSkill[]
}

export type Stat = {
  value: string
  label: string
}

export type TimelineResult = {
  year: string
  text: string
}

export type Recognition = {
  title: string
  body: string
  date: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const profile = {
  name: 'Shivansh Pateria',
  eyebrow: 'tapmi bengaluru · 2026 – 2029',
  headline: 'Strategy and content, driven by athletic discipline.',
  intro:
    'Member of the StratIX consulting club, creating content at AceIPM, and a national-level freestyle roller skater.',
  location: 'Greater Bengaluru Area, India',
  email: 'pateriashivansh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shivanshpateria-2b5a01269',
  resume: '/resume',
}

export const nav = [
  { label: 'work', href: '#work' },
  { label: 'skating', href: '#skating' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'college projects', href: '#college' },
  { label: 'resume', href: '#resume' },
  { label: 'contact', href: '#contact' },
]

export const currentProjects: CurrentProject[] = [
  {
    title: 'StratIX Consulting Club',
    role: 'Member',
    org: 'TAPMI Bengaluru',
    period: 'Sept 2026 – Present',
    description:
      'Management case studies, business simulations and campus strategy initiatives.',
  },
  {
    title: 'AceIPM',
    role: 'Content',
    org: 'Student community',
    period: 'Sept 2026 – Present',
    description:
      'Multimedia content, short-form video concepts and social distribution for student aspirants.',
  },
]

// College projects - add each project you take up during your programme here.
// Tag skills as `have` (already strong) or `developing` (growing through this project).
export const collegeProjects: CollegeProject[] = [
  {
    title: 'Sector research & live projects',
    context: 'StratIX Consulting Club',
    period: '2026 – 2027',
    status: 'ongoing',
    description:
      'Researching the healthcare, hospitality and digital marketing sectors, and working on live client projects - mapping each industry, synthesising findings and shaping practical recommendations.',
    skills: [
      { name: 'Market research', status: 'have' },
      { name: 'Sector analysis', status: 'developing' },
      { name: 'Consulting frameworks', status: 'developing' },
      { name: 'Client delivery', status: 'developing' },
    ],
  },
  {
    title: 'VA content development',
    context: 'AceIPM',
    period: '2026 – 2027',
    status: 'ongoing',
    description:
      'Writing blogs and building Verbal Ability content to help AceIPM expand into the CAT preparation market - creating study material aimed at a new segment of aspirants.',
    skills: [
      { name: 'Blog writing', status: 'have' },
      { name: 'Verbal ability content', status: 'have' },
      { name: 'Content strategy', status: 'developing' },
      { name: 'Market expansion', status: 'developing' },
    ],
  },
]

export const pastProjects: PastProject[] = [
  {
    title: 'buildspace nights & weekends s5',
    role: 'Builder',
    period: 'May – June 2024',
    summary: 'International 6-week product sprint.',
    details:
      'Shipped a prototype over a six-week international product sprint, posting weekly public updates on progress.',
  },
  {
    title: 'Mayoor Model UN',
    role: 'USG, Information Services',
    period: 'April – May 2024',
    summary: 'Visual identity and media for 500+ participants.',
    details:
      'Led visual identity, delegate handbooks, placards and media graphics for 500+ participants, plus live crisis room updates during sessions.',
  },
  {
    title: 'TEDxMayoorSchoolNoida',
    role: 'Head of Production',
    period: 'March – April 2024',
    summary: 'Stage production and audiovisual direction.',
    details:
      'Directed stage production, audiovisual, lighting and recording, and ran live camera feeds for speakers throughout the event.',
  },
  {
    title: 'Student Council, Mayoor School Noida',
    role: 'Secretary',
    period: '2023 – 2024',
    summary: 'Student leadership.',
    details:
      'Served as Secretary of the Student Council, coordinating student initiatives and events.',
  },
  {
    title: 'Interact Club (Rotary sponsored)',
    role: 'Interactor',
    period: 'April 2023 – April 2024',
    summary: 'Community drives and awareness campaigns.',
    details:
      'Contributed to community drives, fundraisers and awareness campaigns as an active member.',
  },
]

export const skatingStats: Stat[] = [
  { value: '2×', label: 'Indian team probable for world championships' },
  { value: '4', label: 'National podium medals (2 silver, 2 bronze)' },
  { value: '36th', label: 'National Games, Ahmedabad, 2022' },
  { value: '6 yrs', label: 'Consecutive gold for sports excellence' },
]

export const skatingResults: TimelineResult[] = [
  { year: '2024', text: '3rd position, National Roller Skating Championship' },
  { year: '2023', text: 'Indian team probable, World Roller Skating Championship' },
  {
    year: '2023',
    text: '2nd position, National Inter-District Roller Skating Championship',
  },
  { year: '2022', text: 'Participated in 36th National Games, Ahmedabad' },
  { year: '2022', text: 'Indian team probable, World Skate Games' },
  { year: '2021', text: '2nd position, 59th National Roller Skating Championship' },
  { year: '2020', text: '3rd position, 58th National Roller Skating Championship' },
]

export const recognitions: Recognition[] = [
  {
    title: 'Gautam Buddh Nagar Sports Award',
    body: 'District Olympic Association',
    date: 'Sept 2023',
  },
  {
    title: '100% fee waiver for excellence in sports',
    body: 'Mayoor School, Noida',
    date: 'March 2024',
  },
  {
    title: 'Gold medallist for sports excellence, 6 consecutive years',
    body: 'Mayoor School, Noida',
    date: 'June 2024',
  },
]

export const about =
  "I'm an undergraduate at TAPMI Bengaluru with interests in content, marketing and fintech. My work spans research, content creation and business strategy - from analysing cases and benchmarking markets to producing multimedia and shaping campaigns. Alongside that, I compete as a national-level freestyle roller skater, which is where I picked up the discipline and focus I bring to everything else."

export const skillGroups: SkillGroup[] = [
  {
    title: 'Content & Media',
    items: [
      'Video production',
      'Videography',
      'Event production',
      'Graphic design',
      'Social media marketing (certified)',
    ],
  },
  {
    title: 'Strategy',
    items: [
      'Business strategy',
      'Case analysis',
      'Brand and campaign thinking',
      'Leadership',
    ],
  },
  {
    title: 'Research',
    items: ['Audience research', 'Market benchmarking', 'Information synthesis'],
  },
]

export type EducationItem = {
  institution: string
  detail: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: 'T. A. Pai Management Institute, Bengaluru',
    detail: 'Undergraduate programme in management',
    period: '2026 – 2029',
  },
  {
    institution: 'Mayoor School, Noida (CBSE)',
    detail: 'Class XII · Commerce with Mathematics · 85.5%',
    period: '2025',
  },
  {
    institution: 'Mayoor School, Noida (CBSE)',
    detail: 'Class X · 96%',
    period: '2023',
  },
]

export const certifications = ['Social media marketing']
