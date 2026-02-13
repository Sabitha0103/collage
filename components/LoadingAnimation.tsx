import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 flex items-center justify-center"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 text-center">
            {/* SRIT Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-orange-400 tracking-tighter">
                SRIT
              </h1>
            </motion.div>

            {/* Loading Spinner */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-3 h-3 bg-gradient-to-r from-primary-600 to-orange-500 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
                className="w-3 h-3 bg-gradient-to-r from-orange-500 to-primary-600 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
                className="w-3 h-3 bg-gradient-to-r from-primary-500 to-orange-400 rounded-full"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-bold uppercase tracking-widest text-primary-400"
            >
              Loading Excellence...
            </motion.p>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-orange-500 to-primary-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
