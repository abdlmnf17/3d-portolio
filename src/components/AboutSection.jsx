import React, { useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import ScrollProgressBar from './ScrollProgressBar';
import Education from './Education';
import ExperienceTimeline from './ExperienceTimeline';
import Interests from './Interests';
import ContactSection from './ContactSection';
import { 
  SiWhatsapp, 
  SiGmail, 
  SiLinkedin, 
  SiGithub,
  SiReact, 
  SiNodedotjs, 
  SiFigma, 
  SiAndroid, 
  SiSololearn, 
  SiDocker 
} from 'react-icons/si';
import { FaDownload } from 'react-icons/fa';
import ParallaxElement from './ParallaxElement';
import PortfolioSection from './ProjectsSection';

// SkillCard Component remains the same
const SkillCard = ({ title, icon: Icon, color, description, technologies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm border border-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start space-x-4">
        <div 
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-300">Key Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          border: `2px solid ${color}`,
          opacity: isHovered ? 0.5 : 0,
        }}
        initial={false}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Social Media Icons Component
const SocialIcons = () => {
  const socialLinks = [
    { icon: SiWhatsapp, href: "https://wa.me/+6285775450507", color: "hover:text-green-500" },
    { icon: SiGmail, href: "mailto:adamilham3004@gmail.com", color: "hover:text-red-500" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/adamdaryilham", color: "hover:text-blue-600" },
    { icon: SiGithub, href: "https://github.com/adamilham-dev", color: "hover:text-gray-100" }
  ];

  return (
    <motion.div 
      className="flex justify-center space-x-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition duration-300 transform hover:scale-110 ${social.color}`}
          whileHover={{ y: -3 }}
        >
          <social.icon size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
};

// Download CV Button Component
const DownloadButton = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/1Pk_KyToz8CZf1R6MjkHEjn0PXMSe7Ixa/view" // Replace with actual CV path
      download
      className="inline-flex items-center px-6 py-3 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FaDownload className="mr-2" />
      Download CV
    </motion.a>
  );
};

// Main AboutSection Component
const AboutSection = () => {
  const containerRef = useRef(null);
  
  const skills = [
    {
      title: "Frontend Development",
      color: "#8B5CF6",
      icon: SiReact,
      description: "Building responsive and interactive user interfaces with modern frameworks and best practices for optimal user experience.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      color: "#EC4899",
      icon: SiNodedotjs,
      description: "Developing robust server-side applications with focus on scalability, security, and efficient data management.",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "UI/UX Design",
      color: "#10B981",
      icon: SiFigma,
      description: "Creating intuitive and visually appealing interfaces while ensuring excellent user experience through research and testing.",
      technologies: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Mobile Development",
      color: "#F59E0B",
      icon: SiAndroid,
      description: "Building native and cross-platform mobile applications with focus on performance and user engagement.",
      technologies: ["React Native", "Android SDK", "iOS Development", "Flutter", "Mobile UI"]
    },
    {
      title: "DevOps",
      color: "#3B82F6",
      icon: SiDocker,
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployment and scaling.",
      technologies: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins"]
    },
    {
      title: "Project Management",
      color: "#6366F1",
      icon: SiSololearn,
      description: "Leading technical projects with agile methodologies while ensuring efficient team collaboration and delivery.",
      technologies: ["Agile", "Scrum", "Jira", "Risk Management", "Team Leadership"]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative py-20 overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      <ScrollProgressBar />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-400 font-medium tracking-wider uppercase text-sm mb-6 block">
              About Me
            </span>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight" id="about">
              Adam Dary
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> Ilham</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate developer with over 5 years of experience in creating seamless digital experiences. Specializing in modern web technologies and scalable architecture.
          </motion.p>

          <div className="mt-8">
            <DotLottieReact
              src="https://lottie.host/3c0eb5aa-917b-4596-b8d6-60ba6554b513/Ji51m1WRn4.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
            <SocialIcons />
            <DownloadButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        
        <div className="mb-24">
          <ExperienceTimeline />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <Education />
          <Interests />
        </div>

        <ParallaxElement offset={100}>
          <div className="bg-purple-500/20 w-40 h-40 rounded-full blur-2xl" />
        </ParallaxElement>
        <ParallaxElement offset={100}>
          <div className="bg-blue-500/20 w-60 h-60 rounded-full blur-2xl" id="projects" />
        </ParallaxElement>

        <PortfolioSection />

        <ContactSection />

        <footer className="mt-32 text-center text-gray-400">
          <p className="text-sm">© {new Date().getFullYear()} Adam Dary Ilham. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutSection;