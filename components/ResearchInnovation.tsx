import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Microscope, Rocket, Award, Users, TrendingUp, BookOpen, Cpu, FileText } from 'lucide-react';

interface ResearchProject {
  id: number;
  title: string;
  description: string;
  category: 'AI/ML' | 'IoT' | 'Robotics' | 'Blockchain' | 'Cybersecurity';
  status: 'Ongoing' | 'Completed' | 'Published';
  team: string;
  icon: any;
  color: string;
}

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
}

const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "AI-Powered Healthcare Diagnosis System",
    description: "Developing a machine learning model for early disease detection using medical imaging and patient data analysis.",
    category: "AI/ML",
    status: "Ongoing",
    team: "Dr. Kumar & Team",
    icon: Cpu,
    color: "from-primary-600 to-orange-500"
  },
  {
    id: 2,
    title: "Smart Campus IoT Infrastructure",
    description: "Building an integrated IoT system for energy management, security, and campus automation.",
    category: "IoT",
    status: "Ongoing",
    team: "Prof. Sharma & Students",
    icon: Rocket,
    color: "from-orange-500 to-primary-600"
  },
  {
    id: 3,
    title: "Autonomous Navigation Robots",
    description: "Research on autonomous robots for warehouse management and delivery systems using computer vision.",
    category: "Robotics",
    status: "Completed",
    team: "Robotics Lab",
    icon: Microscope,
    color: "from-primary-500 to-orange-400"
  },
  {
    id: 4,
    title: "Blockchain-based Academic Credentials",
    description: "Implementing a secure, tamper-proof system for storing and verifying academic credentials using blockchain.",
    category: "Blockchain",
    status: "Published",
    team: "Dr. Reddy & Team",
    icon: Award,
    color: "from-orange-600 to-primary-500"
  }
];

const publications: Publication[] = [
  {
    id: 1,
    title: "Deep Learning Approaches for Malware Detection in IoT Devices",
    authors: "Dr. Kumar, S. Patel, R. Sharma",
    journal: "IEEE Transactions on Network Security",
    year: 2024
  },
  {
    id: 2,
    title: "Optimizing Energy Consumption in Smart Buildings using ML",
    authors: "Prof. Reddy, A. Singh, M. Khan",
    journal: "International Journal of Green Computing",
    year: 2024
  },
  {
    id: 3,
    title: "Blockchain-based Supply Chain Management System",
    authors: "Dr. Sharma, P. Gupta",
    journal: "ACM Computing Surveys",
    year: 2023
  }
];

const innovations = [
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    value: "4+",
    description: "State-of-the-art labs"
  },
  {
    icon: Users,
    title: "Research Teams",
    value: "12+",
    description: "Active research groups"
  },
  {
    icon: FileText,
    title: "Publications",
    value: "50+",
    description: "In top-tier journals"
  },
  {
    icon: Award,
    title: "Patents",
    value: "8",
    description: "Filed & granted"
  }
];

const ResearchInnovation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'AI/ML', 'IoT', 'Robotics', 'Blockchain', 'Cybersecurity'];

  const filteredProjects = selectedCategory === 'All'
    ? researchProjects
    : researchProjects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
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
            Innovation & Research
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Innovation Hub</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-3xl mx-auto font-inter">
            Pioneering groundbreaking research and fostering innovation across multiple domains to solve real-world challenges.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {innovations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-l-4 border-primary-500 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Glassmorphism effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
                  <item.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-black text-secondary-900 mb-2 font-poppins">{item.value}</div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-secondary-900 mb-1 font-inter">{item.title}</h4>
                <p className="text-xs text-secondary-600 font-inter">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-orange-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Research Projects Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project, idx) => {
            const gradientDirection = idx % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l';
            const iconGradient = idx % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-tr';
            const decorativeGradient = idx % 2 === 0 ? 'bg-gradient-to-bl' : 'bg-gradient-to-br';
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? 2 : -2, scale: 1.02 }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group ${
                  idx === 0 ? 'md:col-span-2 md:row-span-1' : 
                  idx === 2 ? 'md:col-span-1 md:row-span-1 md:mt-12' :
                  idx === 3 ? 'md:col-span-2 md:row-span-1 md:-mt-6' :
                  ''
                }`}
                style={{
                  transformOrigin: 'center center'
                }}
              >
                {/* Gradient top bar with varying directions */}
                <div className={`h-2 ${gradientDirection} ${project.color}`}></div>
                
                <div className={`${idx === 0 ? 'p-10' : 'p-8'}`}>
                  {/* Icon and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-16 h-16 ${iconGradient} ${project.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="text-white" size={32} />
                    </motion.div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-600' :
                      project.status === 'Completed' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className={`${idx === 0 ? 'text-3xl' : 'text-2xl'} font-black text-secondary-900 mb-3 uppercase tracking-tight`}>
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-500">{project.category}</span>
                      <p className="text-sm text-secondary-500 mt-1">{project.team}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
                
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <div className={`w-full h-full ${decorativeGradient} ${project.color} rounded-bl-full`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 rounded-3xl p-12 md:p-16 text-white"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 font-heading">
                Recent Publications
              </h3>
              <p className="text-secondary-400">
                Our faculty and students are regularly publishing in top-tier journals and conferences.
              </p>
            </div>
            <BookOpen className="text-primary-500 animate-float" size={64} />
          </div>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-orange-500 rounded-lg flex items-center justify-center font-black text-white">
                    {pub.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white">{pub.title}</h4>
                    <p className="text-sm text-secondary-400 mb-2">{pub.authors}</p>
                    <p className="text-xs text-primary-400 font-bold uppercase tracking-wider">{pub.journal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              <TrendingUp size={20} />
              View All Publications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInnovation;
