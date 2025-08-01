import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  CodeBracketIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  EnvelopeIcon,
  UserPlusIcon,
  ArrowRightIcon,
  PlayIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  FireIcon,
  TrophyIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import GlowCard from '../components/ui/GlowCard';
import AnimatedText from '../components/ui/AnimatedText';
import ParticleBackground from '../components/ui/ParticleBackground';
import FloatingElements from '../components/ui/FloatingElements';
import { mockMembers, mockProjects } from '../data/mockData';

const SinglePageApp: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [activeSection, setActiveSection] = useState('home');

  // Sample data for new sections
  const events = [
    {
      id: '1',
      title: 'React Masterclass 2024',
      date: '2024-03-15',
      time: '2:00 PM - 5:00 PM',
      type: 'Workshop',
      status: 'upcoming',
      description: 'Deep dive into React 18 features, hooks, and performance optimization techniques.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      registrationLink: '#',
      attendees: 45,
      maxAttendees: 60
    },
    {
      id: '2',
      title: 'Web Dev Hackathon',
      date: '2024-04-20',
      time: '9:00 AM - 9:00 PM',
      type: 'Competition',
      status: 'upcoming',
      description: '48-hour hackathon to build innovative web applications with cutting-edge technologies.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      registrationLink: '#',
      attendees: 120,
      maxAttendees: 150
    },
    {
      id: '3',
      title: 'JavaScript Fundamentals',
      date: '2024-02-10',
      time: '3:00 PM - 6:00 PM',
      type: 'Workshop',
      status: 'completed',
      description: 'Comprehensive workshop covering ES6+, async programming, and modern JavaScript patterns.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 80,
      maxAttendees: 80
    }
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for structuring large-scale React applications with proper state management and component architecture.',
      author: 'Sarah Chen',
      date: '2024-02-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 124,
      comments: 18
    },
    {
      id: '2',
      title: 'Modern CSS Techniques for 2024',
      excerpt: 'Explore the latest CSS features including container queries, cascade layers, and advanced grid layouts.',
      author: 'Alex Johnson',
      date: '2024-02-10',
      readTime: '6 min read',
      tags: ['CSS', 'Frontend', 'Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 89,
      comments: 12
    },
    {
      id: '3',
      title: 'API Design Best Practices',
      excerpt: 'Comprehensive guide to designing RESTful APIs with proper authentication, error handling, and documentation.',
      author: 'Mike Rodriguez',
      date: '2024-02-05',
      readTime: '10 min read',
      tags: ['API', 'Backend', 'Node.js'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 156,
      comments: 24
    }
  ];

  const stats = [
    { label: 'Active Members', value: '150+', icon: UserGroupIcon },
    { label: 'Projects Completed', value: '45+', icon: CodeBracketIcon },
    { label: 'Events Hosted', value: '30+', icon: CalendarDaysIcon },
    { label: 'Years Active', value: '3+', icon: TrophyIcon }
  ];

  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-teal-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-purple-600' },
    { name: 'Python', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'UI/UX Design', level: 82, color: 'from-pink-500 to-rose-500' },
    { name: 'DevOps', level: 78, color: 'from-purple-500 to-indigo-500' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'members', 'projects', 'events', 'blog', 'contact', 'join'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <FloatingElements />
        
        {/* Background Effects */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50"
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
              >
                <RocketLaunchIcon className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <AnimatedText 
                text="VBLAZE"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-4 font-light"
            >
              Web Development Club
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-slate-500 dark:text-slate-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Empowering the next generation of digital architects through collaborative innovation, 
              cutting-edge technology, and transformative learning experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore Projects</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('join')}
                className="group px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl text-slate-700 dark:text-slate-300 font-semibold rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <UserPlusIcon className="w-5 h-5" />
                  <span>Join Our Community</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <GlowCard key={stat.label} className="p-6 text-center" glowColor="blue">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About VBLAZE
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              We are a passionate community of developers, designers, and innovators dedicated to pushing the boundaries of web technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <GlowCard className="p-8 lg:p-12" glowColor="blue">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-light leading-relaxed">
                  VBLAZE is dedicated to cultivating a dynamic ecosystem where visionary developers 
                  converge to learn, collaborate, and pioneer breakthrough innovations.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-light leading-relaxed">
                  Through intensive workshops, innovation marathons, and collaborative projects, 
                  we bridge the divide between theoretical knowledge and industry excellence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Innovation
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Collaboration
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Excellence
                  </span>
                </div>
              </motion.div>
            </GlowCard>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowCard className="overflow-hidden" glowColor="purple">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
              </GlowCard>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Meet the visionary architects who transform VBLAZE into a thriving ecosystem of innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {mockMembers.map((member, index) => (
              <GlowCard
                key={member.id}
                className="p-8 group"
                glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/50 dark:border-slate-800/50 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                        <span className="text-white text-xs font-bold">
                          {member.category[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://github.com/${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-200"
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
                        className="w-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                      >
                        <span className="text-sm font-semibold">LI</span>
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/25"
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Explore groundbreaking innovations crafted by our visionary community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {mockProjects.map((project, index) => (
              <GlowCard
                key={project.id}
                className="overflow-hidden group"
                glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

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
                          <span className="text-sm font-medium">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Events & Workshops
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Join our exciting events, workshops, and hackathons to enhance your skills and network with fellow developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {events.map((event, index) => (
              <GlowCard
                key={event.id}
                className="overflow-hidden group"
                glowColor={index % 2 === 0 ? 'blue' : 'purple'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'upcoming' 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-gray-500/90 text-white'
                      }`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/90 text-white rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <CalendarDaysIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <ClockIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 font-light leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <UserGroupIcon className="w-5 h-5 text-slate-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {event.attendees}/{event.maxAttendees} attendees
                        </span>
                      </div>
                      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>

                    {event.status === 'upcoming' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                      >
                        Register Now
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog & Tutorials
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Stay updated with the latest trends, tutorials, and insights from our community of developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <GlowCard
                key={post.id}
                className="overflow-hidden group cursor-pointer"
                glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-medium">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        By {post.author}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 font-light leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <HeartIcon className="w-5 h-5 text-red-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {post.likes}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpenIcon className="w-5 h-5 text-slate-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {post.comments}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                      >
                        Read More →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:50px_50px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <GlowCard className="p-8 lg:p-12" glowColor="blue">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </GlowCard>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <GlowCard className="p-8" glowColor="purple">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Visit Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">
                      Computer Science Department<br />
                      Your College Name<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard className="p-8" glowColor="cyan">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Email Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">
                      hello@vblaze.dev<br />
                      contact@vblaze.dev
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard className="p-8" glowColor="pink">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Call Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">
                      +1 (555) 123-4567<br />
                      Mon-Fri 9AM-5PM
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard className="p-8" glowColor="green">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {['GitHub', 'Discord', 'LinkedIn', 'Twitter'].map((social) => (
                    <motion.button
                      key={social}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
                    >
                      <span className="text-sm font-semibold">
                        {social.slice(0, 2).toUpperCase()}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="relative py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join VBLAZE
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to be part of something extraordinary? Join our community of passionate developers and innovators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Join Form */}
            <GlowCard className="p-8 lg:p-12 bg-white/10 backdrop-blur-xl border-white/20" glowColor="blue">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Apply for Membership
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-white placeholder-blue-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-white placeholder-blue-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Year of Study
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-white">
                      <option value="" className="text-slate-900">Select your year</option>
                      <option value="1st" className="text-slate-900">1st Year</option>
                      <option value="2nd" className="text-slate-900">2nd Year</option>
                      <option value="3rd" className="text-slate-900">3rd Year</option>
                      <option value="4th" className="text-slate-900">4th Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Technical Skills
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-white placeholder-blue-200"
                      placeholder="e.g., React, Node.js, Python, UI/UX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Why do you want to join VBLAZE?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-white placeholder-blue-200 resize-none"
                      placeholder="Tell us about your passion for web development and what you hope to achieve..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-white/20 backdrop-blur-xl text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200 shadow-2xl"
                  >
                    Submit Application
                  </motion.button>
                </form>
              </motion.div>
            </GlowCard>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-8">
                  Why Join VBLAZE?
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: AcademicCapIcon,
                      title: 'Learn & Grow',
                      description: 'Access to exclusive workshops, tutorials, and mentorship from industry experts.'
                    },
                    {
                      icon: UserGroupIcon,
                      title: 'Network',
                      description: 'Connect with like-minded developers and build lasting professional relationships.'
                    },
                    {
                      icon: CodeBracketIcon,
                      title: 'Build Projects',
                      description: 'Collaborate on real-world projects and build an impressive portfolio.'
                    },
                    {
                      icon: TrophyIcon,
                      title: 'Compete',
                      description: 'Participate in hackathons, coding competitions, and win exciting prizes.'
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-blue-100 font-light leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePageApp;