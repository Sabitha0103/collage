import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';

interface CampusSpot {
  id: number;
  title: string;
  description: string;
  image: string;
  facilities: string[];
}

const campusSpots: CampusSpot[] = [
  {
    id: 1,
    title: "Main Campus Gate",
    description: "Welcome to SRIT - Where innovation meets tradition. Our state-of-the-art campus spans across 50 acres of lush greenery.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
    facilities: []
  },
  {
    id: 2,
    title: "Central Library",
    description: "A modern library with over 50,000 books, digital resources, and quiet study spaces equipped with the latest technology.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200",
    facilities: ["Reading Rooms", "Digital Library", "Research Center"]
  },
  {
    id: 3,
    title: "Advanced Computer Labs",
    description: "High-performance computing labs with latest software and hardware for AI, ML, and software development.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
    facilities: ["AI/ML Lab", "Cloud Computing", "Cybersecurity Lab"]
  },
  {
    id: 4,
    title: "Innovation & Research Center",
    description: "A dedicated space for research, innovation, and entrepreneurship with modern equipment and mentorship.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200",
    facilities: ["Research Labs", "Incubation Center", "Prototyping Lab"]
  },
  {
    id: 5,
    title: "Sports Complex",
    description: "World-class sports facilities including indoor and outdoor courts for cricket, football, basketball, and more.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    facilities: ["Cricket Ground", "Basketball Court", "Gym", "Indoor Arena"]
  },
  {
    id: 6,
    title: "Modern Auditorium",
    description: "A 1000-seater auditorium with advanced audio-visual systems for conferences, seminars, and cultural events.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    facilities: ["HD Projection", "Sound System", "Green Room"]
  }
];

const VirtualCampusTour: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState<CampusSpot | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusSpots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusSpots.length) % campusSpots.length);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">
            Explore Our Campus
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 font-heading">
            Virtual Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Tour</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Take a virtual journey through our state-of-the-art facilities and discover what makes SRIT special.
          </p>
        </motion.div>

        {/* Main Tour Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Image */}
                <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                  <img
                    src={campusSpots[currentSlide].image}
                    alt={campusSpots[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Orange gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="text-primary-500" size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
                          Location {currentSlide + 1} of {campusSpots.length}
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        {campusSpots[currentSlide].title}
                      </h3>
                      <p className="text-lg text-secondary-300 mb-6 max-w-3xl">
                        {campusSpots[currentSlide].description}
                      </p>
                      
                      {/* Facilities tags */}
                      <div className="flex flex-wrap gap-2">
                        {campusSpots[currentSlide].facilities.map((facility, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary-500/80 transition-colors"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setSelectedSpot(campusSpots[currentSlide])}
                        className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                      >
                        View Details
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg group"
            >
              <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg group"
            >
              <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpot(null)}
            className="fixed inset-0 bg-secondary-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative">
                <img
                  src={selectedSpot.image}
                  alt={selectedSpot.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedSpot(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-secondary-900">
                  {selectedSpot.title}
                </h3>
                <p className="text-lg text-secondary-600 mb-6">
                  {selectedSpot.description}
                </p>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-3">
                    Available Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedSpot.facilities.map((facility, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border-l-4 border-primary-500"
                      >
                        <span className="text-sm font-bold text-secondary-900">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VirtualCampusTour;
