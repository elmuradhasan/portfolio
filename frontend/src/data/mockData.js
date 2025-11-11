// Mock data for Elmurad Hasanov's Portfolio

export const personalInfo = {
  name: "Elmurad Hasanov",
  username: "elmuradhasan",
  title: "Lead Frontend Developer",
  tagline: "Crafting exceptional digital experiences with modern web technologies",
  bio: "Passionate frontend developer with expertise in building scalable, performant web applications. I specialize in React, Next.js, and TypeScript, focusing on creating intuitive user interfaces and seamless user experiences.",
  email: "elmuradhasan@gmail.com",
  location: "Remote",
  social: {
    github: "https://github.com/elmuradhasan",
    linkedin: "https://www.linkedin.com/in/elmurad-h%C9%99s%C9%99nov-627220216/",
    instagram: "https://elmuradhasan/elmuradhasan"
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
    company: "AFB Bank",
    period: "2025 - Present",
    description: "Leading frontend development team, architecting scalable solutions with React and Next.js",
    achievements: [
      "Improved app performance by 60%",
      "Commumity with backend team to enhance API efficiency",
      "Created bank web application from scratch "
    ]
  },
    {
    id:2,
    role: "Frontend Instructor",
    company: "Software Village",
    period: "2024 - 2025",
    description: "I have taught students on frontend technologies including React, Next.js, and TypeScript.",
    achievements: [
      "Designed comprehensive curriculum for frontend development",
      "Mentored 14+ students to successful job placements",
      "Organized workshops and coding bootcamps"
    ]
  },
  {
    id: 3,
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
    id: 4,
    role: "Engineer Programmer",
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
    image: "https://sagartech.co.in/blogs/wp-content/uploads/2024/08/Ecommerce-Website-Design-Feature-Image-scaled.webp",
    tags: ["React", "Redux", "TypeScript", "Tailwind"],
    category: "Next.js",
    demoUrl: "https://surpriseaz.netlify.app/",
    githubUrl: "#",
    featured: true,
    caseStudy: {
      challenge: "Build a scalable e-commerce platform that handles high traffic and complex product catalogs.",
      solution: "Implemented server-side rendering with Next.js, optimized images, and used edge caching for lightning-fast performance.",
      results: "Achieved 95+ Lighthouse score, handling 10k+ concurrent users with sub-second load times."
    }
  },
    {
    id: 5,
    title: "Toyplan for vendors and couples",
    description: "Toyplan is a comprehensive platform for vendors and couples to manage their orders and assignments.",
    image: "https://www.leugardens.org/files/assets/leugardens/v/1/weddings/wedding-1.png?dimension=pageimagefullwidth&w=1140",
    tags: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
    category: "Next.js",
    demoUrl: "https://wedding-ochre-pi.vercel.app/",
    githubUrl: "#",
    featured: true,
    caseStudy: {
      challenge: "Create an intuitive interface for AI content generation with fine-grained control.",
      solution: "Integrated OpenAI API with custom prompts, real-time generation, and content refinement tools.",
      results: "Reduced content creation time by 70%, with 85% of generated content requiring minimal edits."
    }
  },
  {
    id: 2,
    title: "Kontaktimaz - Contact Management App",
    description: "Real-time collaborative task management tool with drag-and-drop interface and team analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "GraphQL", "Framer Motion"],
    category: "React",
    demoUrl: "https://kontaktimaz.netlify.app/",
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
    title: "My portfolio version 2.0",
    description: "Comprehensive analytics dashboard for social media metrics with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    category: "Next.js",
    demoUrl: "https://elmuradhasan.github.io/myportfolio/",
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
    title: "EDUCRM for teachers and students and courses",
    description: "EDUCRM is a comprehensive platform for teachers and students to manage their courses and assignments.",
    image: "https://tse4.mm.bing.net/th/id/OIP.S4HBJbufIe3sL09QlCMhowHaC9?pid=Api&P=0&h=220",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "React",
    demoUrl: "https://educrm-3zso.vercel.app/",
    githubUrl: "#",
    featured: false,
    caseStudy: {
      challenge: "Enable non-technical users to create professional portfolios with customization options.",
      solution: "Built drag-and-drop editor with live preview, template system, and export functionality.",
      results: "1000+ portfolios created in first month, 4.8/5 user satisfaction rating."
    }
  },

];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "React", label: "React" },
  { id: "Next.js", label: "Next.js" },
  { id: "TypeScript", label: "TypeScript" }
];
