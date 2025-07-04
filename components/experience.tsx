"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { experience } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience / Projects" subtitle="My professional journey and projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.projects.map((project, index) => {
            const shadowColors = [
              "hover:shadow-green-500/20",
              "hover:shadow-purple-500/20",
              "hover:shadow-red-500/20",
              "hover:shadow-blue-700/20",
              "hover:shadow-yellow-500/20",
              "hover:shadow-blue-400/20",
            ];
            return (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card
                  className={`hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-96 ${
                    shadowColors[index % shadowColors.length]
                  } shadow-md overflow-hidden`}
                >
                  <div className="h-[170px] bg-slate-100 flex items-center justify-center">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-lg">
                      {project.name}
                      <ExternalLink size={18} className="text-slate-400" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
