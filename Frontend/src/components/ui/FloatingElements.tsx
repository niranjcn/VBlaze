import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-4 h-4', color: 'bg-blue-500/20', delay: 0, duration: 8 },
    { size: 'w-6 h-6', color: 'bg-purple-500/20', delay: 1, duration: 10 },
    { size: 'w-3 h-3', color: 'bg-cyan-500/20', delay: 2, duration: 6 },
    { size: 'w-5 h-5', color: 'bg-pink-500/20', delay: 3, duration: 9 },
    { size: 'w-2 h-2', color: 'bg-green-500/20', delay: 4, duration: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full blur-sm`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0 
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;