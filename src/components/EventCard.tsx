import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  description,
  image,
}: EventCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-navy text-gray-800 dark:text-white rounded-xl shadow-md overflow-hidden transition-colors"
      whileHover={{ y: -5 }}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
          {date}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
