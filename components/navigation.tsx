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
          {/* <div className="text-xl text-slate-800">Zumar Saeed</div> */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-medium text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Zumar Saeed
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Experience", "Education", "Certifications", "Contact"].map((item) => (
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
            {["About", "Skills", "Experience", "Education", "Certifications", "Contact"].map((item) => (
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
