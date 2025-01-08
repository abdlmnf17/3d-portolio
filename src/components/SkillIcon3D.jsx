import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon3D = ({ icon: Icon, color, isVisible }) => {
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
        
      </motion.div>
    </motion.div>
  );
};

export default SkillIcon3D;