import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

const Interests = () => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    whileHover ={{ scale: 1.05 }}
  >
    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Interests</h3>
    <ul className="space-y-4">
      {[
        'Artificial Intelligence & Machine Learning',
        'Web3 & Blockchain Technology',
        'Open Source Development',
        'Creative Coding & Generative Art'
      ].map((interest, index) => (
        <li key={index} className="flex items-center space-x-3 text-gray-300">
          <FaLightbulb className="text-purple-500" />
          <span>{interest}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Interests;