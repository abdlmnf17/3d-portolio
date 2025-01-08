import React from 'react';
import { motion } from 'framer-motion';

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

export default TimelineItemLine;