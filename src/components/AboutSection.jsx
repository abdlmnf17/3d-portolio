import React, { useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import ScrollProgressBar from './ScrollProgressBar';
import Education from './Education';
import ExperienceTimeline from './ExperienceTimeline';
import InteractiveSkillCard from './InteractiveSkillCard';
import Interests from './Interests';
import { 
  SiWhatsapp, 
  SiGmail, 
  SiLinkedin, 
  SiGithub 
} from 'react-icons/si';
import ParallaxElement from './ParallaxElement';
import { SiReact, SiNodedotjs, SiFigma, SiAndroid, SiSololearn, SiDocker } from 'react-icons/si';
import PortfolioSection from './ProjectsSection';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(
      `Hello,\n\nMy name is ${name}.\nMy email is ${email}.\n\nMessage:\n${message}`
    );

    // Open default email client with pre-filled content
    window.location.href = `mailto:abdlmnf17@gmail.com?subject=Contact%20Form%20Submission&body=${encodedMessage}`;
  };

  return (
    <motion.div
      className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold text-white mb-8 tracking-tight">Get In Touch</h3>
        <p className="text-lg text-gray-300 mb-6">We'd love to hear from you! Please fill out the form below.</p>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
            rows="4"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-medium hover:from-purple-700 hover:to-purple-900 transition-colors shadow-lg shadow-purple-500/25 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center" id='contact'>
        <h3 className="text-4xl font-bold text-white mb-8 tracking-tight">Contact Info</h3>
        <p className="text-lg text-gray-300 mb-4">Or reach us at:</p>
        <div className="text-gray-400 mb-6">
          <p className="text-sm">Phone: +6285775450507</p>
          <p className="text-sm">Email: adamilham3004@gmail.com</p>
          <p className="text-sm">LinkedIn: <a href="https://www.linkedin.com/in/adamdaryilham" className="text-purple-400 hover:underline">www.linkedin.com/in/adamdaryilham</a></p>
          <p className="text-sm">GitHub: <a href="https://github.com/adamilham-dev" className="text-purple-400 hover:underline">https://github.com/adamilham-dev</a></p>
          <p className="text-sm">Address: Jl. Pondok Kelapa Timur Blok E4 No. 8, Pondok Kelapa, Duren Sawit, Jakarta Timur</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a 
            href="https://wa.me/+6285775450507" 
            className="text-gray-400 hover:text-green-500 transition duration-300"
          >
            <SiWhatsapp size={30} />
          </a>
          <a 
            href="mailto:adamilham3004@gmail.com" 
            className="text-gray-400 hover:text-red-500 transition duration-300"
          >
            <SiGmail size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/adamdaryilham" 
            className="text-gray-400 hover:text-blue-600 transition duration-300"
          >
            <SiLinkedin size={30} />
          </a>
          <a 
            href="https://github.com/adamilham-dev" 
            className="text-gray-400 hover:text-black transition duration-300"
          >
            <SiGithub size={30} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);

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
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight" id='about'>
              Crafting Digital
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> Experiences</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate developer with over 5 years of experience in creating seamless digital experiences. Specializing in modern web technologies and scalable architecture. <br/>
            <DotLottieReact
              src="https://lottie.host/3c0eb5aa-917b-4596-b8d6-60ba6554b513/Ji51m1WRn4.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
            <br/>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <InteractiveSkillCard title="Frontend Development" color="#8B5CF6" icon={SiReact} />
          <InteractiveSkillCard title="Backend Development" color="#EC4899" icon={SiNodedotjs} />
          <InteractiveSkillCard title="UI/UX Design" color="#10B981" icon={SiFigma} />
          <InteractiveSkillCard title="Mobile Development" color="#F59E0B" icon={SiAndroid} />
          <InteractiveSkillCard title="DevOps" color="#3B82F6" icon={SiDocker} />
          <InteractiveSkillCard title="Project Management" color="#6366F1" icon={SiSololearn} />
        </div>
        
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">Community Involvements</h3>
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
          <div className="bg-blue-500/20 w-60 h-60 rounded-full blur-2xl" id='projects' />
        </ParallaxElement>

        <PortfolioSection />

        <ContactSection />

        {/* Footer Section */}
        <footer className="mt-32 text-center text-gray-400">
          <p className="text-sm">© {new Date().getFullYear()} Adam Dary Ilham. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutSection;