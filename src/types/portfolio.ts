export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  id: 'github' | 'linkedin' | 'email'
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
  detail?: string
}

export type EducationSubject = {
  name: string
  grade: string
}

export type EducationEntry = {
  id: string
  status: string
  institution: string
  qualification: string
  location: string
  description: string
  subjects?: EducationSubject[]
}

export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Security'
  | 'Cloud & DevOps'
  | 'Tools'
  | 'Embedded & AI'

export type SkillLevel = 'Experienced' | 'Academic / Familiar' | 'Learning'

export type Skill = {
  name: string
  level?: string
}

export type TechBrandInfo = {
  name: string
  color: string
  category: string
  level: string
  iconKey: string
  description: string
}

export type TechnologyItem = {
  name: string
  category: SkillCategory
  level: SkillLevel
  iconKey: string
  description?: string
}

export type SkillGroup = {
  id: string
  title: string
  category: SkillCategory
  skills: TechnologyItem[]
}

export type EngineeringStep = {
  step: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export type JourneyEntry = {
  id: string
  title: string
  context: string
  description: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: 'layers' | 'server' | 'database' | 'cloud'
}

export type ProjectLinks = {
  github: string
  live: string
}

export type Project = {
  id: string
  number: string
  title: string
  year: string
  category: string
  subtitle?: string
  role?: string
  myContributions?: string[]
  description: string
  overview: string
  problem: string
  solution: string
  challenges?: string
  learnings: string
  technologies: string[]
  features: string[]
  links: ProjectLinks
  image: string
  imageAlt: string
  featured?: boolean
}

export type ContactInfo = {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
}

export type Person = {
  name: string
  firstName: string
  professionalTitle: string
  shortTitle: string
  greeting: string
  introduction: string
  heroDescription: string
  university: string
  degree: string
  location: string
  profileImage?: string
  profileImageAlt?: string
}

export type PortfolioData = {
  person: Person
  cvUrl: string
  seo: {
    title: string
    description: string
    siteUrl: string
  }
  contact: ContactInfo
  social: SocialLink[]
  navigation: NavItem[]
  stats: Stat[]
  currentlyLearning: string[]
  education: EducationEntry[]
  allTechnologies: TechnologyItem[]
  engineeringSteps: EngineeringStep[]
  journey: JourneyEntry[]
  services: Service[]
  projects: Project[]
  form: {
    formspreeEndpointEnv: string
  }
}
