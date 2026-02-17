import { motion } from "framer-motion";
import { ShieldCheck, Users, Award } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";

export default function About() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MediScan
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              MediScan is a modern diagnostic healthcare platform
              providing accurate, reliable and fast medical testing
              services with certified labs and expert professionals.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To make diagnostic healthcare accessible, affordable,
                and transparent for everyone by leveraging modern
                technology and certified medical standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become India’s most trusted diagnostic platform
                delivering quality healthcare with innovation and
                patient-first approach.
              </p>
            </motion.div>

          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                <ShieldCheck className="mx-auto text-blue-600 mb-4" size={40} />
                <h3 className="font-semibold text-xl mb-2">
                  Certified Labs
                </h3>
                <p className="text-gray-600">
                  NABL certified labs ensuring high-quality and reliable
                  results.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                <Users className="mx-auto text-blue-600 mb-4" size={40} />
                <h3 className="font-semibold text-xl mb-2">
                  Expert Doctors
                </h3>
                <p className="text-gray-600">
                  Experienced specialists providing accurate diagnosis
                  and consultation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                <Award className="mx-auto text-blue-600 mb-4" size={40} />
                <h3 className="font-semibold text-xl mb-2">
                  Trusted Service
                </h3>
                <p className="text-gray-600">
                  10,000+ satisfied patients with fast and secure
                  report delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Your Health is Our Priority
            </h2>
            <p className="mb-8 text-blue-100">
              Book your diagnostic test today and experience seamless
              healthcare services.
            </p>

            <Button
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Book Appointment
            </Button>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
}
