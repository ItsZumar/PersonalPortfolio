"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
        <div
          className="absolute top-1/2 left-5 w-16 h-16 border-4 border-purple-300 rotate-45 opacity-25 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute top-20 right-10 text-6xl text-blue-100 font-bold opacity-20">🎓</div>
        <div className="absolute bottom-10 left-20 text-6xl text-green-100 font-bold opacity-20">📚</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600">My academic foundation in Computer Science</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

            {/* Education Card */}
            <div className="relative pl-20 pb-8">
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2  border-l-4 border-blue-500">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Bachelor of Science in Computer Science
                          </CardTitle>
                          <div className="text-sm text-blue-600 font-semibold mt-1">BSCS</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <CardDescription className="text-lg font-medium text-slate-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Rawalpindi Women University
                        </CardDescription>
                        <CardDescription className="text-base text-slate-600 flex items-center gap-2 ml-4">
                          📍 Islamabad, Pakistan
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="text-blue-700 font-semibold">Sep 2019 - Aug 2023</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {/* Degree Info */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        Academic Achievement
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Completed a comprehensive 4-year program focused on software development, algorithms, and modern computing
                        technologies with hands-on experience in mobile and web application development.
                      </p>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        Key Coursework
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { name: "Database Systems", icon: "🗄️" },
                          { name: "Data Structures & Algorithms", icon: "🔗" },
                          { name: "Software Engineering", icon: "⚙️" },
                          { name: "Web Technologies", icon: "🌐" },
                          { name: "Mobile App Development", icon: "📱" },
                          { name: "Computer Science Concepts", icon: "💻" },
                        ].map((course, index) => (
                          <div
                            key={course.name}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                          >
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">{course.icon}</span>
                            <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                              {course.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Gained */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Problem Solving",
                          "Algorithm Design",
                          "Software Architecture",
                          "Database Design",
                          "System Analysis",
                          "Project Management",
                          "Team Collaboration",
                          "Technical Documentation",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
