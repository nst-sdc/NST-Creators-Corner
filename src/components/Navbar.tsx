import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Creators Corner Logo"
              className="h-10 w-10"
            />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Creators Corner
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/coordinators"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Team
            </motion.a>
            <motion.a
              href="/contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="/coordinators"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Team
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Register
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
