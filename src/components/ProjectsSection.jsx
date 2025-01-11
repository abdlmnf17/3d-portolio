import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobileAlt, 
  FaBrain, 
  FaNetworkWired,
  FaGithub,
  FaLink,
  FaLaptopCode
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiSwift, 
  SiFirebase, 
  SiTensorflow, 
  SiJavascript,
  SiPython,
  SiHtml5
} from 'react-icons/si';

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);


  const projects = [
    {
      title: "Catshop App JollyCat",
      role: "Frontend & Backend Developer",
      date: "Nov 2023 - Jun 2024",
      tech: [SiKotlin, SiFirebase],
      points: [
        "Browse and purchase cat-related products",
        "Google Maps integration",
        "Local data storage"
      ],
      color: {
        gradient: "from-pink-500 to-purple-500",
        bg: "bg-pink-500/10",
        border: "border-gray-700 hover:border-pink-500"
      },
      category: "mobile",
      github: "https://github.com/adamilham-dev/catshop-app",
      image: "https://picsum.photos/200/300?random=1"
    },
    {
      title: "Cancer Detection App",
      role: "AI & Mobile Developer",
      date: "Mar 2024 - Jun 2024",
      tech: [SiSwift, SiTensorflow],
      points: [
        "Cancer detection using ML algorithms",
        "Real-time image analysis",
        "Intuitive medical interface"
      ],
      color: {
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10",
        border: "border-gray-700 hover:border-blue-500"
      },
      category: "ml",
      github: "https://github.com/adamilham-dev/cancer-detection",
      image: "https://picsum.photos/200/300?random=2"
    },
    {
      title: "Willify Music Platform",
      role: "Fullstack Web Developer",
      date: "Apr 2024 - Jul 2024",
      tech: [SiJavascript, SiHtml5],
      points: [
        "Interactive music streaming",
        "Personalized playlist creation",
        "Responsive web design"
      ],
      color: {
        gradient: "from-green-500 to-emerald-500",
        bg: "bg-green-500/10",
        border: "border-gray-700 hover:border-green-500"
      },
      category: "web",
      github: "https://github.com/adamilham-dev/willify-music",
      image: "https://picsum.photos/200/300?random=3"
    },
    {
      title: "DiaryMacro Nutrition App",
      role: "Mobile AI Developer",
      date: "Sep 2024 - Present",
      tech: [SiSwift, SiTensorflow],
      points: [
        "AI-powered nutrition tracking",
        "Meal recognition",
        "Health insights generation"
      ],
      color: {
        gradient: "from-orange-500 to-red-500",
        bg: "bg-orange-500/10",
        border: "border-gray-700 hover:border-orange-500"
      },
      category: "ml",
      github: "https://github.com/adamilham-dev/diarymacro",
      image: "https://picsum.photos/200/300?random=4"
    },
    {
      title: "Accessio IoT Smart Lock",
      role: "IoT Systems Developer",
      date: "Sep 2024 - Present",
      tech: [SiPython, FaNetworkWired],
      points: [
        "Remote lock management",
        "Real-time access monitoring",
        "Secure IoT communication"
      ],
      color: {
        gradient: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-500/10",
        border: "border-gray-700 hover:border-indigo-500"
      },
      category: "iot",
      github: "https://github.com/adamilham-dev/accessio-iot",
      image: "https://picsum.photos/200/300?random=5"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: FaLaptopCode },
    { id: "mobile", label: "Mobile Apps", icon: FaMobileAlt },
    { id: "ml", label: "AI & ML", icon: FaBrain },
    { id: "iot", label: "IoT & Web", icon: FaNetworkWired }
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleProjects(projects);
    } else if (activeCategory === "iot") {
      // Untuk kategori IoT, tampilkan proyek IoT dan Web
      setVisibleProjects(
        projects.filter(p => p.category === "iot" || p.category === "web")
      );
    } else {
      // Untuk kategori lainnya, filter sesuai kategori
      setVisibleProjects(
        projects.filter(p => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-transparent py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center mb-12 text-white"
        >
          Project 
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
            {" "}Showcase
          </span>
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 sm:space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full 
                transition-all duration-300 mb-2
                ${activeCategory === category.id 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'}
                min-w-[120px] 
              `}
            >
              <category.icon className="w-5 h-5" />
              <span className="text-sm">{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }} 
              className={`
                relative 
                overflow-hidden 
                rounded-lg 
                border 
                ${project.color.border}
                transition-all 
                duration-300 
                transform 
                hover:scale-105
              `}
            >
              {/* Background dan Overlay */}
              <div className={`absolute inset-0 ${project.color.bg} opacity-30`} />
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20" 
              />

              {/* Konten Utama */}
              <div className="relative p-6 z-10">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.role} • {project.date}</p>
                
                {/* Tech Icons */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((TechIcon, i) => (
                    <TechIcon 
                      key={i} 
                      className="w-5 h-5 text-purple-300 hover:text-white transition-colors" 
                    />
                  ))}
                </div>

                {/* Project Points */}
                <ul className="mt-4 text-gray-300 text-sm space-y-1">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-purple-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-4 flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">
                    <FaGithub className="inline-block" /> GitHub
                  </a>
                  <a href="#" className="text-purple-300 hover:underline">
                    <FaLink className="inline-block" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;