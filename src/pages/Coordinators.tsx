import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Coordinators() {
  const coordinators = [
    {
      name: 'Sahil Kumar',
      role: 'Main Coordinator',
      image: '/images/sahil.jpeg',
      bio: 'Leading the creative vision of Creators Corner with expertise in content strategy and community building.',
      socials: {
        instagram: 'sahil.kumar',
        linkedin: 'sahilkumar',
        twitter: 'sahilk',
      },
    },
    {
      name: 'Yash Mali',
      role: 'Main Coordinator',
      image: '/images/yash.jpeg',
      bio: 'Specializing in event management and creator partnerships to bring unique opportunities to our community.',
      socials: {
        instagram: 'yash.mali',
        linkedin: 'yashmali',
        twitter: 'yashm',
      },
    },
    {
      name: 'Rudransh Gupta',
      role: 'Main Coordinator',
      image: '/images/rudrash.jpeg',
      bio: "Driving technical innovation and digital presence for Creators Corner's growing platform.",
      socials: {
        instagram: 'rudraksha.gupta',
        linkedin: 'rudrakshagupta',
        twitter: 'rudrakshag',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <Navbar />
      <div className="relative pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-navy dark:to-navy-dark min-h-screen transition-colors duration-300 overflow-hidden">
        {/* Animated Background Bubbles */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-30 dark:opacity-10"
              style={{
                width: Math.random() * 100 + 100,
                height: Math.random() * 100 + 100,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium tracking-wider mb-4">
              TEAM
            </span>
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Meet Our Coordinators
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              The talented individuals behind Creators Corner who bring creativity, innovation, and passion to our community.
            </p>
          </motion.div>

          <motion.div className="space-y-24" variants={containerVariants} initial="hidden" animate="visible">
            {coordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

const CoordinatorCard = ({ name, role, image, bio, socials, index }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.3,
        ease: 'backOut',
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 bg-white dark:bg-navy-light rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-30 border border-gray-100 dark:border-gray-800`}
    >
      <motion.div className="relative w-full md:w-1/3 aspect-square" variants={imageVariants}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl -rotate-6 z-0"
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-white dark:bg-navy-light z-10 rounded-2xl p-2 md:p-3">
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{name}</h3>
          <span className="inline-block mt-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
            {role}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg">{bio}</p>

        <div className="flex gap-4 justify-center md:justify-start">
          {Object.entries(socials).map(([platform, username], i) => (
            <motion.a
              key={platform}
              href={`https://www.${platform}.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-dark text-gray-700 dark:text-gray-200 transition-colors duration-300"
              style={{
                '--social-hover':
                  platform === 'instagram'
                    ? '#E1306C'
                    : platform === 'linkedin'
                    ? '#0077B5'
                    : '#1DA1F2',
              }}
            >
              {platform === 'instagram' && <FaInstagram />}
              {platform === 'linkedin' && <FaLinkedin />}
              {platform === 'twitter' && <FaTwitter />}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
