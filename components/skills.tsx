"use client";

import { Code, Briefcase, User } from "lucide-react";

export default function Skills() {
  const skills = {
    languages: [
      { name: "JavaScript", icon: "⚡", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 border-blue-300 text-blue-800" },
    ],
    frameworks: [
      { name: "React", icon: "⚛️", color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
      { name: "React Native", icon: "📱", color: "bg-blue-100 border-blue-300 text-blue-800" },
      { name: "Next.js", icon: "▲", color: "bg-slate-100 border-slate-300 text-slate-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 border-green-300 text-green-800" },
      { name: "Express.js", icon: "🚀", color: "bg-purple-100 border-purple-300 text-purple-800" },
      { name: "Nest.js", icon: "🔴", color: "bg-red-100 border-red-300 text-red-800" },
      { name: "Material UI", icon: "🎨", color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
      { name: "Tailwind CSS", icon: "💨", color: "bg-teal-100 border-teal-300 text-teal-800" },
      { name: "Socket.io", icon: "🔌", color: "bg-orange-100 border-orange-300 text-orange-800" },
      { name: "React Router", icon: "🛣️", color: "bg-pink-100 border-pink-300 text-pink-800" },
      { name: "Redux", icon: "🔄", color: "bg-violet-100 border-violet-300 text-violet-800" },
      { name: "Framer Motion", icon: "✨", color: "bg-amber-100 border-amber-300 text-amber-800" },
    ],
    tools: [
      { name: "Git", icon: "🌿", color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
      { name: "Postman", icon: "📮", color: "bg-orange-100 border-orange-300 text-orange-800" },
      { name: "Firebase", icon: "🔥", color: "bg-red-100 border-red-300 text-red-800" },
      { name: "Figma", icon: "🎨", color: "bg-purple-100 border-purple-300 text-purple-800" },
      { name: "Slack", icon: "💬", color: "bg-green-100 border-green-300 text-green-800" },
      { name: "MongoDB Compass", icon: "🍃", color: "bg-lime-100 border-lime-300 text-lime-800" },
      { name: "Payload CMS", icon: "📦", color: "bg-blue-100 border-blue-300 text-blue-800" },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600">Technologies and tools I work with</p>
        </div>

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
