import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ShieldCheck } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";
import { services } from "@/data/services.js";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <MainLayout>
        <div className="pt-32 text-center">
          <h2 className="text-3xl font-bold">Service Not Found</h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            {service.description}
          </p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Price</h3>
              <p className="text-blue-600 text-xl font-bold">
                {service.price}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl flex items-start gap-3">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Report Time</h3>
                <p className="text-gray-600">
                  {service.reportTime}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Preparation</h3>
                <p className="text-gray-600">
                  {service.preparation}
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Button to="/booking">
              Book This Test
            </Button>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
