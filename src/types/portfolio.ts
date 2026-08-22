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

export type SkillLevel = 'Comfortable' | 'Familiar' | 'Learning'

export type Skill = {
  name: string
  level?: SkillLevel
}

export type SkillGroup = {
  id: string
  title: string
  skills: Skill[]
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
  description: string
  overview: string
  problem: string
  solution: string
  challenges: string
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
  skills: SkillGroup[]
  journey: JourneyEntry[]
  services: Service[]
  projects: Project[]
  form: {
    formspreeEndpointEnv: string
  }
}
