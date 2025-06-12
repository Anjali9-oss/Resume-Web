import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, BookOpen } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      role: "Teaching Assistant",
      organization: "BMEP — NIT",
      type: "Position of Responsibility",
      description: "Contributing to society by assisting in the education of underprivileged children, focusing on basic literacy and academic support through a student-led NGO.",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="section-padding section-reveal bg-gradient-to-t from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Responsibility
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Applying skills in real-world scenarios and contributing to the community.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-3xl w-full">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl">
                    <exp.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-blue-400 font-semibold mb-1">{exp.type}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-300 font-medium mb-4">{exp.organization}</p>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;