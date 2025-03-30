import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ContactForm() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Register for PodCoast Event</h1>
            <p className="text-xl text-gray-600">Join us for an amazing podcasting experience!</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading form...
            </iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}
