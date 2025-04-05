import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import TeamMember from '../components/TeamMember';
import EventCard from '../components/EventCard';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const ParticleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <motion.div className="relative w-full h-full">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            opacity: [Math.random() * 0.5 + 0.25, Math.random() * 0.5 + 0.25],
            scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};

const EnhancedParticleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial dimensions and add resize listener
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <motion.div className="relative w-full h-full">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            backgroundColor:
              i % 3 === 0
                ? "rgba(240,171,252,0.5)"
                : i % 3 === 1
                ? "rgba(216,180,254,0.5)"
                : "rgba(196,181,253,0.5)",
            boxShadow:
              i % 3 === 0
                ? "0 0 6px rgba(240,171,252,0.5)"
                : i % 3 === 1
                ? "0 0 6px rgba(216,180,254,0.5)"
                : "0 0 6px rgba(196,181,253,0.5)",
          }}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.75 + 0.25,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            opacity: [Math.random() * 0.5 + 0.25, Math.random() * 0.5 + 0.25],
            scale: [Math.random() * 0.75 + 0.25, Math.random() * 0.75 + 0.25],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default function Home() {
  const videos = [
    { id: '6pa5VZdKyqY', title: 'Creators Corner Video 1' },
    { id: 'oL2Lt8tT1ug', title: 'Creators Corner Video 2' },
    { id: '8kQyKTvtIUQ', title: 'Creators Corner Video 3' },
  ];

  return (
    <>
      <Navbar />

  {/* Hero Section */}
  <section className="pt-24 bg-gradient-to-br from-violet-800 via-indigo-900 to-fuchsia-800 dark:from-navy dark:via-navy-light dark:to-navy relative overflow-hidden transition-colors duration-300">
  {/* Enhanced Background Elements */}
  <motion.div 
    animate={{ 
      background: [
        "radial-gradient(circle at 20% 30%, rgba(159,122,234,0.4) 0%, rgba(0,0,0,0) 60%)",
        "radial-gradient(circle at 30% 40%, rgba(167,139,250,0.4) 0%, rgba(0,0,0,0) 60%)",
        "radial-gradient(circle at 20% 30%, rgba(159,122,234,0.4) 0%, rgba(0,0,0,0) 60%)"
      ]
    }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute inset-0 z-0"
  />
  
  {/* Abstract Shape Background */}
  <div className="absolute inset-0 z-0 opacity-20">
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
        fill="url(#gradient1)"
        animate={{
          d: [
            "M0,50 Q25,30 50,50 T100,50 V100 H0 Z",
            "M0,45 Q30,35 50,55 T100,45 V100 H0 Z",
            "M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  {/* Enhanced Particle System */}
  <div className="absolute inset-0 z-0">
    <EnhancedParticleBackground />
  </div>
  
  {/* Geometric Grid */}
  <div className="absolute inset-0 z-0 opacity-5">
    <div className="w-full h-full bg-grid-white/30"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-36 relative z-10"
  >
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-fuchsia-200 text-sm font-medium tracking-wider border border-white/20">
          PODCAST COMMUNITY
        </span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-serif text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Welcome to{" "}
        <motion.span
          animate={{ 
            color: ["#f0abfc", "#d8b4fe", "#f0abfc"],
            textShadow: [
              "0 0 7px rgba(240,171,252,0.4)",
              "0 0 15px rgba(216,180,254,0.6)",
              "0 0 7px rgba(240,171,252,0.4)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-fuchsia-300 relative"
          style={{ fontFamily: "'Calistoga', cursive" }}
        >
          Creators Corner
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500/50 to-purple-500/50 rounded-full"
            animate={{ 
              width: ["0%", "100%", "0%"],
              left: ["0%", "0%", "100%"]
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-white/80 text-lg sm:text-xl mt-8 mb-12 max-w-2xl mx-auto leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Dream. Design. Deliver.{" "}
        <motion.span
          animate={{ 
            opacity: [0.8, 1, 0.8],
            y: [0, -2, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-fuchsia-200 font-semibold inline-block"
        >
          Be the voice of change.
        </motion.span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button
          href="/contact"
          variant="secondary"
          className="relative text-lg px-8 py-4 rounded-full shadow-xl group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
          <motion.span 
            className="relative z-10 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Register for Podcast Event</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.span>
          <motion.span
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 opacity-30 blur-md group-hover:opacity-70 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </Button>
        
        <motion.a
          href="#learnMore"
          className="text-white/90 hover:text-white font-medium mt-2 sm:mt-0 group flex items-center gap-2 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Learn more 
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </motion.svg>
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
  
  {/* Enhanced Floating Glows */}
  <motion.div
    initial={{ x: -100, y: -100 }}
    animate={{ 
      x: [-100, -80, -100],
      y: [-100, -120, -100],
      scale: [1, 1.1, 1]
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"
  />
  
  <motion.div
    initial={{ x: 100, y: 100 }}
    animate={{ 
      x: [100, 80, 100],
      y: [100, 120, 100],
      scale: [1, 1.15, 1]
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -bottom-28 -right-28 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"
  />
  
  {/* Enhanced Animated Elements */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      rotate: [0, 360]
    }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    className="absolute top-1/4 right-1/4 w-96 h-96 border border-fuchsia-300/10 rounded-full"
  />
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.2, 0.1],
      rotate: [360, 0]
    }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute top-1/4 right-1/4 w-64 h-64 border border-purple-300/10 rounded-full"
  />
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.05, 0.15, 0.05],
      rotate: [0, -360]
    }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-1/3 left-1/4 w-72 h-72 border border-indigo-300/10 rounded-full"
  />
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.07, 0.12, 0.07],
      rotate: [-360, 0]
    }}
    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-pink-300/10 rounded-full"
  />
</section>

      {/* Video Showcase Section */}
      <AnimatedSection className="py-20 bg-gray-900 dark:bg-navy transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-video rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Preview Section */}
      <AnimatedSection className="py-20 bg-indigo-50 dark:bg-navy-light via-white dark:via-navy text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Sahil Kumar"
              role="Main Coordinator"
              image="../../images/sahil.jpeg"
            />
            <TeamMember name="Yash Mali" role="Main Coordinator" image="../../images/yash.jpeg" />
            <TeamMember
              name="Rudraksha Gupta"
              role="Main Coordinator"
              image="../../images/rudrash.jpeg"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection className="py-20 bg-purple-50 dark:bg-navy text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard
              title="Podcast 2025"
              date="March 25, 2025"
              description="Join us for an immersive podcasting workshop where you'll learn from industry experts and network with fellow creators!"
              image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <EventCard
              title="Content Creation Masterclass"
              date="April 15, 2025"
              description="Master the art of content creation with hands-on workshops covering video, audio, and social media optimization."
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-navy text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Creators Corner. All rights reserved.</p>
            <motion.a
              href="https://github.com/AryanVBW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Created with Love by Vivek W</span>
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </footer>
    </>
  );
}
