"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    "The Complete Node.js Developer course (2020)",
    "Node.js, Express.js, MongoDB, the Complete Bootcamp (2020)",
    "Advance CSS and Sass: Flexbox, Grid, Animations (2020)",
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600">Professional development and learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="text-yellow-600 mt-1" size={35} />
                  <p className="text-slate-700 font-medium">{cert}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
