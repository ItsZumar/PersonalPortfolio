export interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export interface ContactLink {
  href: string;
  icon: React.ReactNode;
  text: string;
  hoverColor: string;
  external?: boolean;
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
