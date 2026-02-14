import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  image: string;
  rating: number;
  videoUrl?: string;
  achievement?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Rao",
    role: "Software Engineer",
    company: "Google",
    text: "SRIT provided me with the technical foundation and the soft skills to excel in a global tech environment. The faculty's dedication and the practical learning approach made all the difference.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    rating: 5,
    achievement: "24 LPA Package"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Research Scholar",
    company: "IIT Bombay",
    text: "The research opportunities at SRIT are unmatched. I published two papers before even graduating! The support from professors and the well-equipped labs were instrumental in my success.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
    rating: 5,
    achievement: "2 Research Papers Published"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Entrepreneur",
    company: "TechStart Solutions",
    text: "The incubation center at SRIT helped me turn my idea into a successful startup. The mentorship, resources, and entrepreneurial ecosystem were invaluable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
    rating: 5,
    achievement: "Founded Successful Startup"
  },
  {
    id: 4,
    name: "Ananya Reddy",
    role: "Data Scientist",
    company: "Amazon",
    text: "The curriculum at SRIT is perfectly aligned with industry needs. The hands-on projects and internship opportunities prepared me exceptionally well for my career.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300",
    rating: 5,
    achievement: "Microsoft & Amazon Offers"
  },
  {
    id: 5,
    name: "Dr. K. Sharma",
    role: "Professor & Mentor",
    company: "SRIT",
    text: "Witnessing the growth of students from novices to innovators is the best part of SRIT culture. The institution's focus on holistic development creates future leaders.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
    rating: 5,
    achievement: "20+ Years Teaching Excellence"
  },
  {
    id: 6,
    name: "Sneha Patel",
    role: "AI Engineer",
    company: "Microsoft",
    text: "SRIT's AI and ML labs are world-class. The exposure to cutting-edge technology and the opportunity to work on real-world projects gave me a competitive edge in the industry.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300",
    rating: 5,
    achievement: "AI Innovation Award"
  }
];

const EnhancedTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote size={48} className="text-primary-500 mx-auto mb-8 opacity-50 animate-float" />
          <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">
            Success Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter font-heading mb-6">
            Student & Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-orange-400">Testimonials</span>
          </h2>
          <p className="text-secondary-400 max-w-2xl mx-auto">
            Hear from our students and alumni who have achieved remarkable success in their careers.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute inset-0"
              >
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Image Section */}
                    <div className="md:col-span-1">
                      <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden ring-4 ring-primary-500/50">
                          <img
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            className="w-full h-full object-cover"
                          />
                          {/* Orange overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/40 to-transparent"></div>
                        </div>
                        
                        {/* Achievement Badge */}
                        {testimonials[activeIndex].achievement && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                          >
                            {testimonials[activeIndex].achievement}
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-primary-500 text-primary-500" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-6 text-white">
                        "{testimonials[activeIndex].text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="border-t border-white/20 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-black uppercase tracking-wide text-white">
                              {testimonials[activeIndex].name}
                            </h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary-400">
                              {testimonials[activeIndex].role}
                              {testimonials[activeIndex].company && (
                                <> • {testimonials[activeIndex].company}</>
                              )}
                            </p>
                          </div>
                          
                          {/* Video Play Button (placeholder) */}
                          {testimonials[activeIndex].videoUrl && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-orange-500 flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                            >
                              <Play size={20} fill="white" />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg group z-20"
            >
              <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg group z-20"
            >
              <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'bg-gradient-to-r from-primary-600 to-orange-400 w-12 h-3'
                    : 'bg-white/30 w-3 h-3 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
