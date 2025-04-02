import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import TeamMember from '../components/TeamMember';
import EventCard from '../components/EventCard';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

export default function Home() {
  const videos = [
    { id: '6pa5VZdKyqY', title: 'Creators Corner Video 1' },
    { id: 'oL2Lt8tT1ug', title: 'Creators Corner Video 2' },
    { id: '8kQyKTvtIUQ', title: 'Creators Corner Video 3' }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-600 dark:from-navy dark:via-navy-light dark:to-navy relative overflow-hidden transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Welcome to Creators Corner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-white/90 mb-8"
            >
              Dream. Design. Deliver.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button href="/contact" variant="secondary">
                Register for PodCoast Event
              </Button>
            </motion.div>
          </div>
        </motion.div>
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
            <TeamMember
              name="Yash Mali"
              role="Main Coordinator"
              image="../../images/yash.jpeg"
            />
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
              title="PodCoast 2024"
              date="March 25, 2024"
              description="Join us for an immersive podcasting workshop where you'll learn from industry experts and network with fellow creators!"
              image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <EventCard
              title="Content Creation Masterclass"
              date="April 15, 2024"
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
