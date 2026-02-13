import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Users, Trophy, TrendingUp } from 'lucide-react';

interface FacultyResearch {
  id: number;
  name: string;
  designation: string;
  image: string;
  specialization: string[];
  publications: number;
  patents: number;
  projects: number;
  researchAreas: string;
  recentWork: string;
}

const facultyResearch: FacultyResearch[] = [
  {
    id: 1,
    name: "Dr. S. Ramesh",
    designation: "Professor & HOD",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
    specialization: ["Machine Learning", "Deep Learning", "Computer Vision"],
    publications: 45,
    patents: 3,
    projects: 12,
    researchAreas: "AI/ML, Computer Vision, Natural Language Processing",
    recentWork: "Published research on 'Deep Learning for Medical Image Analysis' in IEEE Transactions"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
    specialization: ["Cybersecurity", "Blockchain", "Cryptography"],
    publications: 38,
    patents: 2,
    projects: 8,
    researchAreas: "Network Security, Blockchain Technology, IoT Security",
    recentWork: "Leading a government-funded project on 'Blockchain for Healthcare Data Security'"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    designation: "Associate Professor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
    specialization: ["Cloud Computing", "Big Data", "Distributed Systems"],
    publications: 32,
    patents: 1,
    projects: 10,
    researchAreas: "Cloud Architecture, Data Analytics, Scalable Systems",
    recentWork: "Received Best Paper Award at International Conference on Cloud Computing 2024"
  }
];

const researchStats = [
  { icon: BookOpen, value: "150+", label: "Publications", color: "from-primary-600 to-orange-500" },
  { icon: Award, value: "8", label: "Patents", color: "from-orange-500 to-primary-600" },
  { icon: TrendingUp, value: "₹2.5 Cr", label: "Research Grants", color: "from-primary-500 to-orange-400" },
  { icon: Trophy, value: "15", label: "Awards", color: "from-orange-600 to-primary-500" }
];

const FacultyResearchHighlights: React.FC = () => {
  return (
    <section id="faculty-research" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
          Faculty Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Highlights</span>
        </h2>
        <p className="text-secondary-600 text-lg">
          Our faculty members are actively engaged in cutting-edge research and have made significant contributions to their fields.
        </p>
      </motion.div>

      {/* Research Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {researchStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-500 text-center"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <div className="text-3xl font-black text-secondary-900 mb-2">{stat.value}</div>
            <div className="text-sm font-bold uppercase tracking-wide text-secondary-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Faculty Cards */}
      <div className="space-y-8">
        {facultyResearch.map((faculty, idx) => (
          <motion.div
            key={faculty.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Faculty Image & Basic Info */}
              <div className="text-center md:text-left">
                <div className="relative inline-block">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-40 h-40 rounded-2xl object-cover mx-auto md:mx-0 border-4 border-primary-500/20 group-hover:border-primary-500 transition-all"
                  />
                  {/* Badge for HOD */}
                  {faculty.designation.includes('HOD') && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      HOD
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-secondary-900 mt-4 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-sm font-bold text-primary-600 mb-4">{faculty.designation}</p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-primary-50 rounded-lg p-2">
                    <div className="text-xl font-black text-primary-600">{faculty.publications}</div>
                    <div className="text-xs text-secondary-600">Papers</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-2">
                    <div className="text-xl font-black text-orange-600">{faculty.patents}</div>
                    <div className="text-xs text-secondary-600">Patents</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-2">
                    <div className="text-xl font-black text-primary-600">{faculty.projects}</div>
                    <div className="text-xs text-secondary-600">Projects</div>
                  </div>
                </div>
              </div>

              {/* Research Details */}
              <div className="md:col-span-2">
                {/* Specialization Tags */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-500 mb-2">Specialization</h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-200 rounded-full text-sm font-bold text-primary-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Research Areas */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-500 mb-2">Research Areas</h4>
                  <p className="text-secondary-700 leading-relaxed">{faculty.researchAreas}</p>
                </div>

                {/* Recent Work */}
                <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-xl p-6 text-white">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-600 to-orange-500 rounded-lg flex items-center justify-center">
                      <TrendingUp size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-400 mb-2">Recent Work</h4>
                      <p className="text-sm leading-relaxed text-secondary-300">{faculty.recentWork}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                  >
                    <BookOpen size={16} />
                    View Publications
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white border-2 border-primary-500 text-primary-600 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-primary-50 transition-all"
                  >
                    <ExternalLink size={16} />
                    Profile
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Department Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-br from-primary-50 via-white to-orange-50 rounded-2xl p-8 border border-primary-200"
      >
        <h3 className="text-2xl font-black uppercase tracking-tight text-secondary-900 mb-6 text-center">
          Department Research <span className="text-primary-500">Focus Areas</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Big Data Analytics', 'IoT Systems', 'Blockchain', 'Computer Vision'].map((area, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-primary-200 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-orange-500 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-bold text-secondary-900">{area}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacultyResearchHighlights;
