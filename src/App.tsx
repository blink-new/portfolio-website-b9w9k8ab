
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink, Quote } from 'lucide-react';

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

const testimonials = [
  {
    text: "Manav's technical expertise and leadership transformed our development process. His innovative approach to problem-solving and ability to execute complex projects is outstanding.",
    author: "Sarah Chen",
    position: "CTO, TechVentures",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "Working with Manav was a game-changer for our startup. His deep understanding of both technical architecture and business strategy helped us scale efficiently.",
    author: "Michael Rodriguez",
    position: "Founder, InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "Manav brings a rare combination of technical depth and strategic thinking. His contributions have been instrumental in our product's success.",
    author: "Emily Zhang",
    position: "Product Director, ScaleUp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

const FloatingElement = ({ delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="animate-float"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-[#030014] to-[#030014]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FloatingElement>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Manav Kothari</span>
            </h1>
          </FloatingElement>
          
          <FloatingElement delay={0.2}>
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
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="flex gap-6 justify-center">
              <motion.a 
                href="https://www.linkedin.com/in/artem-strekalov-609542234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:scale-110 transition-transform"
                whileHover={{ y: -2 }}
              >
                <Linkedin size={24} className="text-blue-400" />
              </motion.a>
              <motion.a 
                href="mailto:manav@1flow.ai"
                className="p-3 glass-card rounded-full hover:scale-110 transition-transform"
                whileHover={{ y: -2 }}
              >
                <Mail size={24} className="text-blue-400" />
              </motion.a>
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl overflow-hidden hover-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    Visit Website <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"/>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover-card"
              >
                <Quote className="text-blue-500/20 mb-4" size={40} />
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                  <div>
                    <h4 className="font-semibold gradient-text">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div 
                key={index} 
                className="glass-card p-6 rounded-xl hover-card"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 gradient-text">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Let's Connect</h2>
          <p className="text-gray-400 mb-8">
            Interested in discussing innovative solutions, technical challenges, or potential collaborations? Let's talk.
          </p>
          <motion.a
            href="mailto:manav@1flow.ai"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform"
            whileHover={{ y: -2 }}
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}