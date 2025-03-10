import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FinDash - Finance Dashboard',
    description: 'A real-time platform for keeping an eye on the stock prices and latest market news',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=format&fit=crop&q=80&w=800',
    tags: ['Next.js','React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/rrd3110/FinDash',
    demo: 'https://luxury-squirrel-4ef470.netlify.app/'
  },
  {
    title: 'WordWise Dictionary',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['React', 'Next.js', 'REST API', 'Material-UI'],
    github: 'https://github.com/rrd3110/WordWise',
    demo: 'https://sparkling-dolphin-da4c19.netlify.app/'
  },
  {
    title: 'Sign-language Interpreter',
    description: 'An AI-powered tool for translating text/apeech to sign language gestures',
    image: 'https://images.unsplash.com/photo-1514561064005-2bac60d9f7ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['React', 'Django', 'Python', 'PyTorch'],
    // github: 'https://github.com',
    demo: 'https://megsignbank.nic.in/nerie-slr/slr-speech-to-sign/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}