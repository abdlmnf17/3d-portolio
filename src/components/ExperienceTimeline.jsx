import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaHeart, 
  FaComments, 
  FaCode, 
  FaAward, 
  FaUsers,
  FaRocket,
  FaLaptopCode,
  FaDatabase,
  FaCloudUploadAlt,
  FaBrain,
  FaProjectDiagram
} from 'react-icons/fa';

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [animationOrder, setAnimationOrder] = useState([]);

  useEffect(() => {
    const order = experiences.map((_, index) => index)
      .sort(() => Math.random() - 0.5);
    setAnimationOrder(order);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      {
        root: null,
        rootMargin: '-20px',
        threshold: 0.2
      }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getAnimationDelay = (index) => {
    const orderIndex = animationOrder.indexOf(index);
    return orderIndex * 0.2;
  };

  const getIconForType = (type) => {
    switch (type.toLowerCase()) {
      case 'competition':
        return <FaTrophy className="w-5 h-5" />;
      case 'volunteer':
        return <FaHeart className="w-5 h-5" />;
      case 'public relation':
        return <FaComments className="w-5 h-5" />;
      case 'content creator':
        return <FaCode className="w-5 h-5" />;
      case 'tech community':
        return <FaProjectDiagram className="w-5 h-5" />;
      default:
        return <FaAward className="w-5 h-5" />;
    }
  };

  const experiences = [
    {
      year: '2023',
      title: 'The Indonesia National Contest',
      company: 'Jakarta, Indonesia',
      description: 'Competed in solving challenging algorithmic problems, enhancing my coding abilities.',
      type: 'Competition',
      color: {
        dot: 'from-pink-500 to-rose-500',
        border: 'border-pink-500 hover:border-rose-500',
        line: 'from-pink-500 to-rose-500'
      },
      icon: FaRocket
    },
    {
      year: '2022 - Present',
      title: 'BINUS Teach For Indonesia Community Services',
      company: 'Jakarta, Indonesia',
      description: 'EcoBrick program to tackle plastic waste "One Action One Hope." Awareness campaign about Cyberbullying for children in orphanages.',
      type: 'Volunteer',
      color: {
        dot: 'from-green-500 to-emerald-500',
        border: 'border-green-500 hover:border-emerald-500',
        line: 'from-green-500 to-emerald-500'
      },
      icon: FaHeart
    },
    {
      year: '2022',
      title: 'BINUS Klifonara Benchmarking',
      company: 'Jakarta, Indonesia',
      description: 'Built relationships with media and sponsors, enhancing event exposure and future collaboration opportunities.',
      type: 'Public Relation',
      color: {
        dot: 'from-blue-500 to-cyan-500',
        border: 'border-blue-500 hover:border-cyan-500',
        line: 'from-blue-500 to-cyan-500'
      },
      icon: FaCloudUploadAlt
    },
    {
      year: '2020',
      title: 'Hackathon "Indonesia Maju HackFest"',
      company: 'Depok, Indonesia',
      description: 'Contributed ideas for innovative tech solutions. Sharing knowledge on coding practices and problem-solving strategies',
      type: 'Competition',
      color: {
        dot: 'from-purple-500 to-violet-500',
        border: 'border-purple-500 hover:border-violet-500',
        line: 'from-purple-500 to-violet-500'
      },
      icon: FaBrain
    },
    {
      year: '2018 - 2020',
      title: 'Google Developer Student Club',
      company: 'Depok, Indonesia',
      description: 'Led community projects using Google technologies. Utilized Google Cloud and Flutter to develop applications.',
      type: 'Tech Community',
      color: {
        dot: 'from-yellow-500 to-amber-500',
        border: 'border-yellow-500 hover:border-amber-500',
        line: 'from-yellow-500 to-amber-500'
      },
      icon: FaLaptopCode
    },
    {
      year: '2018 - 2019',
      title: 'COMPFEST',
      company: 'Depok, Indonesia',
      description: 'Assisted in managing national tech competitions. Participated in developing digital products for events.',
      type: 'Competition',
      color: {
        dot: 'from-red-500 to-orange-500',
        border: 'border-red-500 hover:border-orange-500',
        line: 'from-red-500 to-orange-500'
      },
      icon: FaDatabase
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4"
      ref={containerRef}
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-center mb-16 text-white"
      >
        Community
        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
          {" "}Involvements
        </span>
      </motion.h2>

      <div className="relative pl-8 sm:pl-12 py-16">
        {/* Gradien Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent opacity-50" />
        
        {experiences.map((experience, index) => {
          const randomAnimation = {
            initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            animate: { opacity: 1, x: 0 },
            transition: { 
              type: 'spring', 
              stiffness: 100,
              delay: getAnimationDelay(index)
            }
          };

          return (
            <motion.div
              key={index}
              initial={randomAnimation.initial}
              whileInView={randomAnimation.animate}
              transition={randomAnimation.transition }
              whileHover={{ scale: 1.02 }}
              className={`
                relative 
                mb-16 
                grid 
                grid-cols-12 
                items-center 
                ${index % 2 === 0 ? 'flex-row-reverse' : ''}
              `}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="col-span-1 flex items-center justify-center relative"
                whileHover={{ scale: 1.2 }}
              >
                <div 
                  className={`
                    w-8 
                    h-8 
                    rounded-full 
                    bg-gradient-to-br 
                    ${experience.color.dot} 
                    flex 
                    items-center 
                    justify-center 
                    shadow-lg
                  `}
                >
                  {getIconForType(experience.type)}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className={`
                  col-span-11 
                  bg-white/5 
                  backdrop-blur-xl 
                  rounded-2xl 
                  p-6 
                  border 
                  ${experience.color.border} 
                  shadow-lg 
                  transition-transform 
                  duration-300 
                  hover:-translate-y-2
                `}
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {experience.title}
                </h4>
                <div className="flex items-center text-gray-400 mb-2">
                  <FaUsers className="w-4 h-4 mr-2" />
                  <span>{experience.company}</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {experience.description}
                </p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experience.color.line} text-white`}>
                  {experience.year}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;