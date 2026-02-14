import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Settings, PenTool, Database, Zap, Globe, Microscope, HardHat, Building2, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const departments = [
    {
        id: 'cse',
        name: "Computer Science",
        code: "CSE",
        icon: Code2,
        desc: "Driving the digital future with AI, Machine Learning, and Cloud Computing.",
        specializations: ["Artificial Intelligence", "Data Science", "Cyber Security", "IoT"]
    },
    {
        id: 'ece',
        name: "Electronics & Comm.",
        code: "ECE",
        icon: Cpu,
        desc: "Innovating at the intersection of hardware and software communication systems.",
        specializations: ["VLSI Design", "Embedded Systems", "Communication Networks", "Signal Processing"]
    },
    {
        id: 'eee',
        name: "Electrical & Electronics",
        code: "EEE",
        icon: Zap,
        desc: "Powering the world with sustainable energy solutions and smart grids.",
        specializations: ["Power Systems", "Control Systems", "Renewable Energy", "Electric Vehicles"]
    },
    {
        id: 'mech',
        name: "Mechanical Engg.",
        code: "MECH",
        icon: Settings,
        desc: "Designing the machines of tomorrow with robotics and automation.",
        specializations: ["Robotics", "Thermal Engineering", "CAD/CAM", "Industrial Automation"]
    },
    {
        id: 'civil',
        name: "Civil Engineering",
        code: "CIVIL",
        icon: Building2,
        desc: "Building the infrastructure for a sustainable and connected society.",
        specializations: ["Structural Engg", "Transportation", "Environmental Engg", "Geotechnical"]
    },
    {
        id: 'hass',
        name: "Humanities & Sciences",
        code: "H&S",
        icon: FlaskConical,
        desc: "Fostering critical thinking and foundational scientific knowledge.",
        specializations: ["Mathematics", "Physics", "Chemistry", "English Literature"]
    }
];

const Departments: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="bg-white min-h-screen text-secondary-900 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="mb-20 border-b border-gray-100 pb-8">
                    <span className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-2 block font-inter">Academics</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight font-poppins">
                        Schools of <br /><span className="text-secondary-900">Study</span>
                    </h1>
                    <p className="text-base text-secondary-600 mt-4 max-w-3xl font-inter">
                        Explore our diverse range of academic programs designed to nurture innovation, creativity, and excellence in engineering and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100">
                    {departments.map((dept) => (
                        <motion.div
                            key={dept.id}
                            className="bg-white p-10 relative overflow-hidden group hover:bg-secondary-900 hover:text-white transition-colors duration-500"
                            onMouseEnter={() => setHovered(dept.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                        <dept.icon size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-black uppercase mb-3 font-poppins">{dept.name}</h2>
                                        <p className="text-base text-secondary-500 group-hover:text-white/80 max-w-xl transition-colors font-inter">
                                            {dept.desc}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {dept.specializations.map(spec => (
                                                <span key={spec} className="text-xs font-bold uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full text-secondary-400 group-hover:border-white/20 group-hover:text-white/60 transition-colors font-inter">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="self-end md:self-center">
                                    <Link to={`/department/${dept.id}`} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                                        <ArrowRight size={24} className="text-secondary-400 group-hover:text-white" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
