export const personalInfo = {
  name: "Amna Hafeez",
  firstName: "Amna",
  lastName: "Hafeez",
  monogram: "AH",
  title: "Software Engineer",
  tagline:
    "SE student at FAST-NUCES building web platforms, ML projects and 3D heritage tech — from React apps to Assembly games.",
  email: "amna.hafeez.se@gmail.com",
  phone: "+92 320 5979125",
  location: "Islamabad, Pakistan",
  profileImage: "/images/amna-profile.jpg",
  statusBadge: "Open to internships & opportunities",
  typewriterRoles: [
    "Software Engineer",
    "Web Developer",
    "Machine Learning Explorer",
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
  bio: "I'm Amna, a Software Engineering student at FAST-NUCES, Islamabad (Class of 2028). This summer I completed a Platform & Web Engineering internship with TechRealm × PreserveMy.World, building heritage documentation sites and a 3D reconstruction pipeline. I also build full-stack apps with React and Flask, and low-level projects like a Brick Breaker game in x86 Assembly. I care about clean architecture, performance, and shipping work that actually works.",
  stats: [
    { label: "Projects Built", value: 9 },
    { label: "Certifications", value: 6 },
    { label: "Internship", value: 1 },
  ],
  education: [
    {
      institution: "FAST-NUCES",
      degree: "BS Software Engineering",
      period: "Aug 2024 – May 2028",
      location: "Islamabad",
      coursework: [
        "Object-Oriented Programming",
        "Data Structures",
        "Software Engineering",
        "Computer Organization & Assembly Language",
        "Machine Learning Fundamentals",
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
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "HTML/CSS", icon: "devicon-html5-plain" },
      { name: "x86 Assembly", icon: null },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Three.js", icon: "devicon-threejs-original" },
      { name: "TensorFlow/Keras", icon: "devicon-tensorflow-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "Machine Learning", icon: null },
      { name: "Computer Vision", icon: null },
      { name: "3D Reconstruction (COLMAP/SfM)", icon: null },
      { name: "Object-Oriented Programming", icon: null },
      { name: "Data Structures", icon: null },
      { name: "Web Performance Optimization", icon: null },
      { name: "Scrum / Agile", icon: null },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Google Colab", icon: null },
      { name: "Chrome DevTools / Lighthouse", icon: "devicon-chrome-plain" },
      { name: "Postman", icon: null },
      { name: "Trello", icon: "devicon-trello-plain" },
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
      title: "Katas Raj Heritage 3D",
      description:
        "Heritage documentation website for the Katas Raj Temples combining a MobileNetV2 image classifier, an HTML5 Canvas AR measurement overlay and an interactive Three.js 3D depth-relief viewer. Raised Lighthouse Performance from 52 to 80.",
      stack: ["JavaScript", "Three.js", "MobileNetV2", "HTML5 Canvas", "Vercel"],
      repoUrl: "https://github.com/Anfey-SE/katas-raj-heritage-3d",
      liveUrl: "https://katas-raj-heritage-3d.vercel.app",
      image: "/images/projects/katas-raj.png",
      highlights: [
        "Lighthouse Performance 52 → 80",
        "Image classifier, AR overlay and 3D viewer in one site",
      ],
      gradient: "from-accent-blue/30 via-accent-purple/20 to-surface",
    },
    {
      id: 2,
      title: "Mohenjo-daro Great Bath 3D Reconstruction",
      description:
        "COLMAP structure-from-motion pipeline run on CPU-only hardware. Raised registered images from 3 to 13 through exhaustive matching and threshold tuning, and traced the remaining limit to a lack of viewpoint variety in the source photos.",
      stack: ["COLMAP", "Structure-from-Motion", "Photogrammetry"],
      repoUrl: "https://github.com/Anfey-SE/mohenjodaro-greatbath-reconstruction",
      highlights: [
        "Registered images 3 → 13",
        "Root-cause analysis written up",
      ],
      gradient: "from-accent-purple/30 via-accent-cyan/10 to-surface",
    },
    {
      id: 3,
      title: "Mohenjo-daro Heritage Preservation Microsite",
      description:
        "Team Indus's scroll-driven 'stratigraphic core sample' microsite for the Pakistan Preservation Sprint. I led the concept, scroll design and image-embedding approach.",
      stack: ["Web Design", "Team Project", "Vercel"],
      repoUrl: "https://github.com/Anfey-SE/team-indus-mohenjodaro-site",
      liveUrl: "https://team-indus-mohenjodaro-site.vercel.app",
      image: "/images/projects/mohenjo-microsite.png",
      highlights: [],
      gradient: "from-accent-cyan/20 via-accent-blue/20 to-surface",
    },
    {
      id: 4,
      title: "RAHBAR",
      description:
        "Pair project. A retrieval-augmented question-answering service that answers FAST-NUCES policy questions from official documents and refuses when the answer is not there. I worked on the corpus, indexer, retrieval and evaluation.",
      stack: ["Python", "FastAPI", "Chroma", "Redis", "Docker", "Kubernetes"],
      repoUrl: "https://github.com/Anfey-SE/rahbar",
      highlights: [],
      gradient: "from-accent-blue/30 via-accent-cyan/20 to-surface",
    },
    {
      id: 5,
      title: "ScamShield Live",
      description:
        "Hackathon project (Iris Hacks IV, team VectorVision). It checks messages for scam tactics using Gemini, with a Flask backend and React frontend. My role was development, testing and QA.",
      stack: ["Flask", "React", "Gemini", "Vercel"],
      repoUrl: "https://github.com/Anfey-SE/ScamShield-Live",
      liveUrl: "https://scam-shield-live.vercel.app",
      image: "/images/projects/scamshield.png",
      highlights: [],
      gradient: "from-accent-purple/20 via-accent-blue/20 to-surface",
    },
    {
      id: 6,
      title: "ClinicQ",
      description:
        "Campus clinic queue manager built with Flask, React and Tailwind CSS, with 7 API endpoints and a live dashboard.",
      stack: ["Flask", "React", "Tailwind CSS"],
      repoUrl: "https://github.com/Anfey-SE/clinic-app",
      image: "/images/projects/clinicq.png",
      highlights: [],
      gradient: "from-accent-cyan/30 via-accent-purple/10 to-surface",
    },
    {
      id: 7,
      title: "Campus Blood Donor Finder System",
      description:
        "A web-based donor management platform built for campus-wide use — featuring donor registration, blood request handling, admin verification, and real-time availability. Led a 4-member team as Scrum Master.",
      stack: ["PHP", "HTML", "CSS", "Git", "GitHub"],
      repoUrl: "https://github.com/Anfey-SE/Blood-Donor-Finder-Campus",
      highlights: [
        "6+ core features implemented",
        "Admin modules for verification, approvals & usage stats",
        "Agile delivery across sprints",
      ],
      gradient: "from-accent-blue/30 via-accent-purple/20 to-surface",
    },
    {
      id: 8,
      title: "Brick Breaker Game",
      description:
        "A playable Brick Breaker game written entirely in x86 Assembly — real-time keyboard input, collision detection, score tracking, and direct memory management.",
      stack: ["x86 Assembly"],
      repoUrl: "https://github.com/Anfey-SE/brick-breaker-game-assembly",
      highlights: [
        "Hardware interrupt handling",
        "Register-level game loop execution",
      ],
      gradient: "from-accent-cyan/20 via-accent-blue/20 to-surface",
    },
    {
      id: 9,
      title: "UNO Card Game",
      description:
        "A fully functional console-based UNO game for 2–4 players with complete rule enforcement, special card logic, and modular OOP architecture.",
      stack: ["C++", "OOP"],
      repoUrl: "https://github.com/Anfey-SE/uno-card-game",
      highlights: [
        "5+ custom classes",
        "Separated game logic, player state, deck management",
      ],
      gradient: "from-accent-purple/30 via-accent-cyan/10 to-surface",
    },
  ],
};

export const experience = {
  title: "Experience & Leadership",
  items: [
    {
      id: 1,
      role: "Software Engineering Intern",
      title: "Platform & Web Engineering Track, Team Indus",
      organization: "TechRealm × PreserveMy.World",
      period: "Jun – Aug 2026",
      location: "Lahore, Pakistan · Remote",
      description:
        "Built Katas Raj Heritage 3D (MobileNetV2 classifier, Canvas AR overlay, Three.js viewer) and raised its Lighthouse Performance from 52 to 80. Ran a COLMAP 3D reconstruction of Mohenjo-daro's Great Bath (3 to 13 registered images). Built and deployed 3 additional websites, and trained models on MNIST (97.54% test accuracy) and the Kaggle Titanic competition (0.76315).",
    },
    {
      id: 2,
      role: "Volunteer",
      title: "Programming Fundamentals Workshop",
      organization: "FAST-NUCES",
      period: "2025",
      location: "Islamabad",
      description:
        "Taught introductory programming to junior students; supported hands-on labs and logic-building sessions.",
    },
    {
      id: 3,
      role: "Event Organizer",
      title: "Bug Busters Competitive Programming Event",
      organization: "Bug Busters Organization",
      period: "2025",
      location: "Pakistan",
      description:
        "Organized competitive programming event; handled participant coordination and logistics end-to-end.",
    },
    {
      id: 4,
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
      title: "Certificate of Appreciation – Platform & Web Engineering",
      issuer: "TechRealm",
      date: "Aug 2026",
      image: "/images/certificates/pmw-certificate.jpg",
    },
    {
      id: 2,
      title: "Kaggle: Intro to Machine Learning",
      issuer: "Kaggle",
      date: "Jul 2026",
      image: "/images/certificates/kaggle-intro-ml.jpg",
    },
    {
      id: 3,
      title: "Kaggle: Python",
      issuer: "Kaggle",
      date: "Jul 2026",
      image: "/images/certificates/kaggle-python.jpg",
    },
    {
      id: 4,
      title: "Git & GitHub Workshop Certificate",
      issuer: "ConFiniti IST Chapter, FAST-NUCES",
      date: "May 2025",
      image: "/images/certificates/git-github-workshop.jpg",
    },
    {
      id: 5,
      title: "Certificate of Excellence in E-Commerce & Web Designing",
      issuer: "Logix College",
      date: "2023",
    },
    {
      id: 6,
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
