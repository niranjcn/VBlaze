import React, { useEffect, useRef } from 'react';

const NeuralNetwork: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = svg.querySelectorAll('.node');
    const connections = svg.querySelectorAll('.connection');

    // Animate nodes
    nodes.forEach((node, index) => {
      const animationDelay = index * 200;
      setTimeout(() => {
        node.classList.add('animate-pulse');
      }, animationDelay);
    });

    // Animate connections
    connections.forEach((connection, index) => {
      const animationDelay = index * 100;
      setTimeout(() => {
        connection.classList.add('animate-pulse');
      }, animationDelay);
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connections */}
        <g className="connections">
          <line x1="100" y1="150" x2="300" y2="100" stroke="url(#gradient1)" strokeWidth="2" className="connection" />
          <line x1="100" y1="150" x2="300" y2="200" stroke="url(#gradient1)" strokeWidth="2" className="connection" />
          <line x1="100" y1="300" x2="300" y2="100" stroke="url(#gradient1)" strokeWidth="2" className="connection" />
          <line x1="100" y1="300" x2="300" y2="200" stroke="url(#gradient1)" strokeWidth="2" className="connection" />
          <line x1="100" y1="450" x2="300" y2="300" stroke="url(#gradient1)" strokeWidth="2" className="connection" />
          <line x1="300" y1="100" x2="500" y2="150" stroke="url(#gradient2)" strokeWidth="2" className="connection" />
          <line x1="300" y1="200" x2="500" y2="150" stroke="url(#gradient2)" strokeWidth="2" className="connection" />
          <line x1="300" y1="300" x2="500" y2="300" stroke="url(#gradient2)" strokeWidth="2" className="connection" />
          <line x1="500" y1="150" x2="700" y2="200" stroke="url(#gradient3)" strokeWidth="2" className="connection" />
          <line x1="500" y1="300" x2="700" y2="200" stroke="url(#gradient3)" strokeWidth="2" className="connection" />
        </g>

        {/* Nodes */}
        <g className="nodes">
          <circle cx="100" cy="150" r="8" fill="#3B82F6" className="node" />
          <circle cx="100" cy="300" r="8" fill="#3B82F6" className="node" />
          <circle cx="100" cy="450" r="8" fill="#3B82F6" className="node" />
          <circle cx="300" cy="100" r="10" fill="#8B5CF6" className="node" />
          <circle cx="300" cy="200" r="10" fill="#8B5CF6" className="node" />
          <circle cx="300" cy="300" r="10" fill="#8B5CF6" className="node" />
          <circle cx="500" cy="150" r="10" fill="#EC4899" className="node" />
          <circle cx="500" cy="300" r="10" fill="#EC4899" className="node" />
          <circle cx="700" cy="200" r="12" fill="#10B981" className="node" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NeuralNetwork;