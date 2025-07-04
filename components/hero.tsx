"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CONTACT_LINKS, CODE_SYMBOLS, PROGRAMMING_KEYWORDS, TECH_STACK, BINARY_STREAMS } from "@/lib/constants";
import type { ContactLink, CodeSymbol, BinaryStream } from "@/lib/types";
import { HeroProps } from "@/interface";

// Components
const ContactLink = ({ link }: { link: ContactLink }) => {
  const baseClasses =
    "flex items-center gap-1 sm:gap-2 text-slate-600 transition-all duration-300 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 text-xs sm:text-sm";
  const linkClasses = `${baseClasses} ${link.hoverColor} ${link.shadowColor} hover:shadow-lg hover:-translate-y-1`;

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
        {link.icon}
        <span className="hidden sm:inline">{link.text}</span>
      </a>
    );
  }

  return (
    <a href={link.href} className={linkClasses}>
      {link.icon}
      <span className="hidden sm:inline">{link.text}</span>
    </a>
  );
};

const CodeSymbol = ({ symbol }: { symbol: CodeSymbol }) => {
  // Convert Tailwind text sizes to responsive sizes for mobile
  const getResponsiveClassName = (className: string) => {
    return className
      .replace(/text-6xl/g, 'text-3xl md:text-5xl lg:text-6xl')
      .replace(/text-5xl/g, 'text-2xl md:text-4xl lg:text-5xl')
      .replace(/text-4xl/g, 'text-xl md:text-3xl lg:text-4xl')
      .replace(/text-3xl/g, 'text-lg md:text-2xl lg:text-3xl')
      .replace(/text-2xl/g, 'text-base md:text-xl lg:text-2xl');
  };

  return (
    <div className={`code-symbol ${getResponsiveClassName(symbol.className)}`} style={symbol.style}>
      {symbol.content}
    </div>
  );
};

const ProgrammingKeyword = ({ keyword }: { keyword: CodeSymbol & { color: string } }) => {
  // Convert Tailwind text sizes to responsive sizes for mobile
  const getResponsiveClassName = (className: string) => {
    return className
      .replace(/text-6xl/g, 'text-3xl md:text-5xl lg:text-6xl')
      .replace(/text-5xl/g, 'text-2xl md:text-4xl lg:text-5xl')
      .replace(/text-4xl/g, 'text-xl md:text-3xl lg:text-4xl')
      .replace(/text-3xl/g, 'text-lg md:text-2xl lg:text-3xl')
      .replace(/text-2xl/g, 'text-base md:text-xl lg:text-2xl');
  };

  return (
    <div className={`code-symbol ${getResponsiveClassName(keyword.className)}`} style={{ ...keyword.style, color: keyword.color }}>
      {keyword.content}
    </div>
  );
};

const BinaryStream = ({ stream }: { stream: BinaryStream }) => (
  <div
    className="binary-stream"
    style={{
      [stream.position]: "2%",
      animationDelay: `${stream.delay}s`,
      fontSize: stream.fontSize ? `${stream.fontSize}px` : "14px",
    }}
  >
    {stream.content.map((line, index) => (
      <div key={index} className="text-sm md:text-base lg:text-lg">{line}</div>
    ))}
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Code Symbols */}
    {CODE_SYMBOLS.map((symbol, index) => (
      <CodeSymbol key={`code-${index}`} symbol={symbol} />
    ))}

    {/* Programming Keywords */}
    {PROGRAMMING_KEYWORDS.map((keyword, index) => (
      <ProgrammingKeyword key={`keyword-${index}`} keyword={keyword} />
    ))}

    {/* Binary Streams */}
    {BINARY_STREAMS.map((stream, index) => (
      <BinaryStream key={`binary-${index}`} stream={stream} />
    ))}

    {/* Tech Stack */}
    {TECH_STACK.map((tech, index) => (
      <ProgrammingKeyword key={`tech-${index}`} keyword={tech} />
    ))}

    {/* Geometric Elements */}
    <div
      className="absolute top-10 sm:top-20 left-5 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 border-2 border-blue-200 rotate-45 opacity-20 animate-spin"
      style={{ animationDuration: "20s" }}
    />
    <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 border-2 border-green-200 opacity-20 animate-bounce" />
    <div className="absolute top-1/2 left-2 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 bg-purple-200 rounded-full opacity-20 animate-pulse" />
    <div className="absolute top-1/3 right-10 sm:right-20 w-4 h-12 sm:w-6 sm:h-20 bg-gradient-to-b from-blue-200 to-transparent opacity-20" />
  </div>
);

const HeroContent = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-0">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
        Zumar Saeed
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
        React Native Engineer & Full-Stack Developer
      </p>
      <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
        Passionate about building innovative mobile and web applications with modern technologies. Specialized in React Native, TypeScript,
        and Node.js development.
      </p>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        {CONTACT_LINKS.map((link, index) => (
          <ContactLink key={index} link={link} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button 
          onClick={() => scrollToSection("contact")} 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
        >
          Get In Touch
        </Button>
        <a href="/ZumarSaeed_RN.pdf" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <HeroContent scrollToSection={scrollToSection} />
    </section>
  );
}
