
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "National Institute Of Technology Durgapur",
      degree: "BTech in Electronics And Communication Engineering",
      duration: "Aug 2023 – May 2027",
      gpa: "8.53/10.0",
      location: "Durgapur, West Bengal",
      description: "Pursuing comprehensive education in electronics, communication systems, and software development. Strong focus on practical applications and innovative project work.",
      highlights: [
        "Strong academic performance with 8.53 GPA",
        "Active participation in technical projects",
        "Focus on electronics and software integration",
        "Research in emerging technologies"
      ]
    },
    {
      institution: "Shree Jain Vidyalaya",
      degree: "Higher Secondary Education",
      duration: "Jan 2021 – April 2022",
      gpa: "85%",
      location: "India",
      description: "Completed higher secondary education with excellent academic performance, building a strong foundation in science and mathematics.",
      highlights: [
        "Achieved 85% in board examinations",
        "Strong foundation in Physics and Mathematics",
        "Active participation in science competitions",
        "Leadership roles in academic activities"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintaining 8.53 GPA at NIT Durgapur",
      icon: Award
    },
    {
      title: "Project Innovation",
      description: "Developed multiple cutting-edge projects",
      icon: GraduationCap
    },
    {
      title: "Technical Leadership",
      description: "Leading technical initiatives and collaborations",
      icon: Award
    }
  ];

  return (
    <section id="education" className="section-padding section-reveal bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic journey focused on excellence, innovation, and continuous learning
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 timeline-line"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 timeline-dot rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                          <GraduationCap size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                          <p className="text-blue-400 font-semibold">{edu.degree}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">{edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            Academic Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <achievement.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">2027</div>
                <div className="text-gray-400">Expected Graduation</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">8.53</div>
                <div className="text-gray-400">Current GPA</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">4</div>
                <div className="text-gray-400">Years Program</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">ECE</div>
                <div className="text-gray-400">Specialization</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
