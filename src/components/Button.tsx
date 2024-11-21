import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-300",
    secondary: "bg-white text-indigo-600 hover:bg-gray-50 focus:ring-indigo-200"
  };

  const buttonContent = (
    <motion.span
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
}