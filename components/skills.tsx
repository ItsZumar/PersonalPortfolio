"use client";

import { skills } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div className="flex flex-wrap justify-center gap-6">
          {skills.languages.map((skill) => (
            <div
              key={skill.name}
              className={`w-28 h-28 rounded-full border-3 ${skill.color} flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
            >
              <span className="text-2xl mb-1">{skill.icon}</span>
              <span className="text-xs font-semibold text-center px-1 leading-tight">{skill.name}</span>
            </div>
          ))}

          {skills.frameworks.map((skill) => (
            <div
              key={skill.name}
              className={`w-28 h-28 rounded-full border-3 ${skill.color} flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
            >
              <span className="text-2xl mb-1">{skill.icon}</span>
              <span className="text-xs font-semibold text-center px-1 leading-tight">{skill.name}</span>
            </div>
          ))}

          {skills.tools.map((skill) => (
            <div
              key={skill.name}
              className={`w-28 h-28 rounded-full border-3 ${skill.color} flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
            >
              <span className="text-2xl mb-1">{skill.icon}</span>
              <span className="text-xs font-semibold text-center px-1 leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
