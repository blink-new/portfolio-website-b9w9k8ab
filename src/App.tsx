
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Project Two',
    description: 'Mobile-first responsive web application',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600',
    tech: ['React Native', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  },
];

const skills = [
  { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
  { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD'] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-gray-900 to-gray-900"/>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 mb-8">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
          <div className="flex gap-4 justify-center">
            <a href="#" className="p-2 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.liveLink} className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                      GitHub <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}