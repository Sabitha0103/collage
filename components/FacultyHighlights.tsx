import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Star, Microscope, GraduationCap } from 'lucide-react';

interface Faculty {
  id: number;
  name: string;
  designation: string;
  department: string;
  image: string;
  specialization: string[];
  publications: number;
  experience: string;
  awards: string[];
}

const facultyMembers: Faculty[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    designation: "Professor & HOD",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
    specialization: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    publications: 45,
    experience: "18+ Years",
    awards: ["Best Faculty Award 2023", "Research Excellence"]
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    department: "Electronics & Comm.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300",
    specialization: ["VLSI Design", "Embedded Systems", "IoT"],
    publications: 32,
    experience: "12+ Years",
    awards: ["Young Scientist Award", "IEEE Best Paper"]
  },
  {
    id: 3,
    name: "Dr. Arun Reddy",
    designation: "Professor",
    department: "Mechanical Engg.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
    specialization: ["Robotics", "CAD/CAM", "Manufacturing"],
    publications: 38,
    experience: "15+ Years",
    awards: ["Innovation in Teaching", "Industry Collaboration"]
  },
  {
    id: 4,
    name: "Dr. Kavitha Nair",
    designation: "Associate Professor",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300",
    specialization: ["Structural Engineering", "Sustainable Construction"],
    publications: 28,
    experience: "10+ Years",
    awards: ["Green Building Expert", "Research Grant Winner"]
  }
];

const stats = [
  { icon: Users, value: "150+", label: "Expert Faculty", color: "from-primary-600 to-orange-500" },
  { icon: GraduationCap, value: "85%", label: "PhD Holders", color: "from-orange-500 to-primary-600" },
  { icon: BookOpen, value: "500+", label: "Publications", color: "from-primary-500 to-orange-400" },
  { icon: Award, value: "50+", label: "Awards & Honors", color: "from-orange-600 to-primary-500" }
];

const FacultyHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

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
            Meet Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Distinguished <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-orange-400">Faculty</span>
          </h2>
          <p className="text-base text-secondary-400 max-w-2xl mx-auto font-inter">
            Learn from industry experts and renowned academicians with extensive research and teaching experience.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-black text-white mb-2 font-poppins">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-secondary-400 font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, idx) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-primary-500/20">
                {/* Faculty Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                      {faculty.experience}
                    </div>
                  </div>

                  {/* Publications Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <BookOpen size={14} className="text-primary-600" />
                    <span className="text-xs font-bold text-secondary-900">{faculty.publications} Papers</span>
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-white mb-1 font-poppins">
                    {faculty.name}
                  </h3>
                  <p className="text-sm font-bold text-primary-400 mb-1 font-inter">
                    {faculty.designation}
                  </p>
                  <p className="text-xs text-secondary-400 mb-4 font-inter">
                    {faculty.department}
                  </p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {faculty.specialization.map((spec, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded text-secondary-300 font-inter"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-start gap-2">
                      <Award size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        {faculty.awards.map((award, i) => (
                          <p key={i} className="text-xs text-secondary-400 font-inter leading-relaxed">
                            • {award}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white text-secondary-900 rounded-xl font-bold uppercase text-sm tracking-wide hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg font-inter">
            View All Faculty Members
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultyHighlights;
