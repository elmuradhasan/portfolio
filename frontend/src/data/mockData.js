// Mock data for Elmurad Hasanov's Portfolio

export const personalInfo = {
  name: "Elmurad Hasanov",
  username: "elmuradhasan",
  title: "Lead Frontend Developer",
  tagline: "Crafting exceptional digital experiences with modern web technologies",
  bio: "Passionate frontend developer with expertise in building scalable, performant web applications. I specialize in React, Next.js, and TypeScript, focusing on creating intuitive user interfaces and seamless user experiences.",
  email: "elmurad@example.com",
  location: "Remote",
  social: {
    github: "https://github.com/elmuradhasan",
    linkedin: "https://linkedin.com/in/elmuradhasan",
    twitter: "https://twitter.com/elmuradhasan"
  }
};

export const skills = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 92, category: "language" },
  { name: "JavaScript", level: 95, category: "language" },
  { name: "Tailwind CSS", level: 90, category: "styling" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "Redux", level: 88, category: "state" },
  { name: "Framer Motion", level: 85, category: "animation" },
  { name: "Git", level: 90, category: "tools" }
];

export const experience = [
  {
    id: 1,
    role: "Lead Frontend Developer",
    company: "AFB Bank.",
    period: "2025 - Present",
    description: "Leading frontend development team, architecting scalable solutions with React and Next.js",
    achievements: [
      "Improved app performance by 60%",
      "Commumity with backend team to enhance API efficiency",
      "Implemented design system"
    ]
  },
  {
    id: 2,
    role: "Middle Frontend Developer",
    company: "Bank Respublika",
    period: "2022 - 2025 (military service break included)",
    description: "Developed complex web applications using modern JavaScript frameworks",
    achievements: [
      "Built 5+ production applications",
      "Optimized codebase for maintainability",
      "Reduced bundle size by 40%"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer | Engineer Programmer",
    company: "AMEA information Technology Institute",
    period: "2021 - 2022",
    description: "Created responsive and interactive user interfaces",
    achievements: [
      "Supported institution's website based on php",
      "Writed articles on web development",
      "Search machine learning model development"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, full-featured e-commerce platform with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    category: "Next.js",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    caseStudy: {
      challenge: "Build a scalable e-commerce platform that handles high traffic and complex product catalogs.",
      solution: "Implemented server-side rendering with Next.js, optimized images, and used edge caching for lightning-fast performance.",
      results: "Achieved 95+ Lighthouse score, handling 10k+ concurrent users with sub-second load times."
    }
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "Real-time collaborative task management tool with drag-and-drop interface and team analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "GraphQL", "Framer Motion"],
    category: "React",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    caseStudy: {
      challenge: "Create an intuitive task management system with real-time updates and smooth animations.",
      solution: "Used GraphQL subscriptions for real-time data, Framer Motion for fluid animations, and optimistic UI updates.",
      results: "Increased team productivity by 40% with intuitive drag-and-drop interface and instant feedback."
    }
  },
  {
    id: 3,
    title: "Social Media Analytics",
    description: "Comprehensive analytics dashboard for social media metrics with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    category: "Next.js",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    caseStudy: {
      challenge: "Display complex data in an accessible and visually appealing way.",
      solution: "Integrated D3.js for custom visualizations, implemented responsive charts, and optimized data processing.",
      results: "Users can analyze 6 months of data in real-time with interactive, drill-down capabilities."
    }
  },
  {
    id: 4,
    title: "Developer Portfolio Generator",
    description: "SaaS platform for developers to create beautiful portfolios without coding.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "React",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    caseStudy: {
      challenge: "Enable non-technical users to create professional portfolios with customization options.",
      solution: "Built drag-and-drop editor with live preview, template system, and export functionality.",
      results: "1000+ portfolios created in first month, 4.8/5 user satisfaction rating."
    }
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "AI-powered tool for generating marketing content with customizable tone and style.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
    category: "Next.js",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    caseStudy: {
      challenge: "Create an intuitive interface for AI content generation with fine-grained control.",
      solution: "Integrated OpenAI API with custom prompts, real-time generation, and content refinement tools.",
      results: "Reduced content creation time by 70%, with 85% of generated content requiring minimal edits."
    }
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "React", label: "React" },
  { id: "Next.js", label: "Next.js" },
  { id: "TypeScript", label: "TypeScript" }
];
