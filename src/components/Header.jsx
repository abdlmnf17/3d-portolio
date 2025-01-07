import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      const offset = homeSection?.offsetTop + homeSection?.offsetHeight;
      setShowHeader(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set mounted after component mounts to trigger entrance animation
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 max-w-2xl z-50 transition-all duration-300 ease-in-out
        ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <header className="bg-white shadow-lg rounded-full">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/public/adam-b.png" 
                  alt="Logo" 
                  className="h-8 w-8 rounded-full shadow-sm"
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-200">About</a>
                <a href="#projects" className="text-gray-700 hover:text-black transition-colors duration-200">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-black transition-colors duration-200">Contact</a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? '✕' : '☰'}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
              ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <nav className="py-3 mt-2 bg-white rounded-2xl shadow-inner">
                <div className="space-y-1">
                  <a href="#home" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-50 transition-colors duration-200">Home</a>
                  <a href="#about" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-50 transition-colors duration-200">About</a>
                  <a href="#projects" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-50 transition-colors duration-200">Projects</a>
                  <a href="#contact" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-50 transition-colors duration-200">Contact</a>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;