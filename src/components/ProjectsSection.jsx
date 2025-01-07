import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, rotateY: 20, translateZ: -100 }} // Animasi masuk dengan efek 3D
              whileInView={{ opacity: 1, rotateY: 0, translateZ: 0 }} // Animasi tetap (masuk saat terlihat)
              exit={{ opacity: 0, rotateY: 20, translateZ: -100 }} // Animasi keluar (hilang saat scroll keluar)
              viewport={{ once: false, amount: 0.3 }} // Menentukan kapan animasi masuk/dan keluar
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} // Durasi dan efek transisi dengan delay
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105" // Efek zoom saat hover
                />
              </div>
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-semibold mb-2 text-gray-800"
                  initial={{ y: 20, opacity: 0 }} // Animasi masuk untuk judul
                  whileInView={{ y: 0, opacity: 1 }} // Masuk saat terlihat
                  transition={{ duration: 0.5, delay: 0.2 }} // Durasi dan delay
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-4"
                  initial={{ y: 20, opacity: 0 }} // Animasi masuk untuk deskripsi
                  whileInView={{ y: 0, opacity: 1 }} // Masuk saat terlihat
                  transition={{ duration: 0.5, delay: 0.3 }} // Durasi dan delay
                >
                  {project.description}
                </motion.p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;