import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TimelineItemLine from './TimelineItemLine';

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const experiences = [
    {
      year: '2023',
      title: 'The Indonesia National Contest',
      company: 'Jakarta, Indonesia',
      description: 'Competed in solving challenging algorithmic problems, enhancing my coding abilities.',
      type: 'Competition'
    },
    {
      year: '2022 - Present',
      title: 'BINUS Teach For Indonesia Community Services',
      company: 'Jakarta, Indonesia',
      description: 'EcoBrick program to tackle plastic waste "One Action One Hope." Awareness campaign about Cyberbullying for children in orphanages. Introducing the importance of traditional batik culture to the millennial generation.',
      type: 'Volunteer'
    },
    {
      year: '2022',
      title: 'BINUS Klifonara Benchmarking',
      company: 'Jakarta, Indonesia',
      description: 'Built relationships with media and sponsors, enhancing event exposure and future collaboration opportunities. Created and implemented communication plans that boosted event visibility and attendee engagement.',
      type: 'Public Relation'
    },
    {
      year: '2020',
      title: 'Hackathon "Indonesia Maju HackFest"',
      company: 'Depok, Indonesia',
      description: 'Contributed ideas for innovative tech solutions. Sharing knowledge on coding practices and problem-solving strategies',
      type: 'Competition'
    },
    {
      year: '2018 - 2020',
      title: 'Google Developer Student Club',
      company: 'Depok, Indonesia',
      description: 'Led community projects using Google technologies. Utilized Google Cloud and Flutter to develop applications.',
      type: 'Content Creator'
    },
    {
      year: '2018 - 2019',
      title: 'COMPFEST',
      company: 'Depok, Indonesia',
      description: 'Assisted in managing national tech competitions. Participated in developing digital products for events.',
      type: 'Competition'
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative pl-8 sm:pl-12 border-l-2 border-purple-500/30 space-y-16 my-16"
    >
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="relative group"
          onHoverStart={() => setActiveIndex(index)}
          onHoverEnd={() => setActiveIndex(null)}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="relative">
            <div className="absolute -left-14 sm:-left-[4.5rem] w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300 relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl text-purple-300 font-medium">{experience.title}</h4>
                <span className="text-sm text-purple-400 px-2 py-1 bg-purple-500/10 rounded">
                  {experience.type}
                </span>
              </div>
              <p className="text-gray-400">{experience.company} - {experience.year}</p>
              <p className="text-gray-300 mt-2 whitespace-pre-line">{experience.description}</p>
              <TimelineItemLine isActive={activeIndex === index} />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceTimeline;