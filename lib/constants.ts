import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import type { ContactLink, CodeSymbol, BinaryStream, ExperienceItem, EducationItem, CertificationItem, SkillItem } from "./types";

export const NAVIGATION_ITEMS = ["About", "Skills", "Experience", "Education", "Certifications", "Contact"] as const;

// Contact Links
export const CONTACT_LINKS: ContactLink[] = [
  {
    href: "mailto:zumarsaeed17@gmail.com",
    icon: React.createElement(Mail, { size: 20 }),
    title: "Email",
    value: "zumarsaeed17@gmail.com",
    text: "zumarsaeed17@gmail.com",
    hoverColor: "hover:text-green-600",
    shadowColor: "hover:shadow-green-500/20",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    href: "https://linkedin.com/in/zumar-saeed/",
    icon: React.createElement(Linkedin, { size: 20 }),
    title: "LinkedIn",
    value: "zumar-saeed",
    text: "LinkedIn",
    hoverColor: "hover:text-blue-600",
    shadowColor: "hover:shadow-blue-500/20",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    external: true,
  },
  {
    href: "https://github.com/ItsZumar",
    icon: React.createElement(Github, { size: 20 }),
    title: "GitHub",
    value: "ItsZumar",
    text: "GitHub",
    hoverColor: "hover:text-gray-800",
    shadowColor: "hover:shadow-gray-500/20",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    external: true,
  },
];

// Hero Section Constants
export const CODE_SYMBOLS: CodeSymbol[] = [
  { content: "</", className: "code-float-1 text-6xl", style: { top: "10%", left: "5%" } },
  { content: "{ }", className: "code-float-2 text-4xl", style: { top: "20%", right: "10%" } },
  { content: "</>", className: "code-float-3 text-5xl", style: { top: "60%", left: "8%" } },
  { content: "( )", className: "code-float-4 text-3xl", style: { top: "70%", right: "15%" } },
  { content: "[ ]", className: "code-float-5 text-4xl", style: { top: "40%", left: "85%" } },
  { content: "<>", className: "code-float-1 text-5xl", style: { top: "80%", left: "20%" } },
  { content: "=>", className: "code-float-2 text-3xl", style: { top: "15%", left: "75%" } },
  { content: "&&", className: "code-float-3 text-4xl", style: { top: "50%", right: "5%" } },
  { content: "<", className: "code-float-4 text-6xl", style: { top: "30%", left: "15%" } },
  { content: ">", className: "code-float-5 text-5xl", style: { top: "85%", right: "25%" } },
];

export const PROGRAMMING_KEYWORDS: (CodeSymbol & { color: string })[] = [
  { content: "function", className: "code-float-2 text-2xl pulse-code", style: { top: "25%", left: "25%" }, color: "#8b5cf6" },
  { content: "const", className: "code-float-4 text-2xl pulse-code", style: { top: "65%", right: "30%" }, color: "#ef4444" },
  { content: "return", className: "code-float-1 text-2xl pulse-code", style: { top: "45%", left: "70%" }, color: "#f59e0b" },
  { content: "async", className: "code-float-3 text-2xl pulse-code", style: { top: "75%", left: "60%" }, color: "#10b981" },
  { content: "await", className: "code-float-5 text-2xl pulse-code", style: { top: "35%", right: "20%" }, color: "#6366f1" },
];

export const TECH_STACK: (CodeSymbol & { color: string })[] = [
  { content: "React", className: "code-float-3 text-3xl", style: { top: "55%", left: "5%" }, color: "#06b6d4" },
  { content: "Node.js", className: "code-float-1 text-2xl", style: { top: "90%", right: "8%" }, color: "#84cc16" },
  { content: "TypeScript", className: "code-float-4 text-2xl", style: { top: "10%", left: "40%" }, color: "#3b82f6" },
  { content: "MongoDB", className: "code-float-2 text-2xl", style: { top: "95%", left: "45%" }, color: "#f97316" },
];

export const BINARY_STREAMS: BinaryStream[] = [
  {
    position: "left",
    delay: 0,
    content: ["1010101010", "0101010101", "1100110011", "0011001100", "1111000011", "0000111100"],
  },
  {
    position: "right",
    delay: 5,
    content: ["1100101010", "0011010101", "1010110011", "0101001100", "1001000011", "0110111100"],
  },
  {
    position: "left",
    delay: 8,
    fontSize: 12,
    content: ["11001010", "00110101", "10101100", "01010011", "10010000", "01101111"],
  },
  {
    position: "right",
    delay: 12,
    fontSize: 12,
    content: ["10101100", "01010011", "11001010", "00110101", "01101111", "10010000"],
  },
];

