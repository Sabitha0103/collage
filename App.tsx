import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Department from './pages/Department';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import LoadingAnimation from './components/LoadingAnimation';
import PageTransition from './components/PageTransition';

// Wrapper component to use useLocation inside Router
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/departments" element={<PageTransition><Departments /></PageTransition>} />
        <Route path="/department/:id" element={<PageTransition><Department /></PageTransition>} />
        {/* Fallback for other depts to generic dept template for this demo */}
        <Route path="/department/*" element={<PageTransition><Department /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// ...
const App: React.FC = () => {
  return (
    <Router>
      <LoadingAnimation />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-secondary-900">
        <Header />
        <FloatingActions />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;