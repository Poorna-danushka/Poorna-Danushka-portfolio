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
    location: 'Gampaha, Sri Lanka',
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
    location: 'Gampaha, Sri Lanka',
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
        { name: 'TypeORM', level: 'Comfortable' },
        { name: 'REST API', level: 'Comfortable' },
        { name: 'JWT & HttpOnly Auth', level: 'Comfortable' },
        { name: 'RBAC & API Security (CSRF, Rate Limiting)', level: 'Comfortable' },
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
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS RDS', level: 'Comfortable' },
        { name: 'Amazon S3', level: 'Familiar' },
        { name: 'Cloudinary', level: 'Comfortable' },
        { name: 'AWS', level: 'Familiar' },
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
      title: 'Tools & Design',
      skills: [
        { name: 'Git', level: 'Comfortable' },
        { name: 'GitHub', level: 'Comfortable' },
        { name: 'Figma (UI/UX)', level: 'Comfortable' },
        { name: 'UML & System Modeling', level: 'Comfortable' },
        { name: 'Postman', level: 'Comfortable' },
        { name: 'VS Code', level: 'Comfortable' },
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
        'Building robust applications with React, TypeScript, NestJS, PostgreSQL, AWS, and secure multi-role architectures.',
    },
    {
      id: 'cloud',
      title: 'Cloud Deployment',
      context: 'Vercel, Render, AWS',
      description:
        'Experience deploying full-stack systems and cloud databases using AWS RDS, Amazon S3, Cloudinary, Vercel, and Render.',
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
      title: 'Backend & Security',
      description:
        'Creating secure REST APIs, JWT/HttpOnly auth, RBAC authorization, and database-driven applications.',
      icon: 'server',
    },
    {
      id: 'database',
      title: 'Database & System Design',
      description: 'Designing structured relational database schemas, UML workflows, and backup strategies.',
      icon: 'database',
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      description: 'Configuring cloud services including AWS RDS, Cloudinary, and modern hosting platforms.',
      icon: 'cloud',
    },
  ],
  projects: [
    {
      id: 'ecms',
      number: '01',
      title: 'Elderly Care Management System (ECMS)',
      year: '2026',
      category: 'Full-Stack Web App',
      featured: true,
      role: 'Full-Stack & Security Lead',
      description:
        'A comprehensive full-stack healthcare platform developed to streamline elderly care workflows. Features JWT HttpOnly auth, RBAC, staff onboarding, doctor channeling, and AWS RDS backups.',
      overview:
        'ECMS is a multi-role healthcare management platform connecting administrators, doctors, caregivers, and family members to coordinate resident care with enterprise-grade security.',
      myContributions: [
        'Security & Auth Architecture: Designed JWT HttpOnly cookie authentication, RBAC authorization across 5 roles, CSRF defense, rate limiting, and password reset flows.',
        'Admin Module & Onboarding: Built the administrative dashboard, user lifecycle controls, and automated staff credential provisioning.',
        'Doctor Channeling System: Engineered scheduling workflows for slot allocations, doctor availability acceptance, and consultation fee configuration.',
        'Cloud Infrastructure & Backups: Integrated AWS RDS PostgreSQL, Cloudinary media storage, and automated database snapshot disaster recovery.',
      ],
      problem:
        'Healthcare institutions face fragmented coordination, sensitive data exposure risks, and administrative delays without a centralized, role-governed platform.',
      solution:
        'A secure, modular platform with specialized portals for Admins, Doctors, Caregivers, and Families powered by NestJS and AWS RDS.',
      challenges: '',
      learnings:
        'Mastered production NestJS backend architecture, TypeORM relational schema modeling, role-based route guards, and cloud database deployment.',
      technologies: [
        'React',
        'TypeScript',
        'NestJS',
        'PostgreSQL',
        'TypeORM',
        'Tailwind CSS',
        'JWT (HttpOnly)',
        'Bcrypt',
        'CSRF Protection',
        'AWS RDS',
        'Cloudinary',
        'Nodemailer',
        'Figma',
        'UML Diagrams',
      ],
      features: [
        'Multi-Role Portals (Admin, Doctor, Caregiver, Family)',
        'HttpOnly JWT Authentication & Route Guards',
        'Doctor Channeling & Consultation Fee Controls',
        'Automated Database Snapshot Recovery (AWS RDS)',
      ],
      links: {
        github: 'https://github.com/Chamalka-heshi/Elderly-Home-Care-Management-System',
        live: 'https://frontend-one-beta-73.vercel.app',
      },
      image: 'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787591297/ecms_e4vsq5.png',
      imageAlt: 'Visual preview for the Elderly Care Management System (ECMS) project',
    },
    {
      id: 'orbit',
      number: '02',
      title: 'Orbit - Collaborative Project & Task Management',
      year: '2026',
      category: 'Full-Stack Web App',
      role: 'Full-Stack Architecture & Real-Time Lead',
      description:
        'A modern, full-stack collaborative project and task management platform featuring real-time synchronization, Kanban workflows, role-based administration, Cloudinary storage, and Firebase authentication.',
      overview:
        'Orbit is a high-performance productivity ecosystem combining interactive Kanban task execution with platform-wide administrative governance and real-time event streaming.',
      myContributions: [
        'Real-Time Collaboration & Kanban: Built drag-and-drop Kanban boards with live updates, task attachments, priority tagging, and instant WebSocket notifications via Socket.io.',
        'Dual-Portal Workspaces (User & Admin): Developed user workspaces, collaborator rosters, platform-wide analytics charts (Recharts), and admin global broadcasts.',
        'Authentication & Security Foundation: Implemented Firebase Google OAuth, unified HttpOnly JWT cookies, dual-cookie CSRF defense, and cross-session isolation.',
        'Scalable Backend & Cloud Storage: Architected Express.js REST API with MongoDB Atlas via Prisma ORM, Cloudinary media upload streams, and cascading database cleanup.',
      ],
      problem:
        'Teams struggle with fragmented task ownership, lack of real-time status updates, and disconnected administrative controls across multiple siloed productivity tools.',
      solution:
        'A unified, real-time collaboration ecosystem combining intuitive project boards with administrative governance, instant WebSocket synchronization, and hardened security.',
      challenges: '',
      learnings:
        'Mastered Next.js 16 App Router architecture, Prisma ORM schema modeling with MongoDB, real-time bidirectional Socket.io rooms, and hybrid Firebase/JWT auth systems.',
      technologies: [
        'Next.js 16',
        'React 18',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'Prisma ORM',
        'Socket.io',
        'Firebase Auth',
        'Cloudinary',
        'Recharts',
        'JWT (HttpOnly)',
        'CSRF Protection',
      ],
      features: [
        'Interactive Drag-and-Drop Kanban Board',
        'Real-Time WebSocket Notifications & Live Sync',
        'Dual-Portal Workspaces (User & Admin Governance)',
        'Firebase Google OAuth & HttpOnly JWT Security',
        'Platform Analytics & Recharts Data Visualization',
        'Cloudinary Direct Memory Stream Media Storage',
      ],
      links: {
        github: 'https://github.com/Poorna-danushka/orbit-workspace.git',
        live: 'https://orbit-workspace-eta.vercel.app',
      },
      image: 'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787590732/ChatGPT_Image_Aug_24_2026_10_14_38_PM_p0hg4v.png',
      imageAlt: 'Visual preview for the Orbit Workspace project management platform',
    },
    {
      id: 'fitness-app',
      number: '03',
      title: 'FitPulse - Fitness & Workout Web Platform',
      year: '2025',
      category: 'Full-Stack Web App',
      role: 'Full-Stack Developer',
      description:
        'A modern fitness and workout tracking web application designed to help users log workouts, monitor exercise routines, and track fitness milestones.',
      overview:
        'FitPulse is a responsive fitness and exercise tracking platform developed to streamline daily workout management, routine planning, and training regimen analytics with an intuitive, mobile-friendly interface.',
      myContributions: [
        'Workout & Routine Tracker: Built workout logging workflows, exercise directory filtering, and customizable training schedule plans.',
        'Analytics & Progress Metrics: Designed visual tracking for personal fitness goals, workout frequency, and performance progress statistics.',
        'Interactive UI & State Management: Developed an ultra-responsive frontend with modern UI components and smooth user interactions.',
        'REST API & Data Persistence: Integrated backend services and database persistence for secure workout history and user profiles.',
      ],
      problem:
        'Individuals often struggle with maintaining consistent fitness habits due to cumbersome tracking tools, lack of routine organization, and scattered workout records.',
      solution:
        'A streamlined web application providing organized workout schedules, exercise guidance, and progress tracking in a clean, accessible interface.',
      challenges: '',
      learnings:
        'Mastered modular web component design, responsive UI architectures, and dynamic fitness telemetry state management.',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'REST API',
        'JavaScript',
      ],
      features: [
        'Comprehensive Exercise & Routine Library',
        'Daily Workout Logging & Set/Rep Tracking',
        'Fitness Progress Analytics & Milestone Tracking',
        'Responsive Mobile-First Interface',
      ],
      links: {
        github: 'https://github.com/Poorna-danushka/fitness_app.git',
        live: 'YOUR_FITNESS_LIVE_URL',
      },
      image: '/images/projects/embedded.svg',
      imageAlt: 'Visual preview for the FitPulse Fitness & Workout Platform project',
    },
    {
      id: 'chess-robot',
      number: '04',
      title: 'Autonomous Chess-Playing Robot',
      year: '2025',
      category: 'Robotics & Embedded AI',
      role: 'Computer Vision, UI & Embedded Control Co-Lead',
      description:
        'An integrated hardware-software robotics system combining computer vision, chess engine computation, and a 5-DOF robotic arm to autonomously play chess.',
      overview:
        'Developed as a first-year undergraduate hardware project for FIT EXPO at the University of Moratuwa. The autonomous system detects physical player moves via overhead computer vision, computes strategic moves with a chess engine, and physically executes them on the board using a 5-DOF robotic arm.',
      myContributions: [
        'Vision System & Board Calibration: Built overhead Raspberry Pi camera pipeline for board perspective correction, grid calibration, and color-based move detection.',
        'Chess Engine & Real-Time UI: Integrated chess engine strategy computation and designed a real-time Python/Pygame graphical board for live move monitoring and debugging.',
        'Robotic Arm Actuation: Programmed Arduino and PCA9685 PWM drivers to coordinate 5-DOF robotic arm kinematics with pre-calibrated servo angles for accurate piece manipulation.',
        'Hardware-Software Co-Design: Contributed to custom PCB power management, noise-isolated signal distribution, and inter-microcontroller serial communication.',
      ],
      problem:
        'Achieving reliable autonomous gameplay requires reconciling real-world vision variability (lighting, perspective distortion) with sub-millimeter robotic servo accuracy.',
      solution:
        'A closed-loop hardware-software pipeline: overhead camera vision → engine strategy calculation → serial protocol → 5-DOF robotic arm physical move execution.',
      challenges: '',
      learnings:
        'Gained hands-on mastery in system-level robotics integration, OpenCV computer vision pipelines, multi-DOF servo kinematics, and hardware-software co-design.',
      technologies: [
        'Python',
        'OpenCV (Computer Vision)',
        'Pygame',
        'Raspberry Pi',
        'Arduino',
        'PCA9685 PWM Driver',
        '5-DOF Robotic Arm',
        'Custom PCB',
        'C/C++',
        'UART/I2C',
      ],
      features: [
        'Overhead Camera Board Calibration & Perspective Correction',
        'Color-Based Chess Move Detection & State Validation',
        'Autonomous Chess Engine Strategy Computation',
        '5-DOF Robotic Arm Physical Piece Manipulation',
        'Real-Time Python/Pygame Monitoring & Debugging UI',
        'Custom PCB Power Management & Signal Distribution',
      ],
      links: {
        github: 'https://github.com/Poorna-danushka/Hardware-Project---Chess-Navigator.git',
        live: 'https://lnkd.in/p/gx78BSiv',
      },
      image: 'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787595720/ChatGPT_Image_Aug_24_2026_11_51_23_PM_os8s22.png',
      imageAlt: 'Visual preview for the Autonomous Chess-Playing Robot project',
    },
  ],
  form: {
    formspreeEndpointEnv: 'VITE_FORMSPREE_ENDPOINT',
  },
}
