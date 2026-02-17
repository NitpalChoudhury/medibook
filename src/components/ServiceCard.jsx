import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, price, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50"
    >
      {/* Icon */}
      <div className="mb-5 w-14 h-14 flex items-center justify-center bg-blue-100 rounded-2xl text-blue-600">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      {/* Price */}
      <p className="text-blue-600 font-semibold mb-4">
        Starting from {price}
      </p>

      {/* Button */}
      <Link
        to="/booking"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
      >
        Book Now →
      </Link>
    </motion.div>
  );
}
