import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaGlobeAmericas, 
  FaUniversity, 
  FaGraduationCap
} from 'react-icons/fa';
import { 
  SiReact, 
  SiPython, 
  SiNodedotjs, 
  SiTensorflow
} from 'react-icons/si';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Universitas Bina Nusantara",
      year: "Aug 2022 - Present",
      details: [
        "Advanced Web Development",
        "Machine Learning Specialization",
        "Cloud Computing Fundamentals"
      ],
      icon: FaUniversity,
      color: {
        dot: "from-emerald-500 to-teal-400",
        border: "hover:border-emerald-500",
        text: "text-emerald-400"
      },
      skills: [
        { icon: SiReact, name: "React", color: "text-cyan-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
        { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" }
      ]
    },
    {
      degree: "High School in Science",
      institution: "SMAN 81 Jakarta",
      year: "Jul 2018 - Jul 2021",
      details: [
        "National Science Olympiad Participant",
        "Advanced Mathematics",
        "Scientific Research"
      ],
      icon: FaGraduationCap,
      color: {
        dot: "from-purple-500 to-indigo-400",
        border: "hover:border-purple-500",
        text: "text-purple-400"
      },
      skills: [
        { icon: FaBook, name: "Coding", color: "text-pink-400" },
        { icon: FaGlobeAmericas, name: "Data", color: "text-blue-400" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent p-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center mb-16 text-white"
        >
          Educational 
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
            {" "}Journey
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full opacity-30"></div>

          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className={`
                mb-12 
                grid grid-cols-12 
                gap-4 
                items-center 
                ${index % 2 === 0 ? 'flex-row-reverse' : ''}
              `}
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-1 flex items-center justify-center relative"
              >
                <div 
                  className={`
                    w-8 
                    h-8 
                    rounded-full 
                    bg-gradient-to-br 
                    ${edu.color.dot} 
                    z-20 
                    relative
                    animate-pulse
                  `}
                />
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className={`
                  col-span-11 
                  bg-white/5 
                  backdrop-blur-xl 
                  rounded-2xl 
                  p-6 
                  border 
                  border-white/10 
                  ${edu.color.border}
                  transition-all
                  duration-300
                  group
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-2xl font-bold ${edu.color.text}`}>
                    {edu.degree}
                  </h3>
                  <span 
                    className={`
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm 
                      font-medium 
                      bg-gradient-to-r 
                      ${edu.color.dot} 
                      text-white
                    `}
                  >
                    {edu.year}
                  </span>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <FaGlobeAmericas className={`mr-2 ${edu.color.text}`} />
                  {edu.institution}
                </div>

                <div className="mb-4">
                  {edu.details.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`
                        ${edu.color.text}
                        pl-4 
                        relative 
                        before:absolute 
                        before:left-0 
                        before:top-1/2 
                        before:-translate-y-1/2 
                        before:w-2 
                        before:h-2 
                        before:bg-white/50  
                        before:rounded-full
                      `}
                    >
                      {detail}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1 }} className={`
                        flex 
                        items-center 
                        bg-white/20 
                        ${skill.color} 
                        px-3 
                        py-1 
                        rounded-full 
                        text-sm
                        hover:bg-white/30 transition-all 
                        duration-300
                      `}
                    >
                      <skill.icon className="mr-1" />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;