import type { PortfolioData } from '../types/portfolio'

export const PLACEHOLDER_PREFIX = 'YOUR_'

export const portfolio: PortfolioData = {
  person: {
    name: 'Poorna Danushka Jayasundara',
    firstName: 'Poorna',
    professionalTitle: 'Full-Stack Developer & Information Technology Undergraduate',
    shortTitle: 'Full-Stack Developer & IT Undergraduate',
    greeting: "Hello, I'm",
    introduction:
      'I am an Information Technology undergraduate passionate about building modern, secure, and scalable software solutions. I enjoy developing full-stack applications, exploring new technologies, and turning real-world problems into practical digital solutions.',
    heroDescription:
      'I build modern, secure and scalable applications that solve real-world problems.',
    university: 'University of Moratuwa',
    degree: 'B.Sc. (Hons) in Information Technology',
    location: 'Sri Lanka',
    profileImage:
      'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787297880/WhatsApp_Image_2026-08-21_at_13.01.28_tlf6bd.jpg',
    profileImageAlt: 'Poorna Danushka Jayasundara, arms crossed in a dark suit',
  },
  seo: {
    title: 'Poorna Danushka Jayasundara | Full-Stack Developer',
    description:
      'Portfolio of Poorna Danushka Jayasundara, an Information Technology undergraduate and full-stack developer from Sri Lanka.',
    siteUrl: 'YOUR_SITE_URL',
  },
  contact: {
    email: 'poornadanushka2@gmail.com',
    phone: '076 113 7931',
    location: 'Sri Lanka',
    github: 'https://github.com/Poorna-danushka',
    linkedin: 'https://www.linkedin.com/in/poorna-danushka',
  },
  social: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/Poorna-danushka' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/poorna-danushka' },
    { id: 'email', label: 'Email', href: 'poornadanushka2@gmail.com' },
  ],
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
  stats: [
    { value: '1+', label: 'Years Building' },
    { value: '5+', label: 'Technologies' },
    { value: '4+', label: 'Projects' },
    { value: '1', label: 'Major Full-Stack System' },
  ],
  currentlyLearning: [
    'Cloud Architecture',
    'Advanced Backend Development',
    'Cybersecurity',
    'DevOps',
    'System Design',
  ],
  education: [
    {
      id: 'al',
      status: 'Completed',
      institution: 'G.C.E. Advanced Level',
      qualification: 'Physical Science Stream',
      location: 'Sri Lanka',
      description:
        'Completed the G.C.E. Advanced Level examination in the Physical Science stream, building a strong foundation in mathematics and the sciences ahead of university.',
      subjects: [
        { name: 'Combined Mathematics', grade: 'A' },
        { name: 'Physics', grade: 'B' },
        { name: 'Chemistry', grade: 'B' },
      ],
    },
    {
      id: 'uom',
      status: 'Currently Studying',
      institution: 'University of Moratuwa',
      qualification: 'B.Sc. (Hons) in Information Technology',
      location: 'Sri Lanka',
      description:
        'Pursuing an honours degree in Information Technology with a focus on software engineering, systems, and building production-quality applications.',
    },
  ],
  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Comfortable' },
        { name: 'TypeScript', level: 'Comfortable' },
        { name: 'JavaScript', level: 'Comfortable' },
        { name: 'HTML', level: 'Comfortable' },
        { name: 'CSS', level: 'Comfortable' },
        { name: 'Tailwind CSS', level: 'Comfortable' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Comfortable' },
        { name: 'NestJS', level: 'Comfortable' },
        { name: 'REST API', level: 'Comfortable' },
        { name: 'Authentication', level: 'Comfortable' },
        { name: 'API Security', level: 'Familiar' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 'Comfortable' },
        { name: 'MySQL', level: 'Familiar' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', level: 'Familiar' },
        { name: 'Amazon S3', level: 'Familiar' },
        { name: 'AWS RDS', level: 'Familiar' },
        { name: 'Vercel', level: 'Familiar' },
        { name: 'Render', level: 'Familiar' },
      ],
    },
    {
      id: 'programming',
      title: 'Programming',
      skills: [
        { name: 'Python', level: 'Comfortable' },
        { name: 'Java', level: 'Familiar' },
        { name: 'C', level: 'Familiar' },
        { name: 'Dart', level: 'Learning' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: [
        { name: 'Git', level: 'Comfortable' },
        { name: 'GitHub', level: 'Comfortable' },
        { name: 'VS Code', level: 'Comfortable' },
        { name: 'Postman', level: 'Comfortable' },
        { name: 'pgAdmin', level: 'Familiar' },
      ],
    },
    {
      id: 'embedded',
      title: 'Mobile / Embedded',
      skills: [
        { name: 'Flutter', level: 'Learning' },
        { name: 'Arduino', level: 'Familiar' },
        { name: 'Raspberry Pi', level: 'Familiar' },
      ],
    },
  ],
  journey: [
    {
      id: 'undergrad',
      title: 'Information Technology Undergraduate',
      context: 'University of Moratuwa',
      description:
        'Currently pursuing B.Sc. (Hons) in Information Technology.',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      context: 'Academic & personal projects',
      description:
        'Building academic and personal applications using React, TypeScript, NestJS, PostgreSQL and cloud services.',
    },
    {
      id: 'cloud',
      title: 'Cloud Deployment',
      context: 'Vercel, Render, AWS',
      description:
        'Experience deploying frontend and backend applications using services such as Vercel, Render and AWS.',
    },
  ],
  services: [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Building complete web applications from frontend to backend.',
      icon: 'layers',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description:
        'Creating secure REST APIs, authentication systems and database-driven applications.',
      icon: 'server',
    },
    {
      id: 'database',
      title: 'Database Design',
      description: 'Designing structured and reliable relational database systems.',
      icon: 'database',
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      description: 'Deploying applications using modern cloud and hosting platforms.',
      icon: 'cloud',
    },
  ],
  projects: [
    {
      id: 'ecms',
      number: '01',
      title: 'Elderly Care Management System',
      year: '2025',
      category: 'Full-Stack Web Application',
      featured: true,
      description:
        'A comprehensive elderly care management platform designed to connect administrators, doctors, caregivers, patients, and family members through a centralized digital system.',
      overview:
        'A role-aware care platform that brings administrators, doctors, caregivers, patients, and families into one coordinated workflow for day-to-day elderly care.',
      problem:
        'Elderly care involves many stakeholders and fragmented records. Coordinating appointments, prescriptions, care plans, and family updates is difficult without a shared system.',
      solution:
        'A centralized full-stack application with role-based access, patient records, clinical workflows, payments, notifications, and cloud-backed storage.',
      challenges:
        'Designing permissions across multiple roles, keeping clinical and family workflows coherent, and deploying a secure stack with backups and object storage.',
      learnings:
        'Gained hands-on experience designing role-based access control, structuring a relational schema for a multi-stakeholder domain, and integrating cloud storage and email notifications into a production-style NestJS backend.',
      technologies: [
        'React',
        'TypeScript',
        'NestJS',
        'PostgreSQL',
        'AWS',
        'JWT',
        'REST API',
        'Cloudinary',
      ],
      features: [
        'Role-based authentication',
        'Patient management',
        'Doctor management',
        'Caregiver management',
        'Family management',
        'Appointment management',
        'Channeling slots',
        'Prescription management',
        'Care plans',
        'Payment management',
        'Email notifications',
        'Secure authentication',
        'Database backup and restore',
        'AWS S3 integration',
      ],
      links: {
        github: 'https://github.com/Chamalka-heshi/Elderly-Home-Care-Management-System',
        live: 'https://frontend-one-beta-73.vercel.app',
      },
      image: '/images/projects/ecms.svg',
      imageAlt: 'Abstract visual for the Elderly Care Management System',
    },
    {
      id: 'orbit',
      number: '02',
      title: 'Orbit',
      year: '2025',
      category: 'Full-Stack Web Application',
      description:
        'An AI-powered task and project management platform for teams and individuals, with Kanban workflows, analytics, and real-time collaboration.',
      overview:
        'Orbit is a full-stack productivity system with a Next.js app for users and admins, and an Express REST API backed by MongoDB. It combines project and task management with AI-assisted insights and live updates.',
      problem:
        'Project work is often spread across lists, chats, and files, which makes it hard to see workload, progress, and ownership in one place.',
      solution:
        'A unified platform with dashboards, project and task management, a drag-and-drop Kanban board, analytics, notifications, and role-separated admin tools.',
      challenges:
        'Keeping authentication cookie-only with CSRF protection, isolating admin and user sessions, and coordinating real-time updates across collaborative workflows.',
      learnings:
        'Learned how to implement secure httpOnly-cookie authentication with CSRF protection end to end, structure a real-time feature with Socket.io, and separate admin and user concerns cleanly in a single codebase.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Express.js',
        'MongoDB',
        'Prisma',
        'JWT',
        'Socket.io',
      ],
      features: [
        'Project and task management',
        'Interactive Kanban board',
        'AI workload summaries',
        'Productivity analytics',
        'Real-time notifications',
        'Global search',
        'File attachments on tasks',
        'Password recovery',
        'Role-based admin tools',
        'HttpOnly JWT authentication',
        'CSRF protection',
      ],
      links: {
        github: 'YOUR_ORBIT_GITHUB_URL',
        live: 'YOUR_ORBIT_LIVE_URL',
      },
      image: '/images/projects/orbit.svg',
      imageAlt: 'Abstract visual for the Orbit project management platform',
    },
    {
      id: 'chess',
      number: '03',
      title: 'Chess Game',
      year: '2024',
      category: 'Python / Game Development',
      description:
        'A chess application developed using Python and Pygame, focusing on game logic, user interaction, and graphical implementation.',
      overview:
        'A desktop chess experience built to practice game rules, board interaction, and graphical presentation in Python.',
      problem:
        'Implementing complete chess rules and a clear graphical board requires careful state management and user interaction design.',
      solution:
        'A Pygame-based application that combines game logic with a graphical interface for local play.',
      challenges:
        'Encoding piece movement, turn flow, and board rendering in a way that stays readable and playable.',
      learnings:
        'Strengthened my understanding of state machines and 2D rendering loops by implementing chess rules, turn logic, and an interactive board with Pygame.',
      technologies: ['Python', 'Pygame'],
      features: [
        'Game logic',
        'User interaction',
        'Graphical board implementation',
      ],
      links: {
        github: 'YOUR_CHESS_GITHUB_URL',
        live: 'YOUR_CHESS_LIVE_URL',
      },
      image: '/images/projects/chess.svg',
      imageAlt: 'Abstract visual for the Chess Game project',
    },
    {
      id: 'embedded',
      number: '04',
      title: 'Embedded / IoT Project',
      year: '2024',
      category: 'Embedded Systems',
      description:
        'Arduino and Raspberry Pi related work. Add the project name, description, and functionality in this data file when ready.',
      overview:
        'Placeholder for embedded and IoT work. Technologies listed below are available to use; project-specific functionality should be added only when confirmed.',
      problem: '',
      solution: '',
      challenges: '',
      learnings: '',
      technologies: ['Arduino', 'Raspberry Pi', 'PCA9685', 'Python', 'C/C++'],
      features: [],
      links: {
        github: 'YOUR_EMBEDDED_GITHUB_URL',
        live: 'YOUR_EMBEDDED_LIVE_URL',
      },
      image: '/images/projects/embedded.svg',
      imageAlt: 'Abstract visual for embedded and IoT work',
    },
  ],
  form: {
    formspreeEndpointEnv: 'VITE_FORMSPREE_ENDPOINT',
  },
}
