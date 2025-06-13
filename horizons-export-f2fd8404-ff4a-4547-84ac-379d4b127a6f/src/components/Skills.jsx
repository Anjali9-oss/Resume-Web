import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "C", level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: [
        { name: "React.js", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Three.js", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      icon: Database,
      title: "Databases & Backend",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Supabase", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "OOP", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "System Design", level: 75 }
      ]
    }
  ];

  const technologies = [
    "React.js", "Three.js", "React Native", "Expo", "JavaScript", "C++", 
    "Java", "Python", "MySQL", "Git", "GitHub", "VS Code", "Supabase",
    "Machine Learning", "LLMs", "Data Structures", "Algorithms", "OOP"
  ];

  return (
    <section id="skills" className="section-padding section-reveal bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming languages, frameworks, and cutting-edge technologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 skill-card"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-blue-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Frontend</div>
            <p className="text-gray-400">Modern UI/UX with React, Three.js, and responsive design</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Backend</div>
            <p className="text-gray-400">Server-side development with databases and APIs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Mobile</div>
            <p className="text-gray-400">Cross-platform apps with React Native and Expo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;