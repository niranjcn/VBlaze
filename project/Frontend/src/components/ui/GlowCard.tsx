import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  hover = true 
}) => {
  const glowColors = {
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
    pink: 'shadow-pink-500/20 hover:shadow-pink-500/40',
    green: 'shadow-green-500/20 hover:shadow-green-500/40'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative bg-white/5 dark:bg-white/5 backdrop-blur-xl 
        border border-white/10 dark:border-white/10 rounded-2xl
        shadow-2xl ${glowColors[glowColor as keyof typeof glowColors]}
        transition-all duration-300 ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;