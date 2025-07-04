"use client";

import { Calendar, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Certifications() {
  const certifications = [
    {
      title: "The Complete Node.js Developer Course",
      year: "2020",
      icon: "🟢",
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      title: "Node.js, Express.js, MongoDB Bootcamp",
      year: "2020",
      icon: "🚀",
      category: "Full-Stack Development",
      skills: ["CRUD Operations", "Authentication", "Database Design", "API Development"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      year: "2020",
      icon: "🎨",
      category: "Frontend Styling",
      skills: ["CSS Grid", "Flexbox", "Sass", "Animations", "Responsive Design"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
  ];
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Professional development and learning" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${cert.bgColor} border-2 ${cert.borderColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
            >
              {/* Certificate ribbon */}
              <div
                className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}
              >
                <span className="text-2xl">{cert.icon}</span>
              </div>

              {/* Completion badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Completed
                </div>
              </div>

              <div className="mt-8">
                {/* Category */}
                <div className={`inline-block bg-gradient-to-r ${cert.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4`}>
                  {cert.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Year */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={16} className="text-slate-500" />
                  <span className="text-slate-600 font-medium">{cert.year}</span>
                </div>

                {/* Skills learned */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/70 text-slate-700 px-2 py-1 rounded-md text-xs font-medium border border-slate-200 group-hover:bg-white group-hover:shadow-sm transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate verification */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Verified Certificate</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300" />
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
