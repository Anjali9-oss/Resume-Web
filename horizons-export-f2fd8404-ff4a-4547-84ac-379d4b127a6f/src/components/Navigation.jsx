import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anjali9-oss', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/anjali-verma', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vermaanjali3062@gmail.com', label: 'Email' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Anjali Verma
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="lg:hidden glass-effect border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
            >
              {item.name}
            </motion.a>
          ))}
          <div className="flex space-x-4 pt-4 border-t border-white/10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;