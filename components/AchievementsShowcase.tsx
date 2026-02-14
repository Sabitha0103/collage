import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Target, Zap } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  category: string;
  icon: any;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "NAAC A+ Accreditation",
    description: "Achieved highest grade in National Assessment and Accreditation Council evaluation",
    year: "2024",
    category: "Accreditation",
    icon: Award,
    color: "from-primary-600 to-orange-500"
  },
  {
    id: 2,
    title: "State Rank 4th",
    description: "Ranked 4th among all engineering colleges in the state for academic excellence",
    year: "2024",
    category: "Ranking",
    icon: Trophy,
    color: "from-orange-500 to-primary-600"
  },
  {
    id: 3,
    title: "Best Innovation Award",
    description: "Recognized for outstanding innovation in research and development by IEEE",
    year: "2023",
    category: "Research",
    icon: Star,
    color: "from-primary-500 to-orange-400"
  },
  {
    id: 4,
    title: "98% Placement Rate",
    description: "Achieved record placement rate with students joining top global companies",
    year: "2024",
    category: "Placements",
    icon: Target,
    color: "from-orange-600 to-primary-500"
  },
  {
    id: 5,
    title: "NBA Accreditation",
    description: "All engineering programs accredited by National Board of Accreditation",
    year: "2023",
    category: "Accreditation",
    icon: Medal,
    color: "from-primary-600 to-orange-500"
  },
  {
    id: 6,
    title: "Smart Campus Initiative",
    description: "First college in region to implement complete IoT-based smart campus",
    year: "2023",
    category: "Infrastructure",
    icon: Zap,
    color: "from-orange-500 to-primary-600"
  }
];

const AchievementsShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-orange-50/20 to-primary-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block font-inter">
            Our Success Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Achievements</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto font-inter">
            Celebrating milestones and recognitions that reflect our commitment to excellence in education and innovation.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full">
                    {achievement.year}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-500/50 transition-all`}
                >
                  <achievement.icon className="text-white" size={32} />
                </motion.div>

                {/* Category */}
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-3 block font-inter">
                  {achievement.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-black text-secondary-900 mb-3 font-poppins group-hover:text-primary-600 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary-600 font-inter leading-relaxed">
                  {achievement.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${achievement.color} mt-6 rounded-full`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 via-primary-500 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2 font-poppins">50+</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-90 font-inter">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 font-poppins">15+</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-90 font-inter">Years Legacy</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 font-poppins">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-90 font-inter">Accredited</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 font-poppins">#4</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-90 font-inter">State Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;
