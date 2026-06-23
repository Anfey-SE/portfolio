export const personalInfo = {
  name: "Amna Hafeez",
  firstName: "Amna",
  lastName: "Hafeez",
  monogram: "AH",
  title: "Software Engineer",
  tagline:
    "SE student at FAST-NUCES building real-world software — from web platforms to low-level Assembly games.",
  email: "amna.hafeez.se@gmail.com",
  phone: "+92 320 5979125",
  location: "Islamabad, Pakistan",
  cvUrl: "/cv/amna-hafeez-cv.pdf",
  profileImage: "/images/amna-profile.jpg",
  statusBadge: "Open to internships & opportunities",
  typewriterRoles: [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    
  ],
};

export const socialLinks = [
  {
    id: "email",
    label: "Email",
    url: "mailto:amna.hafeez.se@gmail.com",
    display: "amna.hafeez.se@gmail.com",
    icon: "Mail",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/Anfey-SE",
    display: "github.com/Anfey-SE",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/amna-hafeez-se",
    display: "linkedin.com/in/amna-hafeez-se",
    icon: "Linkedin",
  },
  {
    id: "phone",
    label: "Phone",
    url: "tel:+923205979125",
    display: "+92 320 5979125",
    icon: "Phone",
  },
];

export const navLinks = [
  { id: "about", label: "About", href: "about" },
  { id: "skills", label: "Skills", href: "skills" },
  { id: "projects", label: "Projects", href: "projects" },
  { id: "experience", label: "Experience", href: "experience" },
  { id: "certifications", label: "Certifications", href: "certifications" },
  { id: "contact", label: "Contact", href: "contact" },
];

export const about = {
  bio: "I'm Amna, a Software Engineering student at FAST-NUCES, Islamabad (Class of 2028). I build things that solve real problems — from web-based systems to OOP-driven games and low-level Assembly projects. I care about clean architecture, collaborative execution, and shipping work that actually works.",
  stats: [
    { label: "Projects Built", value: 3 },
    { label: "Certifications", value: 3 },
    { label: "Leadership Roles", value: 3 },
  ],
  education: [
    {
      institution: "FAST-NUCES",
      degree: "BS Software Engineering",
      period: "Aug 2024 – May 2028",
      location: "Islamabad",
      coursework: [
        "OOP",
        "Data Structures",
        "Software Engineering",
        "Digital Logic Design",
        "Computer Organization & Assembly Language",
      ],
    },
    {
      institution: "BISE Sargodha",
      degree: "FSc with Additional Mathematics",
      period: "Completed 2024",
      location: "Sargodha",
      coursework: [],
    },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "Assembly Language (x86)", icon: "devicon-assembly-plain" },
    ],
  },
  {
    category: "Concepts & Practices",
    items: [
      { name: "OOP", icon: null },
      { name: "Data Structures", icon: null },
      { name: "Software Engineering", icon: null },
      { name: "Problem Solving", icon: null },
      { name: "Version Control", icon: null },
      { name: "Scrum / Agile", icon: null },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Trello", icon: "devicon-trello-plain" },
      { name: "XAMPP", icon: null },
    ],
  },
];

export const projects = {
  title: "Things I've Built",
  githubProfile: "https://github.com/Anfey-SE",
  githubCta: "See more on GitHub →",
  items: [
    {
      id: 1,
      title: "Campus Blood Donor Finder System",
      link: "https://github.com/Anfey-SE/Blood-Donor-Finder-Campus.git",
      description:
        "A web-based donor management platform built for campus-wide use — featuring donor registration, blood request handling, admin verification, and real-time availability. Led a 4-member team as Scrum Master.",
      stack: ["PHP", "HTML", "CSS", "Git", "GitHub"],
      stackIcons: [
        "devicon-php-plain",
        "devicon-html5-plain",
        "devicon-css3-plain",
        "devicon-git-plain",
        "devicon-github-original",
      ],
      highlights: [
        "6+ core features implemented",
        "Admin modules for verification, approvals & usage stats",
        "Agile delivery across sprints",
      ],
      githubUrl: "https://github.com/Anfey-SE",
      gradient: "from-accent-blue/30 via-accent-purple/20 to-surface",
    },
    {
      id: 2,
      title: "UNO Card Game",
      link: "https://github.com/Anfey-SE/uno-card-game.git",
      description:
        "A fully functional console-based UNO game for 2–4 players with complete rule enforcement, special card logic, and modular OOP architecture.",
      stack: ["C++", "OOP"],
      stackIcons: ["devicon-cplusplus-plain"],
      highlights: [
        "5+ custom classes",
        "Separated game logic, player state, deck management",
      ],
      githubUrl: "https://github.com/Anfey-SE",
      gradient: "from-accent-purple/30 via-accent-cyan/10 to-surface",
    },
    {
      id: 3,
      title: "Brick Breaker Game",
      link: "https://github.com/Anfey-SE/brick-breaker-game-assembly.git",
      description:
        "A playable Brick Breaker game written entirely in x86 Assembly — real-time keyboard input, collision detection, score tracking, and direct memory management.",
      stack: ["x86 Assembly"],
      stackIcons: ["devicon-assembly-plain"],
      highlights: [
        "Hardware interrupt handling",
        "Register-level game loop execution",
      ],
      githubUrl: "https://github.com/Anfey-SE",
      gradient: "from-accent-cyan/20 via-accent-blue/20 to-surface",
    },
  ],
};

export const experience = {
  title: "Leadership & Experience",
  items: [
    {
      id: 1,
      role: "Volunteer",
      title: "Programming Fundamentals Workshop",
      organization: "FAST-NUCES",
      period: "2025",
      location: "Islamabad",
      description:
        "Taught introductory programming to junior students; supported hands-on labs and logic-building sessions.",
    },
    {
      id: 2,
      role: "Event Organizer",
      title: "Bug Busters Competitive Programming Event",
      organization: "Bug Busters Organization",
      period: "2025",
      location: "Pakistan",
      description:
        "Organized competitive programming event; handled participant coordination and logistics end-to-end.",
    },
    {
      id: 3,
      role: "Volunteer",
      title: "Community Service",
      organization: "Saba Aslam Foundation",
      period: "2025",
      location: "Rawalpindi",
      description:
        "Educational activities for children; awareness and outreach programs.",
    },
  ],
};

export const certifications = {
  title: "Certifications",
  items: [
    {
      id: 1,
      title: "Git & GitHub Workshop Certificate",
      issuer: "ConFiniti IST Chapter, FAST-NUCES",
      date: "May 2025",
    },
    {
      id: 2,
      title: "Certificate of Excellence in E-Commerce & Web Designing",
      issuer: "Logix College",
      date: "2023",
    },
    {
      id: 3,
      title: "Community Work Experience Certificate",
      issuer: "Saba Aslam Foundation",
      date: "2025",
    },
  ],
};

export const contact = {
  title: "Let's Build Something Together",
  subtitle:
    "I'm currently open to internships, collaborations, and interesting projects. Feel free to reach out.",
  formFields: [
    { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project...", required: true },
  ],
};

export const footer = {
  text: "© 2026 Amna Hafeez · All rights reserved.",
};

export const sectionIds = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  certifications: "certifications",
  contact: "contact",
};
