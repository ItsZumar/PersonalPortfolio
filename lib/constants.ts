import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import type { ContactLink, CodeSymbol, BinaryStream, ExperienceItem, EducationItem, CertificationItem, SkillItem } from "./types";

// Contact Links
export const CONTACT_LINKS: ContactLink[] = [
  {
    href: "tel:+923281369894",
    icon: React.createElement(Phone, { size: 20 }),
    title: "Phone",
    value: "+92 328 1369894",
    text: "+92 328 1369894",
    hoverColor: "hover:text-yellow-600",
    shadowColor: "hover:shadow-yellow-500/20",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
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

// Experience Data
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "React Native Engineer",
    company: "Yoocha",
    period: "2023 - Present",
    description: "Leading mobile app development using React Native, implementing complex UI components and integrating third-party APIs.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    logo: "/yoocha.png",
  },
  {
    title: "Full-Stack Developer",
    company: "Passfort",
    period: "2022 - 2023",
    description: "Developed web applications using modern JavaScript frameworks and worked on both frontend and backend systems.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    logo: "/passfort.png",
  },
  {
    title: "Software Engineer",
    company: "Expinco",
    period: "2021 - 2022",
    description: "Built scalable web applications and contributed to the development of microservices architecture.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Docker"],
    logo: "/expinco.png",
  },
];

// Education Data
export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology",
    period: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and data structures. Completed capstone project on mobile app development.",
    gpa: "3.8/4.0",
  },
];

// Certifications Data
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: "React Native Development",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-RN-2023",
    url: "https://example.com/cert",
  },
  {
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-FSWD-2022",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    credentialId: "FCC-JS-2021",
  },
];

// Skills Data
export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "React Native", level: 95, category: "mobile" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  
  // Database
  { name: "MongoDB", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Firebase", level: 85, category: "database" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
]; 