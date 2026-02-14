import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Award, Bell, Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "SRIT Secures Top Rank in State Engineering Excellence Survey",
    excerpt: "Our institution has been recognized as one of the top engineering colleges in the state, ranking 4th overall.",
    date: "Feb 10, 2024",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500",
    featured: true
  },
  {
    id: 2,
    title: "New AI & Robotics Center Inaugurated",
    excerpt: "State-of-the-art facility with advanced equipment for cutting-edge research in artificial intelligence and robotics.",
    date: "Feb 8, 2024",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500",
    featured: false
  },
  {
    id: 3,
    title: "Students Win National Hackathon Championship",
    excerpt: "Team SRIT emerged victorious at the National Level Hackathon with their innovative healthcare solution.",
    date: "Feb 5, 2024",
    category: "Student Achievement",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=500",
    featured: false
  },
  {
    id: 4,
    title: "International Collaboration with MIT Announced",
    excerpt: "SRIT signs MoU with Massachusetts Institute of Technology for research collaboration and student exchange programs.",
    date: "Feb 1, 2024",
    category: "Collaboration",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500",
    featured: false
  },
  {
    id: 5,
    title: "Record Placement: 98% Students Placed This Year",
    excerpt: "Highest placement rate achieved with top companies like Google, Microsoft, and Amazon recruiting from campus.",
    date: "Jan 28, 2024",
    category: "Placements",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500",
    featured: false
  }
];

const announcements = [
  { icon: Bell, text: "Applications open for B.Tech 2024-25 batch", date: "New", color: "text-primary-500" },
  { icon: Calendar, text: "Mid-semester examinations from March 10-20", date: "Important", color: "text-orange-500" },
  { icon: Award, text: "Scholarship applications deadline: March 15", date: "Deadline", color: "text-red-500" },
  { icon: TrendingUp, text: "Career counseling sessions every Tuesday & Thursday", date: "Ongoing", color: "text-green-500" }
];

const NewsAnnouncements: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Announcements</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto font-inter">
            Stay informed about the latest happenings, achievements, and important updates from SRIT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Featured Article */}
              {newsItems.filter(item => item.featured).map(item => (
                <div key={item.id} className="mb-8">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 font-poppins">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-3 font-inter">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-300 font-inter">{item.date}</span>
                          <button className="text-sm text-white font-bold uppercase tracking-wide hover:text-primary-400 transition-colors flex items-center gap-2">
                            Read More <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Other News */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.filter(item => !item.featured).map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-primary-600 text-xs font-bold rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-base font-black text-secondary-900 mb-2 font-poppins group-hover:text-primary-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-secondary-600 mb-3 font-inter line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-secondary-500 font-inter">{item.date}</span>
                        <button className="text-xs text-primary-600 font-bold hover:text-orange-500 transition-colors flex items-center gap-1">
                          Read <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Announcements Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <Bell className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-black text-secondary-900 font-poppins">
                    Quick Updates
                  </h3>
                </div>

                <div className="space-y-4">
                  {announcements.map((announcement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className={`${announcement.color} mt-1`}>
                        <announcement.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-secondary-900 mb-1 font-inter group-hover:text-primary-600 transition-colors">
                          {announcement.text}
                        </p>
                        <span className={`text-xs font-bold uppercase ${announcement.color}`}>
                          {announcement.date}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-primary-600 to-orange-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 font-inter">
                  View All Updates
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
