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
      className="bg-white rounded-xl shadow-md overflow-hidden h-full"
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-indigo-600 font-medium mb-2">{date}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
