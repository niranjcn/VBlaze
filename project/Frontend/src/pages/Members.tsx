import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { mockMembers, Member } from '../data/mockData';
import PageTransition from '../components/common/PageTransition';
import GlowCard from '../components/ui/GlowCard';
import AnimatedText from '../components/ui/AnimatedText';

const Members: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'President', 'Core', 'Developer', 'Designer', 'Alumni'];
  
  const filteredMembers = selectedCategory === 'All' 
    ? mockMembers 
    : mockMembers.filter(member => member.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'President': 'from-purple-500 to-pink-500',
      'Core': 'from-blue-500 to-cyan-500',
      'Developer': 'from-green-500 to-teal-500',
      'Designer': 'from-orange-500 to-red-500',
      'Alumni': 'from-gray-500 to-gray-600'
    };
    return colors[category as keyof typeof colors] || 'from-blue-500 to-purple-500';
  };

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <AnimatedText 
                  text="Our Team"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                Meet the visionary architects who transform VBLAZE into a thriving ecosystem of innovation and digital excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-16 z-40 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/50 dark:border-slate-700/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredMembers.map((member, index) => (
                <GlowCard
                  key={member.id}
                  className="p-8 group"
                  glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan'}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/50 dark:border-slate-800/50 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${getCategoryColor(member.category)} rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900`}>
                        <span className="text-white text-xs font-bold">
                          {member.category[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${getCategoryColor(member.category)} bg-clip-text text-transparent mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://github.com/${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        <span className="text-sm font-semibold">GH</span>
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://linkedin.com/in/${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        <span className="text-sm font-semibold">LI</span>
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        <span className="text-sm font-semibold">TW</span>
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No members found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light">
                  Try selecting a different category to see more members.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Members;