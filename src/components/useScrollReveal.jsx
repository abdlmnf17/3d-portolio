import { useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';

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
  }, [controls, scrollYProgress]);

  return { 
    revealVariants, 
    controls 
  };
};

export default useScrollReveal;