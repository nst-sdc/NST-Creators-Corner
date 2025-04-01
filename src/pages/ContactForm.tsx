import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ContactForm() {
  return (
    <>
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Register for PodCoast Event
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Join us for an amazing podcasting experience!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white dark:bg-navy rounded-xl shadow-lg p-8 md:p-10 transition-colors duration-300"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full rounded-lg"
            >
              Loading form...
            </iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}
