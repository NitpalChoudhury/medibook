import { motion } from "framer-motion";
import Button from "./Button";

export default function DoctorCard({
  name,
  specialization,
  experience,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">
          {name}
        </h3>

        <p className="text-blue-600 font-medium mt-1">
          {specialization}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          {experience} Experience
        </p>

        <div className="mt-5">
          <Button to="/booking">
            Book Appointment
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
