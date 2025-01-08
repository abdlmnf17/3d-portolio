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
  );
};

export default InteractiveSkillCard;