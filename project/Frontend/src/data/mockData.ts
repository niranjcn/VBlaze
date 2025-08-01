export interface Member {
  id: string;
  name: string;
  role: string;
  category: 'President' | 'Core' | 'Developer' | 'Designer' | 'Alumni';
  bio: string;
  techStack: string[];
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
  year: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'upcoming' | 'past';
  image: string;
  registrationLink?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
}

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Club President',
    category: 'President',
    bio: 'Full-stack developer passionate about creating innovative web solutions and leading the next generation of developers.',
    techStack: ['React', 'Node.js', 'Python', 'MongoDB'],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      github: 'alexj-dev',
      linkedin: 'alexjohnson-dev'
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Technical Lead',
    category: 'Core',
    bio: 'Frontend specialist with expertise in modern React frameworks and design systems.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Figma'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      github: 'sarahc-dev',
      linkedin: 'sarah-chen-dev'
    }
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    role: 'Backend Developer',
    category: 'Developer',
    bio: 'Backend engineer focused on scalable systems and API development.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      github: 'mike-dev',
      linkedin: 'mike-rodriguez-dev'
    }
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'StudyHub Platform',
    description: 'A collaborative study platform for students to share resources and connect with peers.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/vblaze/studyhub',
    demo: 'https://studyhub-demo.vercel.app',
    year: 2024
  },
  {
    id: '2',
    name: 'Event Management System',
    description: 'Complete event management solution with registration, ticketing, and analytics.',
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/vblaze/eventms',
    year: 2023
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Workshop 2024',
    description: 'Hands-on workshop covering React fundamentals and advanced patterns.',
    date: '2024-02-15',
    type: 'upcoming',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    registrationLink: 'https://forms.gle/react-workshop'
  },
  {
    id: '2',
    title: 'Web Dev Hackathon',
    description: '48-hour hackathon focused on building innovative web applications.',
    date: '2023-11-20',
    type: 'past',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    excerpt: 'A comprehensive guide to understanding and using React Hooks effectively.',
    content: 'React Hooks have revolutionized how we write React components...',
    author: 'Sarah Chen',
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'Frontend'],
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for creating robust and scalable backend services.',
    content: 'When building APIs, scalability should be a primary concern...',
    author: 'Mike Rodriguez',
    date: '2024-01-10',
    tags: ['Node.js', 'Backend', 'API'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];