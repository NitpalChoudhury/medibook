import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white pt-32 pb-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Book Diagnostic Tests <br />
            <span className="text-blue-600">Fast & Hassle-Free</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            NABL Certified Labs | Home Sample Collection | 
            Instant Online Reports
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
            >
              Book Test Now
            </Link>

            <Link
              to="/doctors"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-50 transition"
            >
              Find Doctors
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Medical Lab"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 left-6 bg-white shadow-lg p-4 rounded-2xl"
          >
            <p className="text-sm font-semibold text-gray-700">
              10,000+ Happy Patients
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Background Circle Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
