import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Register for PodCoast Event
          </h1>
          <p className="text-xl text-gray-600">
            Join us for an amazing podcasting experience!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd3Sd2KaATK8VdAoGbZRsQhSGg-FQpMvMhWeBm8i7sUw_8QCw/viewform?embedded=true"
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
  );
}
