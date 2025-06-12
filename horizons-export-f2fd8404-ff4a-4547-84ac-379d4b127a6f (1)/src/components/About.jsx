import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, React Native, and backend development"
    },
    {
      icon: Cpu,
      title: "Electronics Engineering",
      description: "Strong foundation in ECE with focus on embedded systems and hardware-software integration"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creating cutting-edge solutions that bridge technology gaps"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical skills with experience in data structures, algorithms, and system design"
    }
  ];

  return (
    <section id="about" className="section-padding section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Electronics and Communication Engineering student at NIT Durgapur 
            with a strong foundation in both hardware and software development. My journey combines 
            technical excellence with creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently pursuing BTech in Electronics and Communication Engineering at NIT Durgapur 
                with a GPA of 8.53/10.0. I'm passionate about the intersection of hardware and software, 
                constantly exploring new technologies and building innovative projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From creating 3D interactive portfolios to building full-stack applications and 
                developing offline AI chatbots, I love pushing the boundaries of what's possible 
                with technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">What Drives Me</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">8.53</div>
                <div className="text-gray-400">Current GPA</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;