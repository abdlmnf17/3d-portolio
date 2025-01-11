import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaUser , 
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaYoutube
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Menggunakan mailto untuk mengirim email
    const subject = "Contact Form Submission from " + formData.name;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:adamilham.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Reset form setelah mengirim
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/adam-ilham-a15b8b1b3/",
      color: "text-blue-600 hover:text-blue-700",
      bgColor: "bg-blue-100"
    },
    {
      icon: FaGithub,
      url: "https://github.com/adamilham-dev",
      color: "text-gray-800 hover:text-gray-900",
      bgColor: "bg-gray-100"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/adamilham_dev",
      color: "text-blue-400 hover:text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/adamilham.dev",
      color: "text-pink-500 hover:text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      icon: FaDiscord,
      url: "https://discord.com/users/adamilham",
      color: "text-purple-600 hover:text-purple-700",
      bgColor: "bg-purple-100"
    },
    {
      icon: FaTelegram,
      url: "https://t.me/adamilham",
      color: "text-blue-500 hover:text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@adamilham",
      color: "text-red-600 hover:text-red-700",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-transparent py-16 px-4 relative"
      id='contact'
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 opacity-90 z-[-1]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center mb-16 text-white"
        >
          Contact 
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
            {" "}Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all pl-10"
                  placeholder="Your Name"
                  required
                />
                <FaUser  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all pl-10"
                  placeholder="Your Email"
                  required
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all pl-10"
                  placeholder="Your Message"
                  rows="4"
                  required
                />
                <FaCommentDots className="absolute left-3 top-4 transform text-gray-400" />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Media Links and Additional Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-center text-white mb-6">Connect with Me</h3>
            <p className="text-white mb-4 text-center">
              I would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out through the form or any of the social media platforms below.
            </p>
            <p className="text-white mb-4 text-center">
              You can also follow me for updates on my latest projects, tutorials, and more. Let's stay connected!
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${link.bgColor} ${link.color} transition-colors`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;