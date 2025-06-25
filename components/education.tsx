"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600">My academic background</p>
        </div>

        <Card className=" mx-auto">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">Bachelor of Science in Computer Science (BSCS)</CardTitle>
                <CardDescription className="text-lg mt-1">Rawalpindi Women University, Rawalpindi, Pakistan</CardDescription>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 mt-2">
              <Calendar size={16} />
              <span className="text-xs">Sep 2019 - Aug 2023</span>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-slate-600 mb-4">
              <strong>Relevant Courses:</strong> Database Systems, Data Structure and Algorithms, Software Engineering Concepts and Web
              Technologies, Mobile App Development
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
