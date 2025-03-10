import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and RESTful APIs'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a full-stack developer with a passion for creating beautiful and functional web applications.
            With over a year of experience in web development, I specialize in building modern, responsive,
            and user-friendly applications using the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}