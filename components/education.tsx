"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/section-heading";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Education" subtitle="My complete academic journey from school to university" />

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* University Education */}
            <div className="relative md:pl-20 pb-12">
              <Card className="education-card bg-gradient-to-br from-white to-blue-50 border-l-4 border-blue-500 shadow-xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-3 rounded-xl shadow-lg">
                          <GraduationCap className="text-white" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-lg sm:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Bachelor of Science in Computer Science
                          </CardTitle>
                          <div className="text-sm text-blue-600 font-semibold mt-1">BSCS</div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <CardDescription className="text-base sm:text-lg font-medium text-slate-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Rawalpindi Women University
                        </CardDescription>
                        <CardDescription className="text-sm sm:text-base text-slate-600 flex items-center gap-2 ml-4">
                          📍 Islamabad, Pakistan
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200">
                      <Calendar size={14} className="text-blue-600" />
                      <span className="text-blue-700 font-semibold text-sm sm:text-base">Sep 2019 - Aug 2023</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Degree Info */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        Academic Achievement
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        Completed a comprehensive 4-year program focused on software development, algorithms, and modern computing
                        technologies with hands-on experience in mobile and web application development.
                      </p>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        Key Coursework
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
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
                            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                          >
                            <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">{course.icon}</span>
                            <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">
                              {course.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Gained */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default text-xs sm:text-sm"
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

            {/* College Education */}
            <div className="relative md:pl-20 pb-12">
              <Card className="education-card bg-gradient-to-br from-white to-purple-50 border-l-4 border-purple-500 shadow-xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 sm:p-3 rounded-xl shadow-lg">
                          <GraduationCap className="text-white" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-lg sm:text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Intermediate in Computer Science
                          </CardTitle>
                          <div className="text-sm text-purple-600 font-semibold mt-1">ICS</div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <CardDescription className="text-base sm:text-lg font-medium text-slate-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Post Graduate College
                        </CardDescription>
                        <CardDescription className="text-sm sm:text-base text-slate-600 flex items-center gap-2 ml-4">
                          📍 Islamabad, Pakistan
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-200">
                      <Calendar size={14} className="text-purple-600" />
                      <span className="text-purple-700 font-semibold text-sm sm:text-base">Apr 2017 - May 2019</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Degree Info */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        Pre-University Foundation
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        Completed intermediate education with specialization in Computer Science, building a strong foundation in
                        mathematics, physics, and computer fundamentals that prepared me for university-level computer science studies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* School Education */}
            <div className="relative md:pl-20">
              <Card className="education-card bg-gradient-to-br from-white to-green-50 border-l-4 border-green-500 shadow-xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 sm:p-3 rounded-xl shadow-lg">
                          <GraduationCap className="text-white" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-lg sm:text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Secondary School Certificate
                          </CardTitle>
                          <div className="text-sm text-green-600 font-semibold mt-1">Matriculation</div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <CardDescription className="text-base sm:text-lg font-medium text-slate-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Oxford Model Secondary School
                        </CardDescription>
                        <CardDescription className="text-sm sm:text-base text-slate-600 flex items-center gap-2 ml-4">
                          📍 Islamabad, Pakistan
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200">
                      <Calendar size={14} className="text-green-600" />
                      <span className="text-green-700 font-semibold text-sm sm:text-base">Apr 2015 - May 2017</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 sm:space-y-6">
                    {/* School Info */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 rounded-xl border border-green-100">
                      <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        Academic Foundation
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        Completed secondary education with a strong focus on science and mathematics, establishing the fundamental knowledge
                        base that would later support my specialization in computer science and technology.
                      </p>
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
