"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-6xl mx-auto">
            {/* A dedicated Computer Science graduate with expertise in mobile and web development, passionate about creating efficient and
            user-friendly applications. */}
            I'm a results-driven Computer Science graduate specializing in mobile and web development. With expertise in React Native,
            React.js, Node.js, and Express.js, I build high-performance applications that prioritize clean code and great user experience.
            I’ve developed scalable apps and dynamic web platforms, focusing on intuitive UI/UX, efficient backend logic, and seamless
            integration with tools like Firebase and MongoDB. Passionate about learning and problem-solving, I aim to create impactful
            solutions that serve both users and business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
