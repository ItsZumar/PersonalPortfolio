"use client";

import { INTERESTS_DATA, SERVICES_DATA, STATS_DATA } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

// Background Decorations Component
const BackgroundDecorations = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-25 animate-bounce"></div>
    <div
      className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
    <div className="absolute top-1/3 left-10 text-5xl text-purple-50 font-bold opacity-20">⚡</div>
  </div>
);

// Info Card Component
const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur"></div>
    <div className="relative bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        {title}
      </h3>
      {children}
    </div>
  </div>
);

// Stat Card Component
const StatCard = ({ value, label, sublabel, color }: (typeof STATS_DATA)[number]) => {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600 text-blue-800 text-blue-600",
    green: "from-green-50 to-green-100 border-green-200 text-green-600 text-green-800 text-green-600",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600 text-purple-800 text-purple-600",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600 text-orange-800 text-orange-600",
  };

  const [bgGradient, borderColor, valueColor, labelColor, sublabelColor] = colorClasses[color].split(" ");

  return (
    <div
      className={`bg-gradient-to-br ${bgGradient} p-6 rounded-xl border ${borderColor} hover:shadow-lg transition-all duration-300 group`}
    >
      <div className={`text-3xl font-bold ${valueColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>{value}</div>
      <div className={`text-sm font-semibold ${labelColor}`}>{label}</div>
      <div className={`text-xs ${sublabelColor} mt-1`}>{sublabel}</div>
    </div>
  );
};

// Service Item Component
const ServiceItem = ({ icon, title, description, color }: (typeof SERVICES_DATA)[number]) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group">
    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <div className="flex-1">
      <h4
        className={`font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}
      >
        {title}
      </h4>
      <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
  </div>
);

// Interest Tag Component
const InterestTag = ({ name, icon }: (typeof INTERESTS_DATA)[number]) => (
  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all duration-300 group cursor-default">
    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="text-sm font-medium text-indigo-700 group-hover:text-indigo-800">{name}</span>
  </div>
);

// Stats Section Component
const StatsSection = () => (
  <div className="grid grid-cols-2 gap-6">
    {STATS_DATA.map((stat, index) => (
      <StatCard key={index} {...stat} />
    ))}
  </div>
);

// Services Section Component
const ServicesSection = () => (
  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-lg">
    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      What I Do
    </h3>
    <div className="space-y-4">
      {SERVICES_DATA.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  </div>
);

// Interests Section Component
const InterestsSection = () => (
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 shadow-lg">
    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      Beyond Code
    </h3>
    <div className="flex flex-wrap gap-3">
      {INTERESTS_DATA.map((interest, index) => (
        <InterestTag key={index} {...interest} />
      ))}
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <BackgroundDecorations />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile info */}
          <div className="space-y-8">
            <InfoCard title="Who I Am">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A passionate <span className="font-semibold text-blue-600">Computer Science graduate</span> with expertise in mobile and web
                development. I specialize in creating efficient, user-friendly applications using modern technologies like{" "}
                <span className="font-semibold text-green-600">React Native</span>,{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>, and{" "}
                <span className="font-semibold text-green-600">Node.js</span>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm driven by the challenge of solving complex problems and turning innovative ideas into reality through clean, scalable
                code.
              </p>
            </InfoCard>

            <StatsSection />
          </div>

          {/* Right side - Skills and interests */}
          <div className="space-y-8">
            <ServicesSection />
            <InterestsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
