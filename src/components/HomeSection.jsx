import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTailwindcss, SiDocker } from 'react-icons/si';

const SplineViewer = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

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
    };
    
    script.onload = handleLoad;
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ scale }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-full h-full max-w-full max-h-full overflow-hidden"
    >
      <spline-viewer
        url="https://prod.spline.design/NrfVJbZh0ZBaCcdN/scene.splinecode"
        className="w-full h-full object-contain"
        style={{
          transform: 'scale(1)', 
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

const TechCard = ({ icon, title, description, color }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-72 h-80 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-purple-900/20 
        backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8
        flex flex-col gap-6 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50" />
        
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-6xl ${color} relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-300/80 relative z-10 leading-relaxed"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left- 0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"
        />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"
        />
      </div>
    </motion.div>
  );
};

const TechShowcase = () => {
  const techStack = [
    {
      icon: <SiReact />,
      title: "Frontend Mastery",
      description: "Building elegant & responsive interfaces with React & Next.js. Focusing on performance and user experience.",
      color: "text-cyan-400"
    },
    {
      icon: <SiNodedotjs />,
      title: "Backend Engineering",
      description: "Creating robust server architectures with Node.js & Express. Specializing in RESTful APIs and microservices.",
      color: "text-green-500"
    },
    {
      icon: <SiTailwindcss />,
      title: "Design Systems",
      description: "Crafting beautiful UI components with Tailwind CSS. Implementing consistent and scalable design patterns.",
      color: "text-blue-400"
    },
    {
      icon: <SiDocker />,
      title: "DevOps & Cloud",
      description: "Orchestrating deployments with Docker & cloud services. Ensuring smooth CI/CD pipelines and scalability.",
      color: "text-sky-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techStack.length) % techStack.length);
  };

  useEffect(() => {
    const timer = setInterval(nextCard, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      >
        <Typewriter
          words={['Tech Ecosystem']}
          loop={1}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <div className="relative h-80 w-72">
        <AnimatePresence mode="wait">
          <TechCard 
            key={currentIndex}
            icon={techStack[currentIndex].icon}
            title={techStack[currentIndex].title}
            description={techStack[currentIndex].description}
            color={techStack[currentIndex].color}
          />
        </AnimatePresence>
      </div>

      {/* <div className="flex space-x-4">
        <button onClick={prevCard} className="p-2 bg-purple-600 text-white rounded-full">Prev</button>
        <button onClick={nextCard} className="p-2 bg-purple-600 text-white rounded-full">Next</button>
      </div> */}
    </div>
  );
};

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: <FaGithub className="text-2xl" />, 
      link: "https://github.com/yourusername",
      color: "text-gray-200 hover:text-white"
    },
    { 
      icon: <FaLinkedin className="text-2xl" />, 
      link: "https://linkedin.com/in/yourusername",
      color: "text-blue-400 hover:text-blue-300"
    },
    { 
      icon: <FaEnvelope className="text-2xl" />, 
      link: "mailto:your.email@example.com",
      color: "text-red-400 hover:text-red-300"
    },
    { 
      icon: <FaPhone className="text-2xl" />, 
      link: "tel:+1234567890",
      color: "text-green-400 hover:text-green-300"
    }
  ];

  return (
    <motion.div 
      initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
      animate={{ backgroundColor: 'rgba(0 ,0,0,1)' }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col lg:flex-row items-stretch justify-center bg-gradient-to-b from-black via-black to-purple-900 text-white p-4 lg:p-12"
    >
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/3 p-6 flex flex-col justify-center space-y-6 shadow-2xl rounded-2xl bg-black/20 backdrop-blur-sm"
      >
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Adam Dary
        </h1>
        
        <div className="text-lg lg:text-xl font-light text-gray-300 drop-shadow-[0_2px_4px rgba(0,0,0,0.3)]">
          <Typewriter
            words={['Creative Developer', 'Full Stack Engineer', 'UI/UX Designer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed">
          Passionate about creating innovative digital solutions that blend cutting-edge technology with elegant design. Transforming complex ideas into intuitive user experiences.
        </p>
        
        <div className="flex space-x-4 pt-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`${social.color} transition-all duration-300 drop-shadow-[0_2px_4px rgba(0,0,0,0.3)]`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Middle Column */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full lg:w-1/3 flex items-center justify-center"
      >
        <SplineViewer />
      </motion.div>

      {/* Right Column */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full lg:w-1/3 p-6 flex flex-col justify-center shadow-2xl rounded-2xl bg-black/20 backdrop-blur-sm"
      >
        <TechShowcase />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;