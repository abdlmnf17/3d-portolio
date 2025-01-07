import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = ({ personalInfo }) => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-orange-50 to-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors" placeholder="Your message" />
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Send Message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-orange-500" />
                  <span className="text-gray-600">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-orange-500" />
                  <span className="text-gray-600">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-orange-500" />
                  <span className="text-gray-600">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;