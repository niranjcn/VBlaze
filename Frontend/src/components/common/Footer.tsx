import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    'Club': [
      { name: 'About Us', id: 'about' },
      { name: 'Members', id: 'members' },
      { name: 'Events', id: 'events' },
      { name: 'Join Us', id: 'join' }
    ],
    'Projects': [
      { name: 'All Projects', id: 'projects' },
      { name: 'Web Development', id: 'projects' },
      { name: 'Mobile Apps', id: 'projects' },
      { name: 'Open Source', id: 'projects' }
    ],
    'Resources': [
      { name: 'Blog', id: 'blog' },
      { name: 'Tutorials', id: 'blog' },
      { name: 'Contact', id: 'contact' },
      { name: 'Community', id: 'home' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vblaze-dev', icon: 'github' },
    { name: 'Discord', url: 'https://discord.gg/vblaze', icon: 'discord' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/vblaze', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/vblaze_dev', icon: 'twitter' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VBLAZE
              </span>
            </button>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Empowering the next generation of web developers through collaboration, 
              innovation, and continuous learning. Join our community and build the future of web.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Using text icons for simplicity - replace with actual icons */}
                  <span className="text-sm font-semibold">
                    {social.icon === 'github' && 'GH'}
                    {social.icon === 'discord' && 'DC'}
                    {social.icon === 'linkedin' && 'LI'}
                    {social.icon === 'twitter' && 'TW'}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} VBLAZE Web Development Club. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;