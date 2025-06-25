"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

export default function Experience() {
  const experience = {
    title: "React Native Engineer",
    company: "Freelance",
    location: "Islamabad, Pakistan",
    period: "Jan 2023 - Present",
    projects: [
      {
        name: "Passfort",
        tech: ["React Native", "TypeScript", "Nest.js", "Node.js", "Express.js", "MongoDB"],
        description:
          "Built a Password Management Application with User Profiling and secure password storage for both Android and iOS platforms.",
        link: "https://github.com/haseebthedev/passfort-frontend-mobile",
        image: "/passfort.png",
      },
      {
        name: "Expinco",
        tech: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB"],
        description:
          "Built an Expense Tracker Application with User Profiling, Income/Expense Transaction Management, and Wallet Management for both Android/iOS platforms.",
        link: "https://github.com/ItsZumar/expinco-frontend-mobile",
        image: "/expinco.png",
      },
      {
        name: "Your-Helper",
        tech: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux"],
        description:
          "Developed mobile application with reusable UI components, Redux state management, and REST API integration for Android/iOS platforms.",
        link: "https://github.com/ItsZumar",
        image: "/placeholder.svg",
      },
      {
        name: "Yoocha",
        tech: ["React Native", "TypeScript", "Nest.js", "MongoDB", "Redux", "Socket.io"],
        description:
          "Created a Chat Application with User Registration, Friend Request Management, Real-time Messaging, and push notifications.",
        link: "https://github.com/haseebthedev/yoocha-frontend-mobile",
        image: "/yoocha.png",
      },
      {
        name: "Palm Houses",
        tech: ["Payload CMS", "Next.js", "Node.js", "TypeScript", "MongoDB", "XML", "REST API"],
        description:
          "Developed a Property Listing Platform with custom XML Importer, flexible mapping rules, and seamless Payload CMS integration.",
        link: "https://github.com/ItsZumar",
        image: "/placeholder.svg",
      },
    ],
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience / Projects</h2>
          <p className="text-xl text-slate-600">My professional journey and projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.projects.map((project, index) => {
            const shadowColors = [
              "hover:shadow-green-500/20",
              "hover:shadow-purple-500/20",
              "hover:shadow-red-500/20",
              "hover:shadow-blue-500/20",
              "hover:shadow-yellow-500/20",
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
