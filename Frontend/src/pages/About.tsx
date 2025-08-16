import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, LightBulbIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import PageTransition from '../components/common/PageTransition';
import GlowCard from '../components/ui/GlowCard';
import AnimatedText from '../components/ui/AnimatedText';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Club Founded',
      description: 'VBLAZE was established with a visionary mission to create an immersive collaborative ecosystem for next-generation web developers.',
      icon: AcademicCapIcon
    },
    {
      year: '2022',
      title: 'First Hackathon',
      description: 'Orchestrated our inaugural 48-hour innovation marathon featuring 100+ brilliant minds from premier institutions.',
      icon: LightBulbIcon
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Achieved 150+ active innovators and launched our comprehensive mentorship ecosystem for emerging developers.',
      icon: UserGroupIcon
    },
    {
      year: '2024',
      title: 'Recognition',
      description: 'Honored with "Best Technical Club" recognition for exceptional contributions to digital innovation and education.',
      icon: TrophyIcon
    }
  ];

  const values = [
    {
      title: 'Collaboration',
      description: 'We harness collective intelligence to transcend individual limitations and achieve extraordinary outcomes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation',
      description: 'We cultivate revolutionary thinking and continuously push the boundaries of digital possibility.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Learning',
      description: 'We embrace perpetual growth through immersive experiences and collaborative knowledge synthesis.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Excellence',
      description: 'We pursue uncompromising quality and precision in every aspect of our digital craftsmanship.',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
                  text="About VBLAZE"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                Empowering the next generation of digital architects through collaborative innovation, 
                cutting-edge technology, and transformative learning experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <GlowCard
                className="p-8 lg:p-12"
                glowColor="blue"
              >
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-light leading-relaxed">
                  VBLAZE is dedicated to cultivating a dynamic ecosystem where visionary developers 
                  converge to learn, collaborate, and pioneer breakthrough innovations. We champion 
                  immersive learning methodologies and peer-driven knowledge synthesis.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-light leading-relaxed">
                  Through intensive workshops, innovation marathons, collaborative projects, and comprehensive mentorship, 
                  we bridge the divide between theoretical knowledge and industry excellence, 
                  preparing our members for transformative careers in digital innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Collaboration
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Innovation
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Learning
                  </span>
                </div>
                </motion.div>
              </GlowCard>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <GlowCard className="overflow-hidden" glowColor="purple">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                From visionary inception to becoming the premier innovation hub on campus.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } mb-16`}
                >
                  <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <GlowCard 
                      className="p-8" 
                      glowColor={index % 2 === 0 ? 'blue' : 'purple'}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </GlowCard>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                The fundamental principles that drive our pursuit of digital excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <GlowCard
                  key={value.title}
                  className="p-8 text-center group"
                  glowColor={['blue', 'purple', 'cyan', 'pink'][index] as any}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-8 h-8 bg-white/90 rounded-lg shadow-inner"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {value.description}
                  </p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;