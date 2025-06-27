"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { COURSES_DATA, EDUCATION_DATA, SKILLS_DATA } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

// Background Decorations Component
const BackgroundDecorations = () => (
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
);

// Timeline Line Component
const TimelineLine = () => (
  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
);

// Timeline Dot Component
const TimelineDot = () => (
  <div className="absolute left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
  </div>
);

// Degree Header Component
const DegreeHeader = () => (
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
          <GraduationCap className="text-white" size={24} />
        </div>
        <div>
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {EDUCATION_DATA.degree}
          </CardTitle>
          <div className="text-sm text-blue-600 font-semibold mt-1">{EDUCATION_DATA.abbreviation}</div>
        </div>
      </div>

      <div className="space-y-2">
        <CardDescription className="text-lg font-medium text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          {EDUCATION_DATA.institution}
        </CardDescription>
        <CardDescription className="text-base text-slate-600 flex items-center gap-2 ml-4">{EDUCATION_DATA.location}</CardDescription>
      </div>
    </div>

    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200">
      <Calendar size={16} className="text-blue-600" />
      <span className="text-blue-700 font-semibold">{EDUCATION_DATA.duration}</span>
    </div>
  </div>
);

// Course Item Component
const CourseItem = ({ name, icon }: (typeof COURSES_DATA)[number]) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
    <span className="text-xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{name}</span>
  </div>
);

// Skill Badge Component
const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge
    variant="secondary"
    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
  >
    {skill}
  </Badge>
);

// Academic Achievement Section Component
const AcademicAchievementSection = () => (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      Academic Achievement
    </h4>
    <p className="text-slate-600 leading-relaxed">{EDUCATION_DATA.description}</p>
  </div>
);

// Key Coursework Section Component
const KeyCourseworkSection = () => (
  <div>
    <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      Key Coursework
    </h4>
    <div className="grid md:grid-cols-2 gap-3">
      {COURSES_DATA.map((course) => (
        <CourseItem key={course.name} {...course} />
      ))}
    </div>
  </div>
);

// Skills Developed Section Component
const SkillsDevelopedSection = () => (
  <div>
    <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      Skills Developed
    </h4>
    <div className="flex flex-wrap gap-2">
      {SKILLS_DATA.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

// Education Card Component
const EducationCard = () => (
  <div className="relative pl-20 pb-8">
    <TimelineDot />
    
    <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500">
      <CardHeader className="pb-4">
        <DegreeHeader />
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-6">
          <AcademicAchievementSection />
          <KeyCourseworkSection />
          <SkillsDevelopedSection />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <BackgroundDecorations />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Education" subtitle="My academic foundation in Computer Science" />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <TimelineLine />
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