// About us Constants
export const STATS_DATA = [
  { value: "4+", label: "Years of Study", sublabel: "Computer Science", color: "blue" },
  { value: "1+", label: "Years Experience", sublabel: "Professional Work", color: "green" },
  { value: "5+", label: "Projects Built", sublabel: "Mobile & Web Apps", color: "purple" },
  { value: "15+", label: "Technologies", sublabel: "Mastered", color: "orange" },
] as const;

export const SERVICES_DATA = [
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Building cross-platform mobile apps with React Native",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Creating responsive web applications with modern frameworks",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Developing robust APIs and server-side applications",
    color: "from-purple-500 to-violet-500",
  },
] as const;

export const INTERESTS_DATA = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Learning", icon: "📚" },
  { name: "Collaboration", icon: "🤝" },
  { name: "Open Source", icon: "🌟" },
  { name: "Clean Code", icon: "✨" },
] as const;

// Experience Data
export const experience = {
  title: "React Native Engineer",
  company: "Freelance",
  location: "Islamabad, Pakistan",
  period: "Jan 2023 - Present",
  projects: [
    {
      name: "Passfort",
      tech: ["React Native", "TypeScript", "Nest.js", "Node.js", "Express.js", "MongoDB"],
      description:
        "Built a Password Management Application with User Profiling and secure password storage for both Android and iOS platforms.",
      link: "https://github.com/haseebthedev/passfort-frontend-mobile",
      image: "/passfort.png",
    },
    {
      name: "Expinco",
      tech: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      description:
        "Built an Expense Tracker Application with User Profiling, Income/Expense Transaction Management, and Wallet Management for both Android/iOS platforms.",
      link: "https://github.com/ItsZumar/expinco-frontend-mobile",
      image: "/expinco.png",
    },
    {
      name: "Your-Helper",
      tech: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux"],
      description:
        "Developed mobile application with reusable UI components, Redux state management, and REST API integration for Android/iOS platforms.",
      link: "https://github.com/ItsZumar",
      image: "/placeholder.svg",
    },
    {
      name: "Yoocha",
      tech: ["React Native", "TypeScript", "Nest.js", "MongoDB", "Redux", "Socket.io"],
      description:
        "Created a Chat Application with User Registration, Friend Request Management, Real-time Messaging, and push notifications.",
      link: "https://github.com/haseebthedev/yoocha-frontend-mobile",
      image: "/yoocha.png",
    },
    {
      name: "Portfolio Website",
      tech: ["React.js", "Javascript", "Node.js", "TypeScript"],
      description:
        "Designed and built a responsive Portfolio Website using React.js and TypeScript. Showcases personal projects and skills with clean UI and smooth navigation.",
      link: "https://github.com/ItsZumar/PortfolioWebsite",
      image: "/portfolio.png",
    },
    {
      name: "Phone Lookup App",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
      description:
        "Created Lookup App that lets users report and check spam or scam phone numbers—helping everyone stay safe from unwanted calls.",
      link: "https://github.com/ItsZumar/phone-lookup-frontend",
      image: "/lookup.png",
    },
  ],
};

// Education Data
// Constants
export const EDUCATION_DATA = {
  degree: "Bachelor of Science in Computer Science",
  abbreviation: "BSCS",
  institution: "Rawalpindi Women University",
  location: "📍 Islamabad, Pakistan",
  duration: "Sep 2019 - Aug 2023",
  description:
    "Completed a comprehensive 4-year program focused on software development, algorithms, and modern computing technologies with hands-on experience in mobile and web application development.",
} as const;

export const COURSES_DATA = [
  { name: "Database Systems", icon: "🗄️" },
  { name: "Data Structures & Algorithms", icon: "🔗" },
  { name: "Software Engineering", icon: "⚙️" },
  { name: "Web Technologies", icon: "🌐" },
  { name: "Mobile App Development", icon: "📱" },
  { name: "Computer Science Concepts", icon: "💻" },
] as const;

export const SKILLS_DATA = [
  "Problem Solving",
  "Algorithm Design",
  "Software Architecture",
  "Database Design",
  "System Analysis",
  "Project Management",
  "Team Collaboration",
  "Technical Documentation",
] as const;
