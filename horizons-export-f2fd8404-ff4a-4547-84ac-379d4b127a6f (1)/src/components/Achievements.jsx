import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Code } from 'lucide-react';

const Achievements = () => {
  const achievementsData = [
    {
      platform: "LeetCode",
      icon: Trophy,
      details: [
        { label: "Max Rating", value: "1685" },
        { label: "Problems Solved", value: "280+" }
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      platform: "CodeChef",
      icon: Star,
      details: [
        { label: "Rating", value: "Two-Star (2★)" }
      ],
      color: "from-blue-500 to-sky-500"
    },
    {
      platform: "Codeforces",
      icon: Code,
      details: [
        { label: "Rating", value: "1004" }
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="achievements" className="section-padding section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Coding Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Milestones and ratings on competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.platform}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="glass-effect rounded-2xl p-8 text-center flex flex-col justify-between hover:neon-glow transition-all duration-300"
            >
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl mb-6 shadow-lg`}>
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {achievement.platform}
                </h3>
              </div>
              <div className="space-y-4">
                {achievement.details.map(detail => (
                  <div key={detail.label} className="bg-white/5 rounded-lg px-4 py-3">
                    <p className="text-sm text-gray-400">{detail.label}</p>
                    <p className="text-xl font-semibold text-white">{detail.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;