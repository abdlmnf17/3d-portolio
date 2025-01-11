import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaStar, FaUsers, FaProjectDiagram, FaClock } from 'react-icons/fa'; // Import ikon dari react-icons

// Cosmic Glow Component
const CosmicGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-600 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-700 opacity-60 blur-lg" />
    </div>
  );
};

// Spline Viewer Component
const SplineViewer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js';
    document.head.appendChild(script);
    
    const handleLoad = () => {
      const shadowRoot = document.querySelector('spline-viewer')?.shadowRoot;
      if (shadowRoot) {
        const logo = shadowRoot.querySelector('#logo');
        if (logo) logo.remove();
      }
      setIsLoaded(true);
    };
    
    script.onload = handleLoad;
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative w-full h-full max-w-full max-h-full overflow-hidden"
    >
      <spline-viewer
        url="https://prod.spline.design/NrfVJbZh0ZBaCcdN/scene.splinecode"
        className="w-full h-full object-contain"
        style={{
          transform: 'scale(0.8)', 
          transformOrigin: 'center',
          maxWidth: '100%',
          maxHeight: '100%',
          opacity: 0.8,
          zIndex: 1
        }}
      />
    </motion.div>
  );
};

// Modern CTA Button Component
const ModernCTAButton = ({ children, primary = false, href }) => (
  <motion.a
    href={href}
    smooth // Untuk smooth scrolling
    duration={500} // Durasi scrolling
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    className={`
      relative overflow-hidden rounded-full px-8 py-4
      ${primary ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-white/10'}
      font-medium text-base
      transition-all duration-300
      group
    `}
  >
    <span className={`
      relative z-10 font-semibold
      ${primary ? 'text-white' : 'text-gray-300'}
      group-hover:text-white
      transition-colors duration-300
    `}>
      {children}
    </span>
  </motion.a>
);

// Counter Component
const Counter = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2; // Durasi animasi dalam detik
    const increment = Math.ceil(end / (duration * 1000 / 100)); // Hitung increment per 100ms

    const timer = setInterval(() => {
      if (start < end) {
        start += increment;
        setCount(start);
      } else {
        clearInterval(timer);
        setCount(end);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="text-4xl font-bold text-white">{count}+</span>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>

  );
};

// Main Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0B] font-['Plus Jakarta Sans'] antialiased">
      <CosmicGlow />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
          >
            Everything App for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">teams</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 font-light"
          >
            <Typewriter
              words={['Developer', 'Designer', 'Creator']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ModernCTAButton href="#projects" primary>VIEW PROJECTS</ModernCTAButton>
            <ModernCTAButton href="#contact">CONTACT ME</ModernCTAButton>
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 h-[600px] flex items-center justify-center"
        >
          <SplineViewer />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-2 gap-6">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Counter number={5} label="Years Experience" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Counter number={50} label="Projects Done" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Counter number={30} label="Happy Clients" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Counter number={99} label="Success Rate" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;