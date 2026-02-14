import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, BookOpen, Cpu, Microscope, Dumbbell, Home, Utensils, Bus } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  capacity?: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "Central Library",
    description: "Modern library with vast collection of books, journals, and digital resources",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600",
    icon: BookOpen,
    features: ["50,000+ Books", "Digital Library", "Reading Rooms", "24/7 Access"],
    capacity: "500 Students"
  },
  {
    id: 2,
    name: "Advanced Laboratories",
    description: "State-of-the-art labs equipped with latest technology and equipment",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600",
    icon: Microscope,
    features: ["AI/ML Lab", "Robotics Lab", "IoT Lab", "Research Facilities"],
    capacity: "30+ Labs"
  },
  {
    id: 3,
    name: "Smart Classrooms",
    description: "Technology-enabled classrooms with interactive learning tools",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    icon: Cpu,
    features: ["Smart Boards", "Audio-Visual", "AC Rooms", "WiFi Enabled"],
    capacity: "100+ Rooms"
  },
  {
    id: 4,
    name: "Sports Complex",
    description: "Comprehensive sports facilities for various indoor and outdoor games",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
    icon: Dumbbell,
    features: ["Cricket Ground", "Basketball Court", "Gym", "Indoor Games"],
    capacity: "10 Acre Complex"
  },
  {
    id: 5,
    name: "Hostel Facilities",
    description: "Comfortable accommodation with modern amenities for students",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600",
    icon: Home,
    features: ["Boys & Girls Hostel", "WiFi", "Security", "Recreation Room"],
    capacity: "1000+ Beds"
  },
  {
    id: 6,
    name: "Cafeteria & Dining",
    description: "Hygienic dining facilities serving nutritious meals",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=600",
    icon: Utensils,
    features: ["Multi-Cuisine", "Hygienic Food", "AC Dining", "Affordable Rates"],
    capacity: "500 Seating"
  },
  {
    id: 7,
    name: "Transport Facility",
    description: "Safe and convenient transportation covering all major routes",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
    icon: Bus,
    features: ["GPS Tracked", "40+ Routes", "Safe Travel", "Well Maintained"],
    capacity: "50+ Buses"
  },
  {
    id: 8,
    name: "Auditorium",
    description: "Modern auditorium for events, seminars, and cultural activities",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600",
    icon: Building2,
    features: ["AC Hall", "Sound System", "LED Screen", "Stage Lighting"],
    capacity: "1000 Seating"
  }
];

const CampusFacilities: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

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
            World-Class Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Facilities</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto font-inter">
            Experience a modern campus equipped with state-of-the-art facilities designed to support your academic and personal growth.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedFacility(facility.id)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Facility Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <facility.icon className="text-primary-600" size={24} />
                    </div>
                  </div>

                  {/* Capacity Badge */}
                  {facility.capacity && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                        {facility.capacity}
                      </span>
                    </div>
                  )}
                </div>

                {/* Facility Info */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-secondary-900 mb-2 font-poppins group-hover:text-primary-600 transition-colors">
                    {facility.name}
                  </h3>
                  
                  <p className="text-sm text-secondary-600 mb-4 font-inter line-clamp-2">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {facility.features.slice(0, 3).map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-primary-50 text-primary-600 rounded font-inter font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-primary-600 mb-2 font-poppins">50</div>
              <div className="text-sm font-bold uppercase tracking-wider text-secondary-600 font-inter">Acre Campus</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary-600 mb-2 font-poppins">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider text-secondary-600 font-inter">WiFi Campus</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary-600 mb-2 font-poppins">24/7</div>
              <div className="text-sm font-bold uppercase tracking-wider text-secondary-600 font-inter">Security</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Facility Details (Optional Enhancement) */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFacility(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              {facilities.filter(f => f.id === selectedFacility).map(facility => (
                <div key={facility.id}>
                  <div className="relative h-64">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                      onClick={() => setSelectedFacility(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-900 hover:bg-gray-100 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-secondary-900 mb-3 font-poppins">{facility.name}</h3>
                    <p className="text-base text-secondary-600 mb-6 font-inter">{facility.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {facility.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-secondary-700 font-inter">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusFacilities;
