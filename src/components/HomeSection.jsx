import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Particle Component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 10
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          initial={{
            x: `${particle.x}%`,
            y: -10,
            opacity: 0.1,
            scale: 0
          }}
          animate={{
            y: `${particle.y + 100}%`,
            opacity: [0.1, 0.3, 0.1],
            scale: particle.size
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: "2px",
            height: "2px"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Cosmic Glow Component
const CosmicGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900 opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-800 opacity-70 blur-xl" />
      <Particles />
    </div>
  );
};

// SplineViewer Component remains the same
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
      exit={{ opacity: 0, scale: 0.9 }}
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

// Enhanced ModernCTAButton Component
const ModernCTAButton = ({ children, primary = false, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className={`
      relative overflow-hidden rounded-full px-8 py-4
      ${primary ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-white/5'}
      font-medium text-base
      transition-all duration-300
      backdrop-blur-sm
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

// Enhanced Counter Component
const Counter = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2;
    const increment = Math.ceil(end / (duration * 1000 / 100));

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.span 
        className="text-4xl font-bold text-white"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        {count}+
      </motion.span>
      <span className="text-gray-400 text-sm">{label}</span>
    </motion.div>
  );
};

// Enhanced Main Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-['Plus Jakarta Sans'] antialiased">
      <CosmicGlow />

      <AnimatePresence>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
            >
              Everything App for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                teams
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
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
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <ModernCTAButton href="#projects" primary>VIEW PROJECTS</ModernCTAButton>
              <ModernCTAButton href="#contact">CONTACT ME</ModernCTAButton>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 h-[600px] flex items-center justify-center"
          >
            <SplineViewer />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-2 gap-6"
        >
          <Counter number={5} label="Years Experience" />
          <Counter number={50} label="Projects Done" />
          <Counter number={30} label="Happy Clients" />
          <Counter number={99} label="Success Rate" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;