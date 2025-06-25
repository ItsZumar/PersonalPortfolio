"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

interface ContactLink {
  href: string;
  icon: React.ReactNode;
  text: string;
  hoverColor: string;
  external?: boolean;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const contactLinks: ContactLink[] = [
    {
      href: "tel:+923281369894",
      icon: <Phone size={20} />,
      text: "+92 328 1369894",
      hoverColor: "hover:text-yellow-600",
    },
    {
      href: "mailto:zumarsaeed17@gmail.com",
      icon: <Mail size={20} />,
      text: "zumarsaeed17@gmail.com",
      hoverColor: "hover:text-green-600",
    },
    {
      href: "https://linkedin.com/in/zumar-saeed/",
      icon: <Linkedin size={20} />,
      text: "LinkedIn",
      hoverColor: "hover:text-blue-600",
      external: true,
    },
    {
      href: "https://github.com/ItsZumar",
      icon: <Github size={20} />,
      text: "GitHub",
      hoverColor: "hover:text-gray-800",
      external: true,
    },
  ];

  const ContactLink = ({ link }: { link: ContactLink }) => {
    const baseClasses = "flex items-center gap-2 text-slate-600 transition-colors";
    const linkClasses = `${baseClasses} ${link.hoverColor}`;

    if (link.external) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          {link.icon}
          <span>{link.text}</span>
        </a>
      );
    }

    return (
      <a href={link.href} className={linkClasses}>
        {link.icon}
        <span>{link.text}</span>
      </a>
    );
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">Zumar Saeed</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">React Native Engineer & Full-Stack Developer</p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Passionate about building innovative mobile and web applications with modern technologies. Specialized in React Native,
            TypeScript, and Node.js development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <ContactLink key={index} link={link} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50">
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
