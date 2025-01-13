"use client";

const HomePage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600">
            Hello! I&apos;m a [your role] passionate about building web
            applications. I specialize in [your specialties] and love working with
            modern technologies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Next.js", "Node.js", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;