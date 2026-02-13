import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Award, Github, ExternalLink, Users, Calendar, Tag } from 'lucide-react';

interface StudentProject {
  id: number;
  title: string;
  description: string;
  category: 'AI/ML' | 'Web' | 'Mobile' | 'IoT' | 'Blockchain' | 'Other';
  students: string[];
  year: string;
  image: string;
  technologies: string[];
  awards?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const studentProjects: StudentProject[] = [
  {
    id: 1,
    title: "Smart Health Monitoring System",
    description: "AI-powered wearable device that monitors vital signs and predicts potential health issues using machine learning algorithms.",
    category: "AI/ML",
    students: ["Amit Patel", "Sneha Reddy"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    technologies: ["Python", "TensorFlow", "IoT", "React"],
    awards: "Best Project Award - State Level Tech Fest 2024",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Blockchain-based Voting System",
    description: "Secure and transparent voting platform using blockchain technology to ensure tamper-proof elections.",
    category: "Blockchain",
    students: ["Rajesh Kumar", "Priya Sharma"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
    awards: "Runner-up - National Blockchain Hackathon",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "AI-Powered Study Assistant",
    description: "Mobile app that uses NLP and ML to create personalized study plans and answer student queries using GPT models.",
    category: "Mobile",
    students: ["Ananya Gupta", "Karan Singh", "Meera Nair"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    technologies: ["Flutter", "Python", "OpenAI", "Firebase"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Smart Agriculture IoT System",
    description: "IoT-based solution for monitoring soil conditions, weather, and automating irrigation using sensors and ML predictions.",
    category: "IoT",
    students: ["Vikram Reddy", "Lakshmi Iyer"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800",
    technologies: ["Arduino", "Python", "AWS IoT", "Machine Learning"],
    awards: "Best Innovation Award - Smart India Hackathon",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "E-Commerce Platform with AR",
    description: "Full-stack e-commerce platform with augmented reality features for virtual product try-ons.",
    category: "Web",
    students: ["Rohit Sharma", "Divya Patel"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    technologies: ["React", "Node.js", "AR.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Disaster Management AI System",
    description: "Real-time disaster prediction and management system using satellite imagery and deep learning.",
    category: "AI/ML",
    students: ["Arjun Reddy", "Pooja Kumar", "Sanjay Mehta"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    technologies: ["Python", "TensorFlow", "Satellite API", "React"],
    awards: "Winner - National Disaster Management Hackathon",
    githubUrl: "#"
  }
];

const StudentProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'IoT', 'Blockchain', 'Other'];

  const filteredProjects = selectedCategory === 'All'
    ? studentProjects
    : studentProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="student-projects" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
          Student Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Showcase</span>
        </h2>
        <p className="text-secondary-600 text-lg">
          Innovative projects developed by our talented students, showcasing creativity and technical excellence.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12"
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer group"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Award Badge */}
              {project.awards && (
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-500 text-secondary-900 rounded-full p-2">
                    <Award size={16} />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Students */}
              <div className="flex items-center gap-2 mb-3 text-sm">
                <Users size={14} className="text-primary-500" />
                <span className="text-secondary-600">{project.students.join(', ')}</span>
              </div>

              {/* Year */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                <Calendar size={14} className="text-primary-500" />
                <span className="text-secondary-600">{project.year}</span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-secondary-600 rounded-full text-xs font-bold">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-secondary-800 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-secondary-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              {/* Image Header */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-secondary-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-secondary-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary-500" />
                        {selectedProject.year}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-200 rounded-full font-bold text-primary-700">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Students */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-2">Team Members</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.students.map((student, idx) => (
                      <span key={idx} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-bold">
                        {student}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-secondary-700 rounded-lg font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                {selectedProject.awards && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                    <div className="flex items-center gap-3">
                      <Award className="text-yellow-600" size={24} />
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-700 mb-1">Award</h3>
                        <p className="text-secondary-900 font-bold">{selectedProject.awards}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-secondary-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary-800 transition-colors"
                    >
                      <Github size={20} />
                      View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentProjectShowcase;
