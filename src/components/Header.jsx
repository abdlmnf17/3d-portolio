import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Projects', href: '#projects', icon: '💻' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  const menuVariants = {
    hidden: { 
      x: "100%",
      transition: { duration: 0.3 }
    },
    visible: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: isScrolled ? 1 : 0, 
        y: isScrolled ? 0 : -50 
      }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 
        ${isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          <img 
            src='/public/adam.png' 
            className="w-15 h-12 object-cover" 
            alt="Logo"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none relative z-50"
        >
          <div className="relative w-6 h-5">
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
                backgroundColor: isMenuOpen ? '#fff' : 'currentColor'
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white transform origin-left"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                backgroundColor: isMenuOpen ? '#fff' : 'currentColor'
              }}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? - 8 : 0,
                backgroundColor: isMenuOpen ? '#fff' : 'currentColor'
              }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute right-0 top-0 bottom-0 w-[80%] bg-gray-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20 space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <div className="flex items-center space-x-4 bg-gray-800/50 hover:bg-purple-900/30 rounded-xl p-4 transition-colors duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg text-white font-medium">{item.name}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;