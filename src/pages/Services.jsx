import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { services } from "@/data/services";

export default function Services() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Diagnostic Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of certified medical tests designed
              for accurate diagnosis and reliable health monitoring.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <span className="text-blue-600 font-semibold text-lg">
                    Starting from {service.price}
                  </span>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-center hover:bg-blue-700 transition"
                >
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
