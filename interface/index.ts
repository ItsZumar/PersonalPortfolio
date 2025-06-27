import { badgeVariants } from "@/components/ui/badge";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { VariantProps } from "class-variance-authority";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];

export interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

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

export interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}
