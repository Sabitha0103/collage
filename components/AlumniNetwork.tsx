import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Award, TrendingUp, Globe, Users, Building2, Star } from 'lucide-react';

interface AlumniSpotlight {
  id: number;
  name: string;
  batch: string;
  position: string;
  company: string;
  location: string;
  image: string;
  achievement: string;
  testimonial: string;
}

const alumniSpotlights: AlumniSpotlight[] = [
  {
    id: 1,
    name: "Vikram Mehta",
    batch: "2018",
    position: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
    achievement: "Led development of Google Maps new features",
    testimonial: "SRIT gave me the foundation to succeed at the highest level in tech."
  },
  {
    id: 2,
    name: "Aditi Sharma",
    batch: "2019",
    position: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300",
    achievement: "Managing Microsoft Azure AI products",
    testimonial: "The holistic education at SRIT prepared me for leadership roles."
  },
  {
    id: 3,
    name: "Rahul Krishnan",
    batch: "2017",
    position: "Founder & CEO",
    company: "TechVentures AI",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300",
    achievement: "Built a $10M AI startup from scratch",
    testimonial: "SRIT's entrepreneurship program helped me turn my vision into reality."
  },
  {
    id: 4,
    name: "Priya Nair",
    batch: "2020",
    position: "Research Scientist",
    company: "Amazon",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300",
    achievement: "Published 5 papers in ML and NLP",
    testimonial: "The research culture at SRIT is what made me pursue a career in research."
  }
];

const companyLocations = [
  { company: "Google", count: 45, location: "USA, India, UK" },
  { company: "Microsoft", count: 38, location: "USA, India" },
  { company: "Amazon", count: 52, location: "USA, UK, India" },
  { company: "TCS", count: 120, location: "India" },
  { company: "Infosys", count: 95, location: "India" },
  { company: "Accenture", count: 68, location: "Worldwide" },
  { company: "Wipro", count: 75, location: "India" },
  { company: "IBM", count: 42, location: "USA, India" }
];

const achievements = [
  {
    icon: Users,
    value: "5000+",
    label: "Alumni Network",
    color: "from-primary-600 to-orange-500"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Countries",
    color: "from-orange-500 to-primary-600"
  },
  {
    icon: Briefcase,
    value: "200+",
    label: "Companies",
    color: "from-primary-500 to-orange-400"
  },
  {
    icon: Award,
    value: "28 LPA",
    label: "Highest Package",
    color: "from-orange-600 to-primary-500"
  }
];

const AlumniNetwork: React.FC = () => {
  const [activeAlumni, setActiveAlumni] = useState(0);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
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
          <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">
            Our Pride
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 font-heading">
            Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Network</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Our alumni are making waves across the globe, leading innovation in top tech companies and startups.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-500 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary-500/50 transition-shadow`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-secondary-900 mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-wide text-secondary-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured Alumni Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black uppercase tracking-tight text-secondary-900 mb-8 text-center">
            Alumni <span className="text-primary-500">Spotlight</span>
          </h3>

          {/* Main Featured Alumni Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Featured Card */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeAlumni}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-80 md:h-full">
                    <img
                      src={alumniSpotlights[activeAlumni].image}
                      alt={alumniSpotlights[activeAlumni].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/40 to-transparent"></div>
                    
                    {/* Batch Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Batch {alumniSpotlights[activeAlumni].batch}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="text-primary-500 fill-primary-500" size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-500">
                        Featured Alumni
                      </span>
                    </div>

                    <h4 className="text-3xl font-black uppercase tracking-tight text-secondary-900 mb-3">
                      {alumniSpotlights[activeAlumni].name}
                    </h4>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-secondary-600">
                        <Briefcase size={16} className="text-primary-500" />
                        <span className="text-sm font-bold">{alumniSpotlights[activeAlumni].position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600">
                        <Building2 size={16} className="text-primary-500" />
                        <span className="text-sm font-bold">{alumniSpotlights[activeAlumni].company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600">
                        <MapPin size={16} className="text-primary-500" />
                        <span className="text-sm">{alumniSpotlights[activeAlumni].location}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary-50 to-orange-50 border-l-4 border-primary-500 p-4 rounded-r-lg mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2">Key Achievement</p>
                      <p className="text-sm font-bold text-secondary-900">{alumniSpotlights[activeAlumni].achievement}</p>
                    </div>

                    <blockquote className="text-sm italic text-secondary-600 border-l-2 border-primary-500 pl-4">
                      "{alumniSpotlights[activeAlumni].testimonial}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Thumbnail Selection */}
            <div className="space-y-4">
              {alumniSpotlights.map((alumni, idx) => (
                <motion.button
                  key={alumni.id}
                  onClick={() => setActiveAlumni(idx)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                    activeAlumni === idx ? 'ring-4 ring-primary-500' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      {activeAlumni === idx && (
                        <div className="absolute inset-0 bg-primary-500/30 rounded-lg"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-secondary-900 truncate">{alumni.name}</h5>
                      <p className="text-xs text-primary-500 font-bold uppercase tracking-wider">{alumni.company}</p>
                      <p className="text-xs text-secondary-500">Batch {alumni.batch}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniNetwork;
