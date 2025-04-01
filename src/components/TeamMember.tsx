import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col items-center p-6 space-y-4 bg-white dark:bg-navy text-gray-800 dark:text-white rounded-xl shadow-md transition-colors duration-300 hover:shadow-xl"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover"
      />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-gray-800 dark:text-white"
      >
        {name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-indigo-600 dark:text-indigo-400 font-medium"
      >
        {role}
      </motion.p>
    </motion.div>
  );
}
