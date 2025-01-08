import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default ParallaxElement;