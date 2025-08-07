import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, Mail, MapPin, Phone, Github, Linkedin, Twitter, Target, Lightbulb, Award } from 'lucide-react';

const PhoenixLanding = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'vision', 'ideas', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Forge fire ember particles for logo animation
  const emberVariants = {
    initial: { 
      scale: 0, 
      opacity: 0,
      x: 0,
      y: 0,
      rotate: 0
    },
    animate: (i) => ({
      scale: [0, 0.6 + Math.random() * 0.8, 0],
      opacity: [0, 0.95, 0],
      x: [0, (Math.random() - 0.5) * 100],
      y: [0, -150 - Math.random() * 100],
      rotate: [0, Math.random() * 720],
      transition: {
        duration: 1 + Math.random() * 2,
        repeat: Infinity,
        delay: i * 0.15,
        ease: "easeOut"
      }
    })
  };

  // Spark effect for intense forge fire
  const sparkVariants = {
    initial: { 
      scale: 0, 
      opacity: 0,
      x: 0,
      y: 0
    },
    animate: (i) => ({
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
      x: [0, (Math.random() - 0.5) * 60],
      y: [0, -80 - Math.random() * 40],
      transition: {
        duration: 0.8 + Math.random() * 0.8,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const ideas = [
    {
      title: 'AI Ethics Workshop Series',
      description: 'Monthly workshops exploring the ethical implications of AI development and deployment in various industries.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'ML Model Competition',
      description: 'Semester-long competition where teams build and optimize machine learning models for real-world problems.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Research Paper Club',
      description: 'Weekly sessions discussing cutting-edge research papers in AI/ML, fostering academic discourse.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Industry Collaboration',
      description: 'Partnership projects with local tech companies to solve practical AI challenges.',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : ''}`}>
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
                        <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative inline-block">
                <img src="/PHOENIX logo.png" alt="Phoenix Logo" className="w-55 h-28 inline-block mt-0" />
                
                {/* Forge fire ember particles from wings */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${30 + Math.random() * 40}%`,
                      width: `${2 + Math.random() * 6}px`,
                      height: `${2 + Math.random() * 6}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 20%, #ff6b35 50%, #ff4500 80%, #cc3300 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 8px #ffff00, 0 0 16px #ff6b35, 0 0 24px #ff4500'
                    }}
                    variants={emberVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  />
                ))}
                
                {/* Intense sparks from wings */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`spark-${i}`}
                    className="absolute"
                    style={{
                      left: `${25 + Math.random() * 50}%`,
                      top: `${35 + Math.random() * 30}%`,
                      width: `${1 + Math.random() * 2}px`,
                      height: `${1 + Math.random() * 2}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 50%, #ff6b35 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 4px #ffffff, 0 0 8px #ffff00'
                    }}
                    variants={sparkVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  />
                ))}
                
                {/* Rising forge embers from wing tips */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`rising-${i}`}
                    className="absolute"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      bottom: `${10 + Math.random() * 20}%`,
                      width: `${1 + Math.random() * 4}px`,
                      height: `${1 + Math.random() * 4}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 30%, #ff6b35 70%, #ff4500 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 6px #ffff00, 0 0 12px #ff6b35'
                    }}
                    animate={{
                      y: [0, -120 - Math.random() * 80],
                      x: [0, (Math.random() - 0.5) * 60],
                      opacity: [0, 0.9, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, Math.random() * 720]
                    }}
                    transition={{
                      duration: 1.5 + Math.random() * 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Vision', 'Ideas', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-orange-400 ${activeSection === item.toLowerCase() ? 'text-orange-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto px-6 pb-16 md:pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              className="w-60 h-60 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img src="/PHOENIX ICON.png" alt="Phoenix Logo" className="w-55 h-55" />
                
                {/* Fire glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-md"></div>
              </div>
              
                              {/* Forge fire ember particles from hero wings */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${25 + Math.random() * 50}%`,
                      width: `${3 + Math.random() * 8}px`,
                      height: `${3 + Math.random() * 8}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 15%, #ff6b35 45%, #ff4500 75%, #cc3300 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 10px #ffff00, 0 0 20px #ff6b35, 0 0 30px #ff4500'
                    }}
                    variants={emberVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  />
                ))}
                
                {/* Intense sparks from hero wings */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`hero-spark-${i}`}
                    className="absolute"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${30 + Math.random() * 40}%`,
                      width: `${1 + Math.random() * 3}px`,
                      height: `${1 + Math.random() * 3}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 40%, #ff6b35 80%, #ff4500 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 6px #ffffff, 0 0 12px #ffff00, 0 0 18px #ff6b35'
                    }}
                    variants={sparkVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  />
                ))}
                
                {/* Rising forge embers from hero wing tips */}
                {[...Array(18)].map((_, i) => (
                  <motion.div
                    key={`hero-rising-${i}`}
                    className="absolute"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      bottom: `${5 + Math.random() * 30}%`,
                      width: `${2 + Math.random() * 5}px`,
                      height: `${2 + Math.random() * 5}px`,
                      background: `radial-gradient(circle, #ffffff 0%, #ffff00 25%, #ff6b35 60%, #ff4500 85%, #cc3300 100%)`,
                      borderRadius: '50%',
                      boxShadow: '0 0 8px #ffff00, 0 0 16px #ff6b35, 0 0 24px #ff4500'
                    }}
                    animate={{
                      y: [0, -180 - Math.random() * 120],
                      x: [0, (Math.random() - 0.5) * 80],
                      opacity: [0, 0.95, 0],
                      scale: [0, 1.3, 0],
                      rotate: [0, Math.random() * 720]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PHOENIX
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            CODE × BUILD × CONQUER
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Rising from the ashes of traditional learning, we forge the future of Artificial Intelligence and Machine Learning
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button 
              onClick={() => scrollToSection('vision')}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Mission
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('ideas')}
              className="px-8 py-4 border-2 border-orange-500 rounded-full font-semibold hover:bg-orange-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Ideas
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the premier AI/ML community that transforms curious minds into innovative leaders, 
                fostering a new generation of technologists who will shape the future of artificial intelligence 
                and create solutions that benefit humanity.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide hands-on learning experiences, foster research collaboration, and build a supportive 
                community where students can explore, experiment, and excel in the rapidly evolving fields of 
                AI and Machine Learning through practical projects and industry partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideas Section */}
      <section id="ideas" className="py-20 bg-gradient-to-b from-transparent to-red-900/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Our Ideas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative initiatives that fuel learning, research, and real-world impact
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ideas.map((idea, index) => (
              <motion.div 
                key={index} 
                className="group bg-black/40 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/60 transition-all hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {idea.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-red-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to rise with us? Get in touch and join the Phoenix community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Email</h3>
                  <p className="text-gray-300">phoenix.ai.club@university.edu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Location</h3>
                  <p className="text-gray-300">Computer Science Building<br />Room 301, University Campus</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Meeting Times</h3>
                  <p className="text-gray-300">Fridays 6:00 PM - 8:00 PM<br />Open lab sessions Wednesdays</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-black/40 p-8 rounded-2xl border border-orange-500/20">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-black/60 border border-orange-500/30 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-black/60 border border-orange-500/30 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full px-4 py-3 bg-black/60 border border-orange-500/30 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button 
                  onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="/PHOENIX ICON.png" 
              alt="Phoenix Logo" 
              className="w-12 h-12"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              PHOENIX
            </div>
          </motion.div>
          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CODE × BUILD × CONQUER
          </motion.p>
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 Phoenix AI/ML Club. Rising to new heights in artificial intelligence.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default PhoenixLanding;