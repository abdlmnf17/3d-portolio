import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillIcon3D from './SkillIcon3D';

const InteractiveSkillCard = ({ title, color, icon: Icon }) => {
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
    <div className="relative p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl animate-border-rotate">
      <motion.div
        ref={cardRef}
        className={`relative overflow-hidden bg-black rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-xl'}`}
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
          icon={Icon} 
          color={color}
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
      {/* Add the styles for animated border */}
      <style jsx>{`
        .animate-border-rotate {
          background: linear-gradient(45deg, #ff007a, #7928ca, #ff0080);
          background-size: 400% 400%;
          animation: gradient-rotate 3s ease infinite;
          border-radius: 1rem;
        }

        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSkillCard;