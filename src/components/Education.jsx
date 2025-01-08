import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Universitas Bina Nusantara - Jakarta, Indonesia",
      year: "Aug 2022 - Aug 2026 (Expected)",
      details: [
        "GPA: 3.35/4.00",
        "Coursework: Mobile Application, Web-Based Application, Software Engineer, Artificial Intelligence, Data Science"
      ]
    },
    {
      degree: "Secondary School in MIPA",
      institution: "SMAN 81 JAKARTA - Jakarta, Indonesia", 
      year: "Jul 2018 - Jul 2021",
      details: [
        "GPA: 3.87/4.00",
        "Provincial Representative in the National Science Olympiad (O2SN) for Natural Sciences, 2019"
      ]
    }
  ];

const Education = () => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10 overflow-hidden"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h3>
    <div className="relative">
      <div className="parallax-slider">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="parallax-slide flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FaGraduationCap className="text-purple-500" />
            <div>
              <h4 className="text-xl text-purple-300 font-medium mb-2">{edu.degree}</h4>
              <p className="text-gray-400">{edu.institution}, {edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Education;