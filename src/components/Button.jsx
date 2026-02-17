import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  // If link button
  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={to} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Normal button
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={combinedClass}
    >
      {children}
    </motion.button>
  );
}
