import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView, useScroll, useTransform, useAnimation } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiFigma, 
  SiAndroid, 
  SiSololearn, 
  SiDocker 
} from 'react-icons/si';

// Komponen SkillIcon3D
const SkillIcon3D = ({ icon: Icon, color, percentage, isVisible }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { 
        scale: 1, 
        opacity: 1,
        rotate: [0, 10, -10, 0], 
      } : {}}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }}
    >
      <Icon 
        style={{ 
          color: color, 
          fontSize: '4rem', 
          filter: `drop-shadow(0 0 10px ${color}50)` 
        }} 
      />
      <motion.div 
        className="mt-2 text-white text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        {percentage}%
      </motion.div>
    </motion.div>
  );
};

// Custom Hook untuk Scroll Reveal
const useScrollReveal = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      }
    }
  };

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return { 
    revealVariants, 
    controls 
  };
};

// Parallax Element
const ParallaxElement = ({ children, offset = 50 }) => {
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [-offset, offset]
  );

  return (
    <motion.div 
      style={{ 
        y: yTransform,
        position: 'absolute'
      }}
    >
      {children}
    </motion.div>
  );
};

// Timeline Item Line
const TimelineItemLine = ({ isActive }) => {
  const lineVariants = {
    initial: { 
      width: 0,
      opacity: 0
    },
    animate: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div 
      className="absolute bottom-0 left-0 h-1 bg-purple-500"
      initial="initial"
      animate={isActive ? "animate" : "initial"}
      variants={lineVariants}
    />
  );
};

// Scroll Progress Bar
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Interactive Skill Card
const InteractiveSkillCard = ({ title, percentage, color, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10 flex flex-col items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-medium text-white mb-6 tracking-tight text-center">
        {title}
      </h3>
      
      <SkillIcon3D 
        icon={icon} 
        color={color} 
        percentage={percentage} 
        isVisible={isVisible} 
      />
      
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-purple-500/10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

// Experience Timeline
const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Led development of enterprise-scale applications, focusing on cloud architecture and team leadership.',
      tech: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Creative Solutions Ltd.',
      description: 'Developed user-friendly web applications and collaborated with cross-functional teams.',
      tech: ['Vue.js', 'Express', 'MySQL']
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Web Design Co.',
      description: 'Focused on building responsive and accessible web interfaces.',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative pl-8 sm:pl-12 border-l-2 border-purple-500/30 space-y-16 my-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {experiences.map((experience, index) => (
        <motion.div 
          key={index}
          className="relative group"
          onHoverStart={() => setActiveIndex(index)}
          onHoverEnd={() => setActiveIndex(null)}
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="relative">
            <div className="absolute -left-14 sm:-left-[4.5rem] w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300 relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-xl text-purple-300 font-medium mb-2">{experience.title}</h4>
              <p className="text-gray-400">{experience.company} - {experience.year}</p>
              <p className="text-gray-300 mt-2">{experience.description}</p>
              <ul className="mt-2 space-y-1">
                {experience.tech.map((tech, idx) => (
                  <li key={idx} className="text-gray-400">• {tech}</li>
                ))}
              </ul>
              <TimelineItemLine isActive={activeIndex === index} />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Komponen Utama AboutSection
const AboutSection = () => {
  const containerRef = useRef(null);
  const { revealVariants, controls } = useScrollReveal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="min-h-screen relative py-20 overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      <ScrollProgressBar />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-400 font-medium tracking-wider uppercase text-sm mb-6 block">
              About Me
            </span>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> Experiences</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate developer with over 5 years of experience in creating seamless digital experiences.
            Specializing in modern web technologies and scalable architecture. <br/>
            <DotLottieReact
            src="https://lottie.host/3c0eb5aa-917b-4596-b8d6-60ba6554b513/Ji51m1WRn4.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <InteractiveSkillCard title="Frontend Development" percentage={95} color="#8B5CF6" icon={SiReact} />
          <InteractiveSkillCard title="Backend Development" percentage={88} color="#EC4899" icon={SiNodedotjs} />
          <InteractiveSkillCard title="UI/UX Design" percentage={90} color="#10B981" icon={SiFigma} />
          <InteractiveSkillCard title="Mobile Development" percentage={85} color="#F59E0B" icon={SiAndroid} />
          <InteractiveSkillCard title="DevOps" percentage={82} color="#3B82F6" icon={SiDocker} />
          <InteractiveSkillCard title="Project Management" percentage={87} color="#6366F1" icon={SiSololearn} />
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">Work Experience</h3>
          <ExperienceTimeline />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-xl text-purple-300 font-medium mb-2">Master's in Computer Science</h4>
                <p className="text-gray-400">Stanford University, 2018-2020</p>
              </li>
              <li>
                <h4 className="text-xl text-purple-300 font-medium mb-2">Bachelor's in Software Engineering</h4>
                <p className="text-gray-400">MIT, 2014-2018</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Interests</h3>
            <ul className="space-y-4">
              {[
                'Artificial Intelligence & Machine Learning',
                'Web3 & Blockchain Technology',
                'Open Source Development',
                'Creative Coding & Generative Art'
              ].map((interest, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <ParallaxElement offset={100}>
          <div className="bg-purple-500/20 w-40 h-40 rounded-full blur-2xl" />
        </ParallaxElement>
        <ParallaxElement offset={100}>
          <div className="bg-blue-500/20 w-60 h-60 rounded-full blur-2xl" />
        </ParallaxElement>
      </div>

      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Let's Work Together</h3>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-medium hover:from-purple-700 hover:to-purple-900 transition-colors shadow-lg shadow-purple-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutSection;