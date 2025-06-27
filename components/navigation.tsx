"use client";

import type { NavigationItem, NavigationProps } from "@/interface";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

// Navigation Item Component
const NavItem = ({
  item,
  isActive,
  onClick,
  isMobile = false,
}: {
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}) => {
  const baseClasses = "text-sm font-medium transition-colors hover:text-blue-600";
  const activeClasses = isActive ? "text-blue-600" : "text-slate-600";
  const mobileClasses = isMobile ? "block w-full text-left py-2" : "";

  return (
    <button onClick={onClick} className={`${baseClasses} ${activeClasses} ${mobileClasses}`}>
      {item}
    </button>
  );
};

// Desktop Navigation Component
const DesktopNavigation = ({ activeSection, scrollToSection }: { activeSection: string; scrollToSection: (sectionId: string) => void }) => (
  <div className="hidden md:flex space-x-8">
    {NAVIGATION_ITEMS.map((item) => (
      <NavItem key={item} item={item} isActive={activeSection === item.toLowerCase()} onClick={() => scrollToSection(item.toLowerCase())} />
    ))}
  </div>
);

// Mobile Navigation Menu Component
const MobileNavigationMenu = ({ isMenuOpen, scrollToSection }: { isMenuOpen: boolean; scrollToSection: (sectionId: string) => void }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-slate-200">
      {NAVIGATION_ITEMS.map((item) => (
        <NavItem key={item} item={item} isActive={false} onClick={() => scrollToSection(item.toLowerCase())} isMobile={true} />
      ))}
    </div>
  );
};

// Mobile Menu Button Component
const MobileMenuButton = ({ isMenuOpen, onClick }: { isMenuOpen: boolean; onClick: () => void }) => (
  <button className="md:hidden" onClick={onClick}>
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const handleLogoClick = () => scrollToSection("hero");
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo onClick={handleLogoClick} />

          <DesktopNavigation activeSection={activeSection} scrollToSection={scrollToSection} />

          <MobileMenuButton isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
        </div>

        <MobileNavigationMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
      </div>
    </nav>
  );
}
