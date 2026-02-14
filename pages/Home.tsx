import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Database, Shield, Globe, MapPin, Phone, Mail, ChevronRight, Award, Users, BookOpen, Quote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from '../components/3d/HeroScene';
import VirtualCampusTour from '../components/VirtualCampusTour';
import EnhancedTestimonials from '../components/EnhancedTestimonials';
import ResearchInnovation from '../components/ResearchInnovation';
import AlumniNetwork from '../components/AlumniNetwork';
import QuickFacts from '../components/QuickFacts';

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
            {/* Orange gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-orange-400/10 to-primary-600/5 pointer-events-none"></div>
            
            <HeroScene />

            <div className="container mx-auto px-8 md:px-20 relative z-10 pointer-events-none">
               <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="text-left mix-blend-multiply">
                  {/* Logo positioned behind SRIT text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
                     <motion.img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23f97316' opacity='0.2'/%3E%3Cpath d='M100 40 L140 80 L140 120 L100 160 L60 120 L60 80 Z' fill='%23f97316' opacity='0.3'/%3E%3Ctext x='100' y='115' text-anchor='middle' font-size='60' font-weight='bold' fill='%23f97316'%3ESRIT%3C/text%3E%3C/svg%3E"
                        alt="SRIT Logo"
                        className="w-[60vw] md:w-[50vw] h-auto animate-float"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                     />
                  </div>
                  
                  {/* SRIT College Logo with animation and glowing effect */}
                  <motion.div 
                     className="absolute top-8 right-8 md:top-12 md:right-12 pointer-events-auto"
                     initial={{ scale: 0, opacity: 0, rotate: -180 }}
                     animate={{ scale: 1, opacity: 1, rotate: 0 }}
                     transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                  >
                     <motion.div
                        animate={{ 
                           y: [0, -10, 0],
                           scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                           duration: 3, 
                           repeat: Infinity, 
                           ease: "easeInOut" 
                        }}
                        className="relative group"
                     >
                        {/* Glowing effect border */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-orange-400 to-primary-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
                        
                        {/* Logo container */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:border-primary-400 transition-all duration-300">
                           <img 
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23f97316'/%3E%3Ccircle cx='100' cy='100' r='85' fill='white'/%3E%3Cpath d='M100 30 L150 70 L150 130 L100 170 L50 130 L50 70 Z' fill='%23f97316'/%3E%3Ctext x='100' y='115' text-anchor='middle' font-size='45' font-weight='bold' fill='white'%3ESRIT%3C/text%3E%3C/svg%3E"
                              alt="SRIT College Logo"
                              className="w-full h-full object-cover"
                           />
                        </div>
                     </motion.div>
                  </motion.div>
                  
                  <h1 className="text-[20vw] md:text-[25vw] font-black tracking-tighter leading-none text-primary-500 select-none -ml-4 md:-ml-12 animate-float relative z-10">
                     SRIT
                  </h1>
                  <div className="md:pl-4">
                     <div className="text-2xl md:text-5xl font-black tracking-tighter text-secondary-900 uppercase mt-[-2vw] font-heading">
                        Srinivasa Ramanujan
                     </div>
                     <div className="text-sm md:text-xl font-bold tracking-[0.3em] text-secondary-500 uppercase mt-4 flex items-center gap-4">
                        Institute of Technology <span className="h-px flex-1 bg-gradient-to-r from-primary-500 to-transparent"></span>
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
         <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
               >
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">About SRIT</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 font-heading">
                     Engineering <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Future.</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-secondary-600 font-medium mb-8">
                     Established in 2008, SRIT is an autonomous institution dedicated to fostering innovation.
                     We are committed to providing value-based education that empowers students to become global leaders.
                  </p>
                  <Link to="/about" className="text-secondary-900 font-bold uppercase tracking-widest text-sm border-b-2 border-primary-500 pb-1 hover:text-primary-500 transition-colors">
                     Read our Vision & Mission
                  </Link>
               </motion.div>
               <div className="grid grid-cols-2 gap-6 auto-rows-auto">
                  {[
                     { icon: Award, title: "NAAC 'A+'", subtitle: "Accredited", delay: 0, height: "h-44", gradient: "from-primary-600 to-orange-500" },
                     { icon: Globe, title: "Autonomous", subtitle: "UGC Status", delay: 0.1, height: "h-52", gradient: "from-orange-500 to-primary-600" },
                     { icon: Users, title: "3000+", subtitle: "Students", delay: 0.2, height: "h-48", gradient: "from-primary-500 to-orange-400" },
                     { icon: BookOpen, title: "NBA", subtitle: "Accredited Depts", delay: 0.3, height: "h-40", gradient: "from-orange-600 to-primary-500" }
                  ].map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, rotateY: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: item.delay, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                           scale: 1.05, 
                           y: -8,
                           rotateY: 5,
                           boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.3)"
                        }}
                        className={`${item.height} relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${index % 2 === 0 ? 'mt-0' : 'mt-4'}`}
                        style={{ 
                           transformStyle: 'preserve-3d',
                           perspective: '1000px'
                        }}
                     >
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        
                        {/* Border highlight effect */}
                        <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-2xl transition-all duration-300`}></div>
                        
                        {/* Glassmorphism effect */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="relative p-6 flex flex-col justify-center h-full">
                           <motion.div 
                              className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary-500/50 transition-all`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                           >
                              <item.icon className="text-white" size={28} />
                           </motion.div>
                           <h3 className="text-2xl font-black mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                           <p className="text-xs text-secondary-500 font-bold uppercase tracking-wider">{item.subtitle}</p>
                           
                           {/* Decorative corner element */}
                           <div className="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity">
                              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} rounded-tl-full`}></div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. ACADEMICS & DEPARTMENTS PREVIEW */}
         <section className="py-32 bg-white">
            <motion.div 
               className="container mx-auto px-4 md:px-12 text-center mb-20"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
            >
               <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">Academic Programs</span>
               <h2 className="text-5xl font-black text-secondary-900 uppercase tracking-tighter font-heading">
                  Schools of Study
               </h2>
            </motion.div>
            
            {/* Departments as animated lines */}
            <div className="container mx-auto px-4 md:px-12 max-w-4xl">
               <div className="space-y-6">
                  {['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Electrical & Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Humanities & Sciences'].map((dept, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="group relative"
                     >
                        {/* Line with gradient underline */}
                        <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-primary-500 hover:border-orange-400 rounded-r-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between">
                           <div className="flex items-center gap-4 flex-1">
                              {/* Icon circle */}
                              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-primary-500/50 transition-all flex-shrink-0">
                                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                              </div>
                              
                              {/* Department name */}
                              <h3 className="font-bold text-xl md:text-2xl text-secondary-900 uppercase tracking-tight group-hover:text-primary-600 transition-colors">
                                 {dept}
                              </h3>
                           </div>
                           
                           {/* View link */}
                           <Link 
                              to="/departments" 
                              className="text-xs font-bold uppercase tracking-widest text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-orange-400 flex items-center gap-2"
                           >
                              View Program <ChevronRight size={16} />
                           </Link>
                        </div>
                        
                        {/* Gradient underline animation */}
                        <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                           viewport={{ once: true }}
                           className="h-1 bg-gradient-to-r from-primary-500 via-orange-400 to-transparent mt-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                        />
                        
                        {/* Subtle separator line */}
                        {i < 5 && (
                           <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-6" />
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
            
            <div className="text-center mt-12">
               <Link to="/departments" className="inline-block bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400 text-white px-8 py-3 rounded font-bold uppercase text-sm tracking-widest hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
                  View All Departments
               </Link>
            </div>
         </section>

         {/* 5. PLACEMENTS & RECRUITERS */}
         <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 font-heading">Placements</h2>
                  <p className="text-secondary-400 max-w-lg">Launching careers at the world's leading technology companies.</p>
               </motion.div>
               <motion.div 
                  className="flex gap-8 mt-8 md:mt-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
               >
                  {stats.map((stat, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                     >
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-orange-400 mb-1">{stat.value}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">{stat.label}</div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>

            {/* Recruiters Smooth Scrolling - Right to Left */}
            <div className="relative py-12 border-t border-white/10 bg-gradient-to-r from-white/5 via-primary-500/10 to-white/5 overflow-hidden">
               <div className="flex animate-marquee hover-pause whitespace-nowrap">
                  {[...recruiters, ...recruiters].map((r, i) => (
                     <span key={`${r}-${i}`} className="text-4xl font-black text-white/20 uppercase hover:text-primary-500 transition-colors cursor-default mx-10">
                        {r}
                     </span>
                  ))}
               </div>
            </div>
         </section>

         {/* 6. QUICK FACTS ANIMATED COUNTERS */}
         <QuickFacts />

         {/* 7. VIRTUAL CAMPUS TOUR */}
         <VirtualCampusTour />

         {/* 8. RESEARCH & INNOVATION HUB */}
         <ResearchInnovation />

         {/* 9. ALUMNI NETWORK */}
         <AlumniNetwork />

         {/* 10. ENHANCED TESTIMONIALS */}
         <EnhancedTestimonials />

         {/* 11. CONTACT & MAP */}
         <section className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white p-16 md:p-32 flex flex-col justify-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
               >
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 font-heading">Contact Us</h2>
                  <div className="space-y-8">
                     <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                        <MapPin className="text-primary-500 mt-1" />
                        <p className="text-lg leading-relaxed text-secondary-300">
                           Rotarypuram Village, Bukkaraya Samudram,<br />
                           Anantapur, Andhra Pradesh - 515741
                        </p>
                     </div>
                     <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                        <Phone className="text-primary-500" />
                        <p className="text-lg text-secondary-300">+91 95055 05566</p>
                     </div>
                     <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                        <Mail className="text-primary-500" />
                        <p className="text-lg text-secondary-300">principal@srit.edu.in</p>
                     </div>
                  </div>
               </motion.div>
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