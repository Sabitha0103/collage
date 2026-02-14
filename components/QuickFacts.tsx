import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, Users, BookOpen, Briefcase, Trophy, Building2, Globe, TrendingUp } from 'lucide-react';

interface QuickFact {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const quickFacts: QuickFact[] = [
  {
    icon: Users,
    value: 3000,
    suffix: '+',
    label: 'Students Enrolled',
    color: 'from-primary-600 to-orange-500'
  },
  {
    icon: BookOpen,
    value: 6,
    suffix: '',
    label: 'Academic Programs',
    color: 'from-orange-500 to-primary-600'
  },
  {
    icon: Briefcase,
    value: 95,
    suffix: '%',
    label: 'Placement Rate',
    color: 'from-primary-500 to-orange-400'
  },
  {
    icon: Trophy,
    value: 24,
    suffix: ' LPA',
    label: 'Highest Package',
    color: 'from-orange-600 to-primary-500'
  },
  {
    icon: Award,
    value: 150,
    suffix: '+',
    label: 'Recruiting Companies',
    color: 'from-primary-600 to-orange-500'
  },
  {
    icon: Building2,
    value: 50,
    suffix: '',
    label: 'Acre Campus',
    color: 'from-orange-500 to-primary-600'
  },
  {
    icon: Globe,
    value: 5000,
    suffix: '+',
    label: 'Global Alumni',
    color: 'from-primary-500 to-orange-400'
  },
  {
    icon: TrendingUp,
    value: 12,
    suffix: '',
    label: 'Startups Incubated',
    color: 'from-orange-600 to-primary-500'
  }
];

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-black text-secondary-900 font-poppins">
      {displayValue.toLocaleString()}{suffix}
    </div>
  );
};

const QuickFacts: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50/20 to-orange-50/10 text-secondary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

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
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 font-poppins">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-orange-400">Facts</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto font-inter">
            Numbers that showcase our commitment to excellence and innovation in education.
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Modern white card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 shadow-lg">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}></div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  className={`relative w-14 h-14 bg-gradient-to-r ${fact.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300`}
                >
                  <fact.icon className="text-white" size={24} />
                </motion.div>

                {/* Animated Counter */}
                <div className="text-3xl md:text-4xl font-black text-secondary-900">
                  <AnimatedCounter value={fact.value} suffix={fact.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm font-bold uppercase tracking-wider text-secondary-600 mt-3 group-hover:text-primary-600 transition-colors font-inter">
                  {fact.label}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${fact.color} mt-4 rounded-full`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400 mb-2">
                NAAC 'A+'
              </div>
              <p className="text-sm text-secondary-400 uppercase tracking-wider">Accreditation</p>
            </div>
            <div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400 mb-2">
                Autonomous
              </div>
              <p className="text-sm text-secondary-400 uppercase tracking-wider">UGC Status</p>
            </div>
            <div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400 mb-2">
                NBA Accredited
              </div>
              <p className="text-sm text-secondary-400 uppercase tracking-wider">All Departments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickFacts;
