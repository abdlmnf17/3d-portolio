import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import HomeSection from '../components/HomeSection';
import AboutSection from './AboutSection';

gsap.registerPlugin(TextPlugin);

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const quoteRef = useRef(null);
  const loadingBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  
  const quotes = [
    "Design is not just what it looks like and feels like. Design is how it works.",
    "Simplicity is the ultimate sophistication.",
    "Innovation distinguishes between a leader and a follower.",
    "Stay hungry, stay foolish.",
    "The best way to predict the future is to create it."
  ];

  useEffect(() => {
    // Randomly select a quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);

    // Split text for name animation
    const nameParts = nameRef.current.textContent.split('').map((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.className = 'char-span';
      return span;
    });

    // Clear and append spans
    nameRef.current.textContent = '';
    nameParts.forEach(span => nameRef.current.appendChild(span));

    const tl = gsap.timeline();

    // Name animation with shadow effect
    tl.fromTo(nameParts, 
      {
        opacity: 0,
        y: 50,
        textShadow: "0 0 0 rgba(255, 255, 255, 0)"
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
      }
    )
    .to(nameParts, {
      duration: 2,
      textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    }, "-=0.5");

    // Loading simulation
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        // Trigger quote animation at 50%
        if (newProgress === 50) {
          setShowQuote(true);
        }
        return newProgress;
      });
    }, 30);

    return () => {
      clearInterval(loadingInterval);
      tl.kill();
    };
  }, []);

  // Quote animation when showQuote becomes true
  useEffect(() => {
    if (showQuote && quoteRef.current) {
      gsap.fromTo(quoteRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, [showQuote]);

  // Exit animation
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 100);
        }
      });

      tl.to([".char-span", quoteRef.current], {
        opacity: 0,
        y: -30,
        stagger: 0.02,
        duration: 0.4
      })
      .to(loadingBarRef.current, {
        opacity: 0,
        duration: 0.3
      }, "-=0.3")
      .to(containerRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut"
      });
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center px-4 max-w-2xl">
        <h1 
          ref={nameRef}
          className="text-white text-6xl font-bold mb-12 tracking-wider [&>span]:mr-[0.1em]"
        >
          Adam  Darry  Ilham
        </h1>
        
        <div className="h-24 flex items-center justify-center overflow-hidden">
          <p 
            ref={quoteRef}
            className="text-white text-xl italic font-light opacity-0"
          >
            "{currentQuote}"
          </p>
        </div>

        <div ref={loadingBarRef} className="mt-12">
          <div className="w-80 h-1.5 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              style={{
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}
            />
          </div>
          <p className="text-white text-sm mt-3 font-light tracking-wider">
            {progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <HomeSection scrollY={scrollY} />
            <AboutSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;