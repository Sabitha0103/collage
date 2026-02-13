import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-secondary-900 border-t border-gray-100 font-sans">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-between items-start">
          <div>
            <h2 className="text-6xl font-black tracking-tighter mb-8 text-primary-500">SRIT</h2>
            <p className="text-xl font-medium max-w-sm leading-relaxed text-secondary-500">
              Autonomy meets Excellence. <br />
              Creating the future, one engineer at a time.
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-primary-500 transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-6 block">Explore</span>
            <ul className="space-y-4">
              {['About Us', 'Leadership', 'Academics', 'Research', 'Campus Life'].map((item) => (
                <li key={item}><a href="#" className="font-bold text-lg hover:text-primary-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="p-12 hover:bg-gray-50 transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-6 block">Quick Links</span>
            <ul className="space-y-4">
              {['Admissions', 'Examinations', 'Results', 'Alumni', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="font-bold text-lg hover:text-primary-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-secondary-900 text-white p-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest opacity-90">
        <span>&copy; 2026 Srinivasa Ramanujan Institute of Technology</span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary-500">Privacy</a>
          <a href="#" className="hover:text-primary-500">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;