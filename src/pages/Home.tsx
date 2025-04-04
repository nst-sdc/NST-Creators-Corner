import { motion } from "framer-motion";
import { Youtube, Mail, MapPin, Phone, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import TeamMember from "../components/TeamMember";
import EventCard from "../components/EventCard";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";

export default function Home() {
  const videos = [
    {
      id: "6pa5VZdKyqY",
      title: "Creators Corner Video 1",
    },
    {
      id: "oL2Lt8tT1ug",
      title: "Creators Corner Video 2",
    },
    {
      id: "8kQyKTvtIUQ",
      title: "Creators Corner Video 3",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-600 relative overflow-hidden">
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

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </section>

      {/* Video Showcase Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Featured Content
          </motion.h2>

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
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Preview Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Sahil Kumar"
              role="Main Coordinator"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <TeamMember
              name="Yash Mali"
              role="Main Coordinator"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <TeamMember
              name="Rudraksha Gupta"
              role="Main Coordinator"
              image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="text-center mt-8">
            <Button href="/coordinators" variant="primary">
              Meet Our Full Team
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <EventCard
                title="PodCoast 2024"
                date="March 25, 2024"
                description="Join us for an immersive podcasting workshop where you'll learn from industry experts and network with fellow creators!"
                image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <EventCard
                title="Content Creation Masterclass"
                date="April 15, 2024"
                description="Master the art of content creation with hands-on workshops covering video, audio, and social media optimization."
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Creators Corner. All rights reserved by Vivek W.
            </p>
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
