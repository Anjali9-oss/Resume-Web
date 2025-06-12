import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Bot, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const projects = [
    {
      title: "3D Developer Portfolio",
      description: "An interactive 3D portfolio showcasing skills and projects with modern design and smooth performance using Three.js and React.",
      icon: Globe,
      technologies: ["React.js", "Three.js", "GSAP", "Framer Motion"],
      liveUrl: "#"
    },
    {
      title: "Uber Clone Full-Stack App",
      description: "A comprehensive full-stack Uber-like application with real-time ride requests and location tracking using React Native and Supabase.",
      icon: Smartphone,
      technologies: ["React Native", "Expo", "Supabase", "PostgreSQL"],
      liveUrl: "#"
    },
    {
      title: "Offline AI Chatbot",
      description: "An innovative AI chatbot that operates entirely offline using local machine learning and large language models.",
      icon: Bot,
      technologies: ["Python", "Machine Learning", "LLMs", "NLP"],
      liveUrl: "#"
    },
    {
      title: "Restaurant Order Analysis – SQL Project",
      description: "Analyzed customer and order data using SQL, applying joins, filters, and aggregations on relational databases to extract business insights.",
      icon: Database,
      technologies: ["MySQL", "SQL", "Data Analysis"],
      liveUrl: "#"
    }
  ];

  const handleViewProject = (url, title) => {
    if (url && url !== "#") {
      window.open(url, '_blank');
    } else {
      toast({
        title: `🚧 ${title} - Link not available`,
        description: "You can provide a live demo link for this project in the next prompt! 🚀"
      });
    }
  };

  return (
    <section id="projects" className="section-padding section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="project-card glass-effect rounded-2xl p-8 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 flex-shrink-0">
                    <project.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-3 py-1 rounded-full text-sm font-medium text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => handleViewProject(project.liveUrl, project.title)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;