import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default ScrollProgressBar;