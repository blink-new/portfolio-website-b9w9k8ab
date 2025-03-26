
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink, Quote } from 'lucide-react';

const projects = [
  {
    title: 'Tuesday.so',
    description: 'A powerful project management and collaboration platform',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Node.js', 'Real-time Collaboration', 'Project Management'],
    liveLink: 'https://tuesday.so',
  },
  {
    title: '1Flow.ai',
    description: 'Advanced AI-powered analytics and user engagement platform',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=600',
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
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 aesthetic-gradient">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FloatingElement>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d2d2d]">
              Hi, I'm <span className="text-gradient">Manav Kothari</span>
            </h1>
          </FloatingElement>
          
          <FloatingElement delay={0.2}>
            <div className="text-xl md:text-2xl text-[#666666] mb-8">
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
                className="p-3 bg-white rounded-full hover-lift card-shadow"
                whileHover={{ y: -2 }}
              >
                <Linkedin size={24} className="text-[#94618E]" />
              </motion.a>
              <motion.a 
                href="mailto:manav@1flow.ai"
                className="p-3 bg-white rounded-full hover-lift card-shadow"
                whileHover={{ y: -2 }}
              >
                <Mail size={24} className="text-[#94618E]" />
              </motion.a>
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover-lift card-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-[#666666] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#f6e6cb] text-[#94618E] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#94618E] hover:text-[#49B6FF]"
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
      <section className="py-20 px-4 aesthetic-gradient">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl hover-lift card-shadow"
              >
                <Quote className="text-[#94618E] mb-4" size={40} />
                <p className="text-[#666666] mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#f6e6cb]"
                  />
                  <div>
                    <h4 className="font-semibold text-gradient">{testimonial.author}</h4>
                    <p className="text-sm text-[#666666]">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl hover-lift card-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#f6e6cb] rounded-full text-sm text-[#94618E]">
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
      <section className="py-20 px-4 aesthetic-gradient">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Let's Connect</h2>
          <p className="text-[#666666] mb-8">
            Interested in discussing innovative solutions, technical challenges, or potential collaborations? Let's talk.
          </p>
          <motion.a
            href="mailto:manav@1flow.ai"
            className="inline-flex items-center gap-2 bg-white text-[#94618E] px-8 py-4 rounded-full hover-lift card-shadow"
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