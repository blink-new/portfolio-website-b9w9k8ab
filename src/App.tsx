
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Tuesday.so',
    description: 'A powerful project management and collaboration platform',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Node.js', 'Real-time Collaboration', 'Project Management'],
    liveLink: 'https://tuesday.so',
  },
  {
    title: '1Flow.ai',
    description: 'Advanced AI-powered analytics and user engagement platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tech: ['AI/ML', 'Analytics', 'User Engagement', 'Enterprise Solutions'],
    liveLink: 'https://1flow.ai',
  },
];

const skills = [
  { 
    name: 'Leadership', 
    items: ['Product Strategy', 'Team Management', 'Technical Architecture', 'Innovation']
  },
  { 
    name: 'Technical', 
    items: ['Full Stack Development', 'AI/ML', 'System Design', 'Cloud Architecture'] 
  },
  { 
    name: 'Business', 
    items: ['Product Management', 'Growth Strategy', 'Enterprise Solutions', 'Client Relations'] 
  },
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
            Hi, I'm <span className="text-blue-500">Manav Kothari</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 mb-8">
            <TypeAnimation
              sequence={[
                'Tech Entrepreneur',
                2000,
                'Product Innovator',
                2000,
                'Full Stack Engineer',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://www.linkedin.com/in/artem-strekalov-609542234" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:manav@1flow.ai" 
              className="p-2 hover:text-blue-500 transition-colors"
            >
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
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      Visit Website <ExternalLink size={16} />
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expertise</h2>
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
            Interested in discussing innovative solutions, technical challenges, or potential collaborations? Let's talk.
          </p>
          <a
            href="mailto:manav@1flow.ai"
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