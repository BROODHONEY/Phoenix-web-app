import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, Phone, Github, Linkedin, Twitter, Users, Target, Lightbulb, Award } from 'lucide-react';

const PhoenixLanding = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'vision', 'ideas', 'team', 'contact'];
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

  const coreMembers = [
    { name: 'Sarah Chen', role: 'President', specialization: 'Deep Learning', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face' },
    { name: 'Marcus Rodriguez', role: 'Vice President', specialization: 'Computer Vision', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
    { name: 'Priya Patel', role: 'Technical Lead', specialization: 'NLP & LLMs', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
    { name: 'Alex Thompson', role: 'Research Coordinator', specialization: 'Reinforcement Learning', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' }
  ];

  const boardMembers = [
    { name: 'Dr. Jennifer Liu', role: 'Faculty Advisor', department: 'Computer Science' },
    { name: 'David Kim', role: 'Industry Mentor', company: 'Tech Innovations Inc.' },
    { name: 'Maria Gonzalez', role: 'Alumni Representative', company: 'Google AI' },
    { name: 'Prof. Robert Singh', role: 'Research Advisor', department: 'Data Science' }
  ];

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
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-orange-500/20' : ''}`}>
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              <img src="public/PHOENIX logo.png" alt="Phoenix Logo" className="w-55 h-28 inline-block mt-0" />
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Vision', 'Ideas', 'Team', 'Contact'].map((item) => (
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
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-60 h-60 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center">
              <img src="public/PHOENIX icon.png" alt="Phoenix Logo" className="w-60 h-60" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            PHOENIX
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            CODE × BUILD × CONQUER
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Rising from the ashes of traditional learning, we forge the future of Artificial Intelligence and Machine Learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('vision')}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              Discover Our Mission
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="px-8 py-4 border-2 border-orange-500 rounded-full font-semibold hover:bg-orange-500/10 transition-all"
            >
              Meet The Team
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-400" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the premier AI/ML community that transforms curious minds into innovative leaders, 
                fostering a new generation of technologists who will shape the future of artificial intelligence 
                and create solutions that benefit humanity.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide hands-on learning experiences, foster research collaboration, and build a supportive 
                community where students can explore, experiment, and excel in the rapidly evolving fields of 
                AI and Machine Learning through practical projects and industry partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas Section */}
      <section id="ideas" className="py-20 bg-gradient-to-b from-transparent to-red-900/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Our Ideas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative initiatives that fuel learning, research, and real-world impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ideas.map((idea, index) => (
              <div key={index} className="group bg-black/40 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/60 transition-all hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {idea.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </div>
          
          {/* Core Members */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-orange-400">Core Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreMembers.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4 mx-auto w-48 h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full p-1">
                      <div className="w-full h-full bg-black rounded-full p-2">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{member.name}</h4>
                  <p className="text-orange-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Board Members */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-red-400">Board Members</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <h4 className="text-lg font-bold mb-2 text-white">{member.name}</h4>
                  <p className="text-orange-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.department || member.company}</p>
                </div>
              ))}
            </div>
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
          <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            PHOENIX
          </div>
          <p className="text-gray-400 mb-4">CODE × BUILD × CONQUER</p>
          <p className="text-gray-500 text-sm">
            © 2025 Phoenix AI/ML Club. Rising to new heights in artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PhoenixLanding;