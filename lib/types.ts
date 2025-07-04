// Common interfaces used across components

export interface ContactLink {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  text?: string;
  hoverColor?: string;
  shadowColor: string;
  bgColor: string;
  iconColor: string;
  external?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CodeSymbol {
  content: string;
  className: string;
  style: React.CSSProperties;
}

export interface BinaryStream {
  position: "left" | "right";
  delay: number;
  fontSize?: number;
  content: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: "frontend" | "backend" | "mobile" | "database" | "tools";
  icon?: string;
} 