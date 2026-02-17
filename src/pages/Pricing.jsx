import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Health",
      price: "₹999",
      description: "Essential diagnostic tests for routine health check.",
      features: [
        "Complete Blood Count",
        "Blood Sugar Test",
        "Basic Liver Function",
        "Online Report Access",
      ],
      popular: false,
    },
    {
      name: "Advanced Care",
      price: "₹2499",
      description: "Comprehensive tests for deeper health analysis.",
      features: [
        "Everything in Basic",
        "Thyroid Profile",
        "Lipid Profile",
        "ECG Test",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Premium Full Body",
      price: "₹4999",
      description: "Complete full body health screening package.",
      features: [
        "Everything in Advanced",
        "MRI Scan",
        "CT Scan",
        "Cardiac Screening",
        "Doctor Consultation",
      ],
      popular: false,
    },
  ];

  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Choose Your Health Package
          </motion.h1>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Affordable and reliable diagnostic packages designed for your health needs.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl shadow-lg p-8 border ${
                  plan.popular
                    ? "border-blue-600 scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-500 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-gray-600 text-sm mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button to="/booking" className="w-full">
                  Book Now
                </Button>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </MainLayout>
  );
}
