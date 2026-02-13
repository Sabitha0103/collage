import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Phone, Mail, MapPin, Download, CheckCircle, 
  Linkedin, Globe, Calendar, Award 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CurriculumRoadmap from '../components/CurriculumRoadmap';
import FacultyResearchHighlights from '../components/FacultyResearchHighlights';
import StudentProjectShowcase from '../components/StudentProjectShowcase';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'hod', label: "HOD's Message" },
  { id: 'faculty', label: 'Faculty' },
  { id: 'faculty-research', label: 'Faculty Research' },
  { id: 'labs', label: 'Laboratories' },
  { id: 'curriculum-roadmap', label: 'Curriculum Roadmap' },
  { id: 'student-projects', label: 'Student Projects' },
  { id: 'placements', label: 'Placements' },
];

const Department: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-white min-h-screen">
       {/* Department Header Banner - Orange Theme */}
       <div className="relative h-[400px] bg-primary-900">
         <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop')" }}
         />
         <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-600/80"></div>
         <div className="absolute inset-0 flex items-center container mx-auto px-6 pt-20">
           <div>
              <span className="text-primary-200 font-bold uppercase tracking-widest text-sm mb-2 block">Department of</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Computer Science & Engineering</h1>
              <div className="flex gap-4 text-white/90 text-sm">
                 <span className="flex items-center gap-1"><Calendar size={14} /> Est. 2008</span>
                 <span className="flex items-center gap-1"><Award size={14} /> NBA Accredited</span>
              </div>
           </div>
         </div>
       </div>

       <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
             
             {/* Sticky Sidebar */}
             <div className="lg:w-1/4">
                <div className="sticky top-28 space-y-8">
                   <div className="bg-white rounded border border-secondary-200 shadow-sm overflow-hidden">
                      <div className="bg-secondary-50 p-4 border-b border-secondary-200">
                         <h3 className="font-heading font-bold text-secondary-900">Quick Navigate</h3>
                      </div>
                      <div>
                         {navItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`w-full text-left px-5 py-3 text-sm font-medium border-l-4 transition-all duration-200 flex justify-between items-center group ${
                                activeSection === item.id 
                                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                                  : 'border-transparent text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                              }`}
                            >
                               {item.label}
                               {activeSection === item.id && <ChevronRight size={14} />}
                            </button>
                         ))}
                      </div>
                   </div>

                   {/* Contact Widget */}
                   <div className="bg-primary-600 text-white p-6 rounded">
                      <h4 className="font-bold font-heading mb-4">Contact Dept</h4>
                      <ul className="space-y-3 text-sm text-white/90">
                        <li className="flex items-start gap-3">
                           <MapPin size={16} className="text-white shrink-0 mt-1" />
                           <span>Block A, 3rd Floor, SRIT Campus</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Phone size={16} className="text-white shrink-0" />
                           <span>+91 44 2233 4455</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Mail size={16} className="text-white shrink-0" />
                           <span>cse.hod@srit.edu.in</span>
                        </li>
                      </ul>
                   </div>
                   
                   {/* Brochure Download */}
                   <button className="w-full py-4 bg-secondary-900 hover:bg-secondary-800 text-white font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-2">
                      <Download size={18} /> Brochure
                   </button>
                </div>
             </div>

             {/* Main Content Area */}
             <div className="lg:w-3/4 space-y-24">
                
                {/* Overview */}
                <section id="overview" className="scroll-mt-28">
                   <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">Overview</h2>
                   <p className="text-secondary-600 leading-loose text-lg mb-6">
                     The Department of Computer Science & Engineering is committed to providing a holistic learning environment that blends theoretical foundations with practical applications. Our curriculum is designed to keep pace with the rapidly evolving technology landscape, focusing on areas like Artificial Intelligence, Machine Learning, Data Science, and Cybersecurity.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-secondary-50 p-6 rounded border-l-4 border-primary-500">
                         <h3 className="font-heading font-bold text-lg mb-2">Our Vision</h3>
                         <p className="text-secondary-600 text-sm">To be a globally recognized center of excellence in computing education and research.</p>
                      </div>
                      <div className="bg-secondary-50 p-6 rounded border-l-4 border-secondary-800">
                         <h3 className="font-heading font-bold text-lg mb-2">Our Mission</h3>
                         <ul className="text-secondary-600 text-sm space-y-2">
                           <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-1.5"></div> Impart quality education.</li>
                           <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-1.5"></div> Promote research & innovation.</li>
                         </ul>
                      </div>
                   </div>
                </section>

                {/* HOD Message */}
                <section id="hod" className="scroll-mt-28">
                   <div className="bg-white border border-secondary-200 rounded-lg p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" alt="HOD" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-secondary-100" />
                      <div>
                         <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-1">Dr. S. Ramesh</h2>
                         <p className="text-primary-600 font-medium mb-4">Head of Department, Ph.D (IIT Madras)</p>
                         <p className="text-secondary-600 italic leading-relaxed mb-4">
                           "Welcome to the CSE department. In today's digital age, computer science is the backbone of innovation. We strive to nurture students not just as engineers, but as problem solvers and ethical leaders."
                         </p>
                         <div className="flex gap-3">
                            <a href="#" className="text-secondary-400 hover:text-primary-500"><Linkedin size={20} /></a>
                            <a href="#" className="text-secondary-400 hover:text-primary-500"><Globe size={20} /></a>
                         </div>
                      </div>
                   </div>
                </section>

                {/* Faculty */}
                <section id="faculty" className="scroll-mt-28">
                   <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl font-heading font-bold text-secondary-900">Faculty Members</h2>
                      <a href="#" className="text-primary-600 font-bold text-sm hover:underline">View All Faculty</a>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                         <div key={i} className="bg-white border border-secondary-200 rounded hover:shadow-lg transition-shadow p-6 text-center group">
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary-500 transition-all">
                               <img src={`https://randomuser.me/api/portraits/men/${20+i}.jpg`} alt="Faculty" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-secondary-900">Dr. Faculty Name</h3>
                            <p className="text-sm text-secondary-500 mb-2">Associate Professor</p>
                            <p className="text-xs text-secondary-400 bg-secondary-50 inline-block px-2 py-1 rounded">Machine Learning</p>
                         </div>
                      ))}
                   </div>
                </section>

                {/* Faculty Research Highlights - NEW */}
                <FacultyResearchHighlights />

                {/* Labs */}
                <section id="labs" className="scroll-mt-28">
                   <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">Laboratories</h2>
                   <div className="space-y-8">
                      {[
                        { name: "AI & Deep Learning Lab", desc: "Equipped with NVIDIA DGX Stations for high-performance computing research.", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop" },
                        { name: "IoT & Embedded Systems", desc: "State-of-the-art kits including Raspberry Pi, Arduino, and industrial sensors.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
                      ].map((lab, i) => (
                        <div key={i} className="group relative h-64 rounded-lg overflow-hidden">
                           <img src={lab.img} alt={lab.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                              <h3 className="text-xl font-bold text-white mb-2">{lab.name}</h3>
                              <p className="text-secondary-300 text-sm">{lab.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </section>

                {/* Curriculum Roadmap - NEW */}
                <CurriculumRoadmap />

                {/* Student Project Showcase - NEW */}
                <StudentProjectShowcase />

                {/* Placements */}
                <section id="placements" className="scroll-mt-28 mb-16">
                   <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">Placement Statistics</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-primary-600 text-white p-6 rounded text-center">
                         <div className="text-4xl font-bold text-white mb-2">98%</div>
                         <div className="text-xs uppercase tracking-widest text-white/80">Placement Rate</div>
                      </div>
                      <div className="bg-secondary-50 p-6 rounded text-center border border-secondary-200">
                         <div className="text-4xl font-bold text-secondary-900 mb-2">42 LPA</div>
                         <div className="text-xs uppercase tracking-widest text-secondary-500">Highest Package</div>
                      </div>
                      <div className="bg-secondary-50 p-6 rounded text-center border border-secondary-200">
                         <div className="text-4xl font-bold text-secondary-900 mb-2">8.5 LPA</div>
                         <div className="text-xs uppercase tracking-widest text-secondary-500">Average Package</div>
                      </div>
                   </div>
                   <h4 className="font-bold text-secondary-600 mb-4 uppercase text-sm tracking-wide">Top Recruiters</h4>
                   <div className="flex flex-wrap gap-4">
                      {["Google", "Microsoft", "Amazon", "Adobe", "Goldman Sachs", "Oracle"].map((co, i) => (
                         <span key={i} className="px-4 py-2 bg-white border border-secondary-200 rounded text-secondary-600 font-bold text-sm hover:border-primary-500 transition-colors cursor-default">
                           {co}
                         </span>
                      ))}
                   </div>
                </section>

             </div>

          </div>
       </div>
    </div>
  );
};

export default Department;