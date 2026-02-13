import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Database, Shield, Globe, MapPin, Phone, Mail, ChevronRight, Award, Users, BookOpen, Quote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from '../components/3d/HeroScene';

// -- DATA --
const notices = [
   "Applications open for B.Tech 2024-25 batch.",
   "SRIT ranks 4th in State Engineering Colleges.",
   "International Conference on AI & Robotics scheduled for Oct 15.",
   "Campus Recruitment Drive: TCS & Infosys hiring starts next week."
];

const recruiters = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "IBM", "Amazon", "Google", "Microsoft", "Oracle", "Cisco", "Tech Mahindra"];

const stats = [
   { label: "Highest Package", value: "24 LPA" },
   { label: "Placement Rate", value: "95%" },
   { label: "Recruiters", value: "150+" },
   { label: "Startups Incubated", value: "12" }
];

const facilities = [
   { title: "Smart Classrooms", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500" },
   { title: "Central Library", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500" },
   { title: "Robotics Lab", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500" },
   { title: "Sports Complex", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500" }
];

const testimonials = [
   { name: "Arjun Rao", role: "Alumni, Google", text: "SRIT provided me with the technical foundation and the soft skills to excel in a global tech environment." },
   { name: "Priya S.", role: "Student, CSE", text: "The research opportunities here are unmatched. I published two papers before even graduating!" },
   { name: "Dr. K. Sharma", role: "Professor", text: "Witnessing the growth of students from novices to innovators is the best part of SRIT culture." }
];

const Home: React.FC = () => {
   const { scrollY } = useScroll();
   const heroTextY = useTransform(scrollY, [0, 500], [0, 100]);
   const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
   const [activeTestimonial, setActiveTestimonial] = useState(0);

   return (
      <div className="bg-white text-secondary-900 font-sans selection:bg-primary-500 selection:text-white">

         {/* 1. HERO SECTION */}
         <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-b border-gray-100">
            <HeroScene />

            <div className="container mx-auto px-8 md:px-20 relative z-10 pointer-events-none">
               <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="text-left mix-blend-multiply">
                  <h1 className="text-[20vw] md:text-[25vw] font-black tracking-tighter leading-none text-primary-500 select-none -ml-4 md:-ml-12">
                     SRIT
                  </h1>
                  <div className="md:pl-4">
                     <div className="text-2xl md:text-5xl font-black tracking-tighter text-secondary-900 uppercase mt-[-2vw]">
                        Srinivasa Ramanujan
                     </div>
                     <div className="text-sm md:text-xl font-bold tracking-[0.3em] text-secondary-500 uppercase mt-4 flex items-center gap-4">
                        Institute of Technology <span className="h-px flex-1 bg-secondary-900/20"></span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* 2. ANNOUNCEMENTS TICKER */}
         <div className="bg-primary-500 text-white overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-bold uppercase tracking-wider">
               {notices.map((notice, i) => (
                  <span key={i} className="flex items-center gap-4">
                     <span className="w-2 h-2 bg-white rounded-full"></span> {notice}
                  </span>
               ))}
               {notices.map((notice, i) => (
                  <span key={`dup-${i}`} className="flex items-center gap-4">
                     <span className="w-2 h-2 bg-white rounded-full"></span> {notice}
                  </span>
               ))}
            </div>
         </div>

         {/* 3. VISION & ABOUT */}
         <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">About SRIT</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                     Engineering <br />the <span className="text-primary-500">Future.</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-secondary-600 font-medium mb-8">
                     Established in 2008, SRIT is an autonomous institution dedicated to fostering innovation.
                     We are committed to providing value-based education that empowers students to become global leaders.
                  </p>
                  <Link to="/about" className="text-secondary-900 font-bold uppercase tracking-widest text-sm border-b-2 border-primary-500 pb-1 hover:text-primary-500 transition-colors">
                     Read our Vision & Mission
                  </Link>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-8 border-l-4 border-primary-500 shadow-sm">
                     <Award className="text-primary-500 mb-4" size={32} />
                     <h3 className="text-xl font-black mb-2">NAAC 'A+'</h3>
                     <p className="text-xs text-secondary-500 font-bold uppercase">Accredited</p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-primary-500 shadow-sm">
                     <Globe className="text-primary-500 mb-4" size={32} />
                     <h3 className="text-xl font-black mb-2">Autonomous</h3>
                     <p className="text-xs text-secondary-500 font-bold uppercase">UGC Status</p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-primary-500 shadow-sm">
                     <Users className="text-primary-500 mb-4" size={32} />
                     <h3 className="text-xl font-black mb-2">3000+</h3>
                     <p className="text-xs text-secondary-500 font-bold uppercase">Students</p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-primary-500 shadow-sm">
                     <BookOpen className="text-primary-500 mb-4" size={32} />
                     <h3 className="text-xl font-black mb-2">NBA</h3>
                     <p className="text-xs text-secondary-500 font-bold uppercase">Accredited Depts</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. ACADEMICS & DEPARTMENTS PREVIEW */}
         <section className="py-32 bg-white">
            <div className="container mx-auto px-4 md:px-12 text-center mb-20">
               <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">Academic Programs</span>
               <h2 className="text-5xl font-black text-secondary-900 uppercase tracking-tighter">
                  Schools of Study
               </h2>
            </div>
            <div className="border-y border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
               {['Computer Science', 'Electronics & Comm.', 'Electrical Engg.', 'Mechanical', 'Civil Engg.', 'Humanities'].map((dept, i) => (
                  <div key={i} className="p-10 group hover:bg-secondary-900 hover:text-white transition-colors duration-300 flex flex-col items-center text-center">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 text-primary-500 group-hover:text-white transition-colors">
                        <ArrowRight size={20} />
                     </div>
                     <h3 className="font-bold text-lg uppercase mb-2">{dept}</h3>
                     <Link to="/departments" className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                        View Program
                     </Link>
                  </div>
               ))}
            </div>
            <div className="text-center mt-12">
               <Link to="/departments" className="inline-block bg-primary-500 text-white px-8 py-3 rounded font-bold uppercase text-sm tracking-widest hover:bg-primary-600 transition-colors">
                  View All Departments
               </Link>
            </div>
         </section>

         {/* 5. PLACEMENTS & RECRUITERS */}
         <section className="py-24 bg-secondary-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end">
               <div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Placements</h2>
                  <p className="text-secondary-400 max-w-lg">Launching careers at the world's leading technology companies.</p>
               </div>
               <div className="flex gap-8 mt-8 md:mt-0">
                  {stats.map((stat, i) => (
                     <div key={i}>
                        <div className="text-4xl font-black text-primary-500 mb-1">{stat.value}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Recruiters Marquee */}
            <div className="relative py-12 border-t border-white/10 bg-white/5">
               <div className="flex animate-marquee whitespace-nowrap gap-20">
                  {recruiters.concat(recruiters).map((r, i) => (
                     <span key={i} className="text-4xl font-black text-white/20 uppercase hover:text-primary-500 transition-colors cursor-default">
                        {r}
                     </span>
                  ))}
               </div>
            </div>
         </section>

         {/* 6. INFRASTRUCTURE GALLERY */}
         <section className="py-32 bg-white">
            <div className="container mx-auto px-4 md:px-12 mb-16">
               <h2 className="text-5xl font-black text-secondary-900 uppercase tracking-tighter mb-4">Campus Life</h2>
               <p className="text-secondary-500 font-medium">World-class facilities for holistic development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[600px] md:h-[400px]">
               {facilities.map((fac, i) => (
                  <div key={i} className="relative group overflow-hidden border-r border-white">
                     <img src={fac.img} alt={fac.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-secondary-900/80 group-hover:bg-primary-500/80 opacity-60 transition-colors"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest opacity-80 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                           {fac.title}
                        </h3>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* 7. TESTIMONIALS */}
         <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-12 text-center max-w-4xl">
               <Quote size={48} className="text-primary-500 mx-auto mb-8 opacity-50" />
               <div className="text-2xl md:text-4xl font-light italic leading-relaxed text-secondary-900 mb-12">
                  "{testimonials[activeTestimonial].text}"
               </div>
               <div>
                  <div className="font-bold text-lg uppercase tracking-wide text-secondary-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm font-bold text-primary-500 uppercase tracking-widest">{testimonials[activeTestimonial].role}</div>
               </div>
               <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-primary-500 w-8' : 'bg-gray-300'}`}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* 8. CONTACT & MAP */}
         <section className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-secondary-900 text-white p-16 md:p-32 flex flex-col justify-center">
               <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
               <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Contact Us</h2>
               <div className="space-y-8">
                  <div className="flex items-start gap-4">
                     <MapPin className="text-primary-500 mt-1" />
                     <p className="text-lg leading-relaxed text-secondary-300">
                        Rotarypuram Village, Bukkaraya Samudram,<br />
                        Anantapur, Andhra Pradesh - 515741
                     </p>
                  </div>
                  <div className="flex items-center gap-4">
                     <Phone className="text-primary-500" />
                     <p className="text-lg text-secondary-300">+91 95055 05566</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <Mail className="text-primary-500" />
                     <p className="text-lg text-secondary-300">principal@srit.edu.in</p>
                  </div>
               </div>
            </div>
            <div className="bg-gray-200 min-h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6534575772396!2d77.63972687588147!3d14.731997273867606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ba49062eb13%3A0xc3c54d767104192b!2sSrinivasa%20Ramanujan%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="absolute inset-0"
               ></iframe>
            </div>
         </section>

      </div>
   );
};

export default Home;