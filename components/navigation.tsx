"use client";

import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl text-slate-800">Zumar Saeed</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Experience", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {["About", "Skills", "Experience", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
