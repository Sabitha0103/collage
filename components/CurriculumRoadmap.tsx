import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Layers, CheckCircle, Award, TrendingUp } from 'lucide-react';

interface CurriculumSemester {
  semester: number;
  subjects: string[];
  focus: string;
}

const curriculumData: CurriculumSemester[] = [
  {
    semester: 1,
    subjects: ['Mathematics I', 'Engineering Physics', 'C Programming', 'Engineering Graphics'],
    focus: 'Foundations'
  },
  {
    semester: 2,
    subjects: ['Mathematics II', 'Data Structures', 'Digital Electronics', 'Object Oriented Programming'],
    focus: 'Core Concepts'
  },
  {
    semester: 3,
    subjects: ['Algorithms', 'Database Systems', 'Computer Networks', 'Operating Systems'],
    focus: 'System Design'
  },
  {
    semester: 4,
    subjects: ['Software Engineering', 'Web Technologies', 'Theory of Computation', 'Microprocessors'],
    focus: 'Application Development'
  },
  {
    semester: 5,
    subjects: ['Machine Learning', 'Compiler Design', 'Cloud Computing', 'Mobile App Development'],
    focus: 'Advanced Technologies'
  },
  {
    semester: 6,
    subjects: ['Artificial Intelligence', 'Big Data Analytics', 'Cybersecurity', 'IoT Systems'],
    focus: 'Specialization'
  },
  {
    semester: 7,
    subjects: ['Deep Learning', 'Blockchain Technology', 'DevOps', 'Project Phase I'],
    focus: 'Innovation & Research'
  },
  {
    semester: 8,
    subjects: ['Industry Internship', 'Final Year Project', 'Technical Seminar', 'Placement Training'],
    focus: 'Career Readiness'
  }
];

const CurriculumRoadmap: React.FC = () => {
  return (
    <section id="curriculum-roadmap" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
          Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Roadmap</span>
        </h2>
        <p className="text-secondary-600 text-lg">
          Our comprehensive 4-year program designed to transform you from a beginner to an industry-ready professional.
        </p>
      </motion.div>

      {/* Roadmap Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-orange-500 to-primary-600 hidden md:block"></div>

        <div className="space-y-12">
          {curriculumData.map((semester, idx) => (
            <motion.div
              key={semester.semester}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  
                  <div className="relative">
                    {/* Semester Badge */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4`}>
                      <BookOpen size={16} />
                      Semester {semester.semester}
                    </div>

                    {/* Focus Area */}
                    <h3 className="text-xl font-black uppercase tracking-tight text-secondary-900 mb-3">
                      {semester.focus}
                    </h3>

                    {/* Subjects */}
                    <div className="space-y-2">
                      {semester.subjects.map((subject, subIdx) => (
                        <div
                          key={subIdx}
                          className={`flex items-center gap-2 text-sm text-secondary-600 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                        >
                          <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                          <span>{subject}</span>
                        </div>
                      ))}
                    </div>

                    {/* Year Indicator */}
                    <div className={`mt-4 pt-4 border-t border-gray-200 text-xs font-bold uppercase tracking-wider text-primary-500`}>
                      Year {Math.ceil(semester.semester / 2)}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Circle */}
              <div className="hidden md:flex relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                >
                  <span className="text-white font-black text-lg">{semester.semester}</span>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 rounded-3xl p-12 text-white"
      >
        <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-center">
          Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400">Highlights</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Hands-On Learning</h4>
            <p className="text-secondary-400 text-sm">70% practical, 30% theory with real-world projects</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Layers size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Industry Integration</h4>
            <p className="text-secondary-400 text-sm">Guest lectures, workshops, and certification programs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Global Standards</h4>
            <p className="text-secondary-400 text-sm">Curriculum aligned with ACM/IEEE guidelines</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurriculumRoadmap;
