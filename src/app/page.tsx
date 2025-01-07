"use client";

import { useState } from 'react';
import { Github, Mail, Linkedin, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      tags: ["React", "Next.js", "Tailwind"]
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      tags: ["TypeScript", "Node.js"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Your Name</span>
            <div className="space-x-6">
              <button 
                onClick={() => setActiveSection('about')}
                className={`px-3 py-2 rounded-md ${activeSection === 'about' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`px-3 py-2 rounded-md ${activeSection === 'projects' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`px-3 py-2 rounded-md ${activeSection === 'contact' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600">
                Hello! I&apos;m a [your role] passionate about building web applications.
                I specialize in [your specialties] and love working with modern technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'Node.js', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail size={20} />
                your.email@example.com
              </a>
              <a href="https://github.com/yourusername" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github size={20} />
                GitHub Profile
              </a>
              <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
              <a href="/resume.pdf" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <FileText size={20} />
                Resume
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;