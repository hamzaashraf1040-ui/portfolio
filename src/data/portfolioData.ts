export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  highlights: string[];
  category: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  index: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  proficiency?: string;
  iconName: string;
}

export const portfolioData = {
  personal: {
    name: "Hamza Ashraf",
    logoText: "hamza.dev",
    role: "Full-Stack & Front-End Developer",
    heroGreeting: "Hello, I'm",
    heroBio: "I build responsive, modern and user-friendly web applications using Angular, Node.js, Express, TypeScript, JavaScript and CSS.",
    aboutHeading: "Turning ideas into digital experiences.",
    aboutP1: "I'm Hamza Ashraf, a Computer Science graduate and Full-Stack / Front-End Developer who enjoys building modern, responsive, and user-friendly web applications.",
    aboutP2: "Specialized in creating end-to-end solutions across the MEAN stack (MongoDB, Express, Angular, Node.js) and modern TypeScript ecosystems. I value clean code structure, high performance, and human-centered design.",
    email: "hamza.ashraf1040@gmail.com",
    phone: "+20 1003985193",
    location: "Giza / Cairo, Egypt",
    avatar: "./assets/hamza-profile.jpg",
    socials: {
      github: "https://github.com/hamzaashraf1040-ui",
      linkedin: "https://www.linkedin.com/in/hamza-ashraf-761308399",
      email: "mailto:hamza.ashraf1040@gmail.com"
    },
    stats: [
      { label: "Projects Finished", value: "3+" },
      { label: "Technologies", value: "8+" },
      { label: "Continuous", value: "∞", suffix: "Learning" }
    ],
    featureCards: [
      {
        title: "Development",
        desc: "Angular, Node.js, Express, MongoDB & TypeScript for performant full-stack apps."
      },
      {
        title: "Continuous Learning",
        desc: "Exploring AI Agents, Cloud architecture & scalable distributed backends."
      }
    ],
    focusBanner: {
      eyebrow: "CURRENTLY FOCUSED ON",
      heading: "Creating scalable, high-performance web applications and fluid digital experiences."
    }
  },

  certifications: [
    {
      id: "cert-1",
      title: "Full-Stack Web Development (MEAN)",
      issuer: "National Telecommunication Institute (NTI)",
      year: "2026",
      skills: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "REST APIs"],
      description: "Intensive government-accredited diploma covering database architecture, scalable REST APIs, authentication, and single-page applications.",
      credentialUrl: "https://nti.sci.eg"
    },
    {
      id: "cert-2",
      title: "Front-End Web Development",
      issuer: "Information Technology Institute (ITI)",
      year: "2026",
      skills: ["Angular", "JavaScript (ES6+)", "CSS", "Bootstrap", "REST APIs"],
      description: "Professional track focused on responsive design, state management, component lifecycles, and modern front-end architectures.",
      credentialUrl: "https://iti.gov.eg"
    },
    {
      id: "cert-3",
      title: "Generative AI and AI Agent",
      issuer: "IBM SkillsBuild",
      year: "2026",
      skills: ["GenAI", "Prompt Engineering", "LLM Integration", "AI Agents"],
      description: "Comprehensive study of modern AI agent architectures, prompt design, and integrating generative models into web apps.",
      credentialUrl: "https://skillsbuild.org"
    },
    {
      id: "cert-4",
      title: "Generative AI Foundations",
      issuer: "AWS Academy",
      year: "2026",
      skills: ["AWS Cloud", "Foundation Models", "Cloud Architecture"],
      description: "Foundations of cloud deployment, serverless backends, and deploying machine learning pipelines on AWS infrastructure.",
      credentialUrl: "https://aws.amazon.com/training/awsacademy/"
    }
  ],

  experience: [
    {
      index: "01",
      role: "Full-Stack MEAN Developer Trainee",
      organization: "National Telecommunication Institute (NTI), Egypt",
      location: "Giza, Egypt",
      period: "08/2026 – 09/2026",
      bullets: [
        "Architected end-to-end full-stack web applications using MongoDB, Express.js, Angular, Node.js, and TypeScript.",
        "Built and secured RESTful APIs with JWT authentication, custom middleware, bcrypt hashing, and role-based access control.",
        "Created scalable MongoDB database schemas with Mongoose indexing, population, and aggregation pipelines.",
        "Engineered modular frontend SPA components with reactive forms, HTTP interceptors, and route guards."
      ],
      tags: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "REST APIs"]
    },
    {
      index: "02",
      role: "Front-End Developer Trainee",
      organization: "Information Technology Institute (ITI), Egypt",
      location: "Cairo, Egypt",
      period: "07/2026 – 08/2026",
      bullets: [
        "Engineered responsive web interfaces using HTML5, CSS, JavaScript, and Angular.",
        "Built and maintained a library of reusable UI components, cutting duplicate code across training projects.",
        "Worked with API responses and JSON data to populate dynamic web interfaces, handling loading and error states for a smoother user experience.",
        "Applied automated testing and code reviews to catch regressions and keep components reliable as the codebase grew.",
        "Optimized layouts across mobile, tablet, and desktop breakpoints for consistent usability."
      ],
      tags: ["Angular", "JavaScript", "CSS", "APIs", "Responsive Design"]
    },
    {
      index: "03",
      role: "Web Designer & Developer Trainee",
      organization: "National Telecommunication Institute (NTI), Egypt",
      location: "Cairo, Egypt",
      period: "06/2026 – 07/2026",
      bullets: [
        "Designed and structured accessible web pages adhering to modern semantic HTML5 and CSS standards.",
        "Implemented interactive UI behaviors with Vanilla JavaScript, DOM manipulations, and smooth transitions.",
        "Practiced mobile-first responsive design principles, delivering clean cross-browser interfaces."
      ],
      tags: ["HTML5", "CSS", "JavaScript", "Responsive Design", "UI/UX"]
    }
  ],

  skills: [
    { name: "Angular", category: "Frontend", iconName: "SiAngular" },
    { name: "TypeScript", category: "Frontend", iconName: "SiTypescript" },
    { name: "JavaScript", category: "Frontend", iconName: "SiJavascript" },
    { name: "Bootstrap", category: "Frontend", iconName: "SiBootstrap" },
    { name: "HTML5", category: "Frontend", iconName: "SiHtml5" },
    { name: "CSS", category: "Frontend", iconName: "SiCss" },
    { name: "Node.js", category: "Backend", iconName: "SiNodedotjs" },
    { name: "Express.js", category: "Backend", iconName: "SiExpress" },
    { name: "REST APIs", category: "Backend", iconName: "TbApi" },
    { name: "MongoDB", category: "Database", iconName: "SiMongodb" },
    { name: "Mongoose", category: "Database", iconName: "SiMongoose" },
    { name: "Git", category: "Tools", iconName: "SiGit" },
    { name: "GitHub", category: "Tools", iconName: "SiGithub" },
    { name: "Postman", category: "Tools", iconName: "SiPostman" },
    { name: "Vite", category: "Tools", iconName: "SiVite" }
  ],

  projects: [
    {
      id: "gym-backend",
      index: "01",
      title: "Gym Management System",
      tagline: "Enterprise RESTful Backend & Admin API",
      description: "A production-grade RESTful backend API for gym management. Handles member registration, recurring subscriptions, trainer scheduling, and customized workout tracking with robust JWT authentication and role-based permissions.",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST API"],
      githubUrl: "https://github.com/Mo7amedTa7a/Gym_Project_BackEnd",
      liveUrl: "https://github.com/Mo7amedTa7a/Gym_Project_BackEnd#api-endpoints",
      image: "gym",
      highlights: [
        "Complete CRUD for members, plans, workouts & trainers",
        "JWT Authentication & authorization middleware",
        "Mongoose aggregation pipelines for gym analytics",
        "Interactive error handling and data sanitation"
      ],
      category: "Backend"
    },
    {
      id: "medlink-app",
      index: "02",
      title: "Medlink — Healthcare Platform",
      tagline: "Connected Patient & Doctor Appointment System",
      description: "A full-stack medical management web application connecting patients, doctors, and clinics. Features instant appointment booking, patient medical history records, and doctor schedule management with a clean, reassuring UI.",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/AhmedMohammeFarouq/Medlink",
      liveUrl: "https://github.com/AhmedMohammeFarouq/Medlink",
      image: "medlink",
      highlights: [
        "Patient appointment scheduling & calendar syncing",
        "Doctor profile verification and specialization filtering",
        "Secure health record management with encrypted storage",
        "Responsive, accessible patient portal"
      ],
      category: "Full-Stack"
    },
    {
      id: "event-management",
      index: "03",
      title: "Event Management Platform",
      tagline: "Event Discovery & Registration Portal",
      description: "A full-featured event management platform allowing organizers to publish conferences and meetups while users browse, filter, and register for tickets. Features real-time seat availability and attendee management.",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript", "JWT"],
      githubUrl: "https://github.com/hamzaashraf1040-ui/event_management",
      liveUrl: "https://github.com/hamzaashraf1040-ui/event_management",
      image: "event",
      highlights: [
        "Event creation with multi-tier ticket types",
        "Category search, date filters & venue mapping",
        "User ticket dashboard with QR code verification",
        "Role-based access for organizers and attendees"
      ],
      category: "Full-Stack"
    }
  ]
};
