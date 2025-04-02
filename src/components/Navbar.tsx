import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-navy shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Creators Corner Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              Creators Corner
            </span>
          </div>

          <ThemeToggle />

          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/"
              className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </motion.a>
            <motion.a
              href="/coordinators"
              className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Team
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </motion.a>
            <motion.a
              href="/contact"
              className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-navy text-gray-800 dark:text-white transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Home
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </a>
            <a href="/coordinators" className="block px-3 py-2 relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Team
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </a>
            <a href="/contact" className="block px-3 py-2 relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Register
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 transform -translate-x-1/2"
              ></span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
