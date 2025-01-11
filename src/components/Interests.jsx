import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaEthereum, 
  FaCode, 
  FaPaintBrush, 
  FaLightbulb, 
  FaRobot, 
  FaCube, 
  FaPalette,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaPlane,
  FaBookReader,
  FaMountain,
  FaGuitar,
  FaFilm
} from 'react-icons/fa';

const InterestsAndHobbies = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('interests');

  const interests = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: <FaBrain className="w-6 h-6" />,
      hoverIcon: <FaRobot className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      description: 'Exploring neural networks, deep learning, and AI applications'
    },
    {
      title: 'Web3 & Blockchain Technology',
      icon: <FaEthereum className="w-6 h-6" />,
      hoverIcon: <FaCube className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Developing decentralized applications and smart contracts'
    },
    {
      title: 'Open Source Development',
      icon: <FaCode className="w-6 h-6" />,
      hoverIcon: <FaLightbulb className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Contributing to community projects and sharing knowledge'
    },
    {
      title: 'Creative Coding & Generative Art',
      icon: <FaPaintBrush className="w-6 h-6" />,
      hoverIcon: <FaPalette className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      description: 'Creating algorithmic art and interactive experiences'
    }
  ];

  const hobbies = [
    {
      title: 'Gaming',
      icon: <FaGamepad className="w-6 h-6" />,
      hoverIcon: <FaFilm className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      description: 'Playing strategy and RPG games'
    },
    {
      title: 'Music Production',
      icon: <FaMusic className="w-6 h-6" />,
      hoverIcon: <FaGuitar className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-500',
      description: 'Creating electronic music and learning instruments'
    },
    {
      title: 'Photography',
      icon: <FaCamera className="w-6 h-6" />,
      hoverIcon: <FaMountain className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      description: 'Capturing landscapes and street photography'
    },
    {
      title: 'Travel & Reading',
      icon: <FaPlane className="w-6 h-6" />,
      hoverIcon: <FaBookReader className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Exploring new places and diving into books'
    }
  ];

  const getRandomAnimation = () => {
    const animations = [
      { 
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { type: 'spring', stiffness: 100 }
      },
      { 
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { type: 'spring', bounce: 0.5 }
      },
      { 
        initial: { opacity: 0, rotate: -20 },
        animate: { opacity: 1, rotate: 0 },
        transition: { type: 'spring', stiffness: 80 }
      }
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .card {
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .card:hover .icon-container {
            animation: pulse 2s infinite;
          }

          .card:hover .main-icon {
            animation: float 3s infinite;
          }

          .card:hover .hover-icon {
            animation: float 3s infinite reverse;
          }

          .hover-icon {
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .card:hover .hover-icon {
            opacity: 1;
          }

          .card:hover .main-icon {
            opacity: 0;
          }

          .tab-button {
            transition: all 0.3s ease;
          }

          .tab-button.active {
            background: rgba(255, 255, 255, 0.1);
          }

          .description {
            max-height: 0;
            opacity: 0;
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .card:hover .description {
            max-height: 100px;
            opacity: 1;
            margin-top: 0.5rem;
          }
        `}
      </style>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Interests
        </span>
        <span className="text-white"> & </span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Hobbies
        </span>
      </motion.h2>

      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('interests')}
          className={`tab-button px-6 py-3 rounded-full text-white font-medium ${
            activeTab === 'interests' ? 'active' : ''
          }`}
        >
          Interests
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('hobbies')}
          className={`tab-button px-6 py-3 rounded-full text-white font-medium ${
            activeTab === 'hobbies' ? 'active' : ''
          }`}
        >
          Hobbies
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {(activeTab === 'interests' ? interests : hobbies).map((item, index) => {
          const randomAnimation = getRandomAnimation();
          return (
            <motion.div
              key={index}
              initial={randomAnimation.initial}
              whileInView={randomAnimation.animate}
              transition={randomAnimation.transition}
              className="card rounded-2xl p-6 border border-white/10 relative overflow-hidden group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="flex items-start space-x-4 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`icon-container relative w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <div className="absolute inset-0 bg-black opacity-20 rounded-xl" />
                  <div className="main-icon text-white">
                    {item.icon}
                  </div>
                  <div className="hover-icon absolute inset-0 flex items-center justify-center text-white">
                    {item.hoverIcon}
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                  <div className="description text-gray-400 text-sm">
                    {item.description}
                  </div>
                </div>
              </div>

              <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl -z-10 transition-opacity duration-300 group-hover:opacity-20`} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default InterestsAndHobbies;