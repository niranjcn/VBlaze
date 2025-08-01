import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, CodeBracketIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { mockProjects } from '../data/mockData';
import PageTransition from '../components/common/PageTransition';
import GlowCard from '../components/ui/GlowCard';
import AnimatedText from '../components/ui/AnimatedText';

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'year' | 'name'>('year');

  // Get all unique tech stacks
  const allTechStacks = Array.from(
    new Set(mockProjects.flatMap(project => project.techStack))
  );
  const techFilters = ['All', ...allTechStacks];

  // Filter and sort projects
  const filteredProjects = mockProjects
    .filter(project => 
      selectedTech === 'All' || project.techStack.includes(selectedTech)
    )
    .sort((a, b) => {
      if (sortBy === 'year') return b.year - a.year;
      return a.name.localeCompare(b.name);
    });

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
                  text="Our Projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                Explore groundbreaking innovations crafted by our visionary community. 
                From cutting-edge web applications to transformative open-source contributions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-16 z-40 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Tech Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {techFilters.map((tech) => (
                  <motion.button
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTech === tech
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/50 dark:border-slate-700/50'
                    }`}
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'year' | 'name')}
                  className="px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="year">Year</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredProjects.map((project, index) => (
                  <GlowCard
                    key={project.id}
                    className="overflow-hidden group"
                    glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan'}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{project.year}</span>
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 font-light leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <CodeBracketIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Code</span>
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                          >
                            <EyeIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                    </motion.div>
                  </GlowCard>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No projects found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 font-light">
                  Try selecting a different technology filter to see more projects.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech('All')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Show All Projects
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Innovate?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Join our elite community and transform your visionary concepts into reality with our talented developers and designers.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-medium rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-white/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-lg">Submit Your Project</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;