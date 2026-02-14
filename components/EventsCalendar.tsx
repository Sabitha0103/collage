import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  description: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Annual Tech Fest 2024",
    date: "Mar 15, 2024",
    time: "10:00 AM",
    location: "Main Auditorium",
    category: "Technical",
    attendees: 500,
    description: "Join us for the biggest tech event of the year with hackathons, workshops, and guest speakers.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500"
  },
  {
    id: 2,
    title: "AI & ML Workshop",
    date: "Mar 20, 2024",
    time: "2:00 PM",
    location: "Computer Lab A",
    category: "Workshop",
    attendees: 50,
    description: "Hands-on workshop on machine learning fundamentals and practical applications.",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=500"
  },
  {
    id: 3,
    title: "Industry Expert Talk",
    date: "Mar 25, 2024",
    time: "3:00 PM",
    location: "Seminar Hall",
    category: "Seminar",
    attendees: 200,
    description: "Distinguished professionals from top tech companies sharing industry insights.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=500"
  },
  {
    id: 4,
    title: "Cultural Night",
    date: "Apr 5, 2024",
    time: "6:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    attendees: 800,
    description: "A vibrant evening of music, dance, and cultural performances by students.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=500"
  },
  {
    id: 5,
    title: "Sports Meet 2024",
    date: "Apr 10, 2024",
    time: "8:00 AM",
    location: "Sports Complex",
    category: "Sports",
    attendees: 600,
    description: "Inter-department sports competition with various athletic events.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500"
  },
  {
    id: 6,
    title: "Research Symposium",
    date: "Apr 15, 2024",
    time: "10:00 AM",
    location: "Conference Center",
    category: "Research",
    attendees: 150,
    description: "Platform for students and faculty to present their research work and innovations.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=500"
  }
];

const EventsCalendar: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-50/20 to-orange-50/10 relative overflow-hidden">
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
            What's Happening
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Events</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto font-inter">
            Join us for exciting events, workshops, and activities throughout the academic year.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-primary-600 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary-500 text-white rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-bold uppercase tracking-wider">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="text-2xl font-black">
                      {event.date.split(' ')[1].replace(',', '')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-secondary-900 mb-3 font-poppins group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-sm text-secondary-600 mb-4 font-inter line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-secondary-600">
                    <Clock size={14} className="text-primary-500" />
                    <span className="font-inter">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary-600">
                    <MapPin size={14} className="text-primary-500" />
                    <span className="font-inter">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary-600">
                    <Users size={14} className="text-primary-500" />
                    <span className="font-inter">{event.attendees} Expected</span>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full py-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 font-inter">
                  Register <ArrowRight size={16} />
                </button>
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
          <button className="px-8 py-4 bg-secondary-900 text-white rounded-xl font-bold uppercase text-sm tracking-wide hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg font-inter">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsCalendar;
