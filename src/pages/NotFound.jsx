import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white px-6">
        
        <div className="text-center">

          {/* Animated 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-9xl font-bold text-blue-600"
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mt-6 text-gray-800"
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mt-4 max-w-md mx-auto"
          >
            The page you’re looking for doesn’t exist or has been moved.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
          >
            <Button to="/">
              Go Back Home
            </Button>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
}
