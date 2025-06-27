"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-25 animate-bounce"></div>
        <div
          className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/3 left-10 text-5xl text-purple-50 font-bold opacity-20">⚡</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  Who I Am
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  A passionate <span className="font-semibold text-blue-600">Computer Science graduate</span> with expertise in mobile and
                  web development. I specialize in creating efficient, user-friendly applications using modern technologies like{" "}
                  <span className="font-semibold text-green-600">React Native</span>,{" "}
                  <span className="font-semibold text-blue-600">TypeScript</span>, and{" "}
                  <span className="font-semibold text-green-600">Node.js</span>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  I'm driven by the challenge of solving complex problems and turning innovative ideas into reality through clean, scalable
                  code.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
                <div className="text-sm font-semibold text-blue-800">Years of Study</div>
                <div className="text-xs text-blue-600 mt-1">Computer Science</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
                <div className="text-sm font-semibold text-green-800">Years Experience</div>
                <div className="text-xs text-green-600 mt-1">Professional Work</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm font-semibold text-purple-800">Projects Built</div>
                <div className="text-xs text-purple-600 mt-1">Mobile & Web Apps</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm font-semibold text-orange-800">Technologies</div>
                <div className="text-xs text-orange-600 mt-1">Mastered</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills and interests */}
          <div className="space-y-8">
            {/* What I Do */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                What I Do
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📱",
                    title: "Mobile Development",
                    description: "Building cross-platform mobile apps with React Native",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: "🌐",
                    title: "Web Development",
                    description: "Creating responsive web applications with modern frameworks",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: "⚙️",
                    title: "Backend Development",
                    description: "Developing robust APIs and server-side applications",
                    color: "from-purple-500 to-violet-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                Beyond Code
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Problem Solving", icon: "🧩" },
                  { name: "Learning", icon: "📚" },
                  { name: "Collaboration", icon: "🤝" },
                  { name: "Open Source", icon: "🌟" },
                  { name: "Clean Code", icon: "✨" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{interest.icon}</span>
                    <span className="text-sm font-medium text-indigo-700 group-hover:text-indigo-800">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
