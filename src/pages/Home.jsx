import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import DoctorCard from "../components/DoctorCard";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Home() {
  const doctorsPreview = [
    {
      id: 1,
      name: "Dr. Amit Sharma",
      specialization: "Cardiologist",
      experience: "10+ Years",
      image:
        "https://images.unsplash.com/photo-1612349316228-5942a9b489c2",
    },
    {
      id: 2,
      name: "Dr. Priya Verma",
      specialization: "Radiologist",
      experience: "8+ Years",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Premium Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center relative">
          {[
            { value: "10,000+", label: "Happy Patients" },
            { value: "50+", label: "Expert Doctors" },
            { value: "24/7", label: "Customer Support" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-5xl font-extrabold text-blue-600 mb-4">
                {item.value}
              </h2>
              <p className="text-gray-600 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Doctors Preview Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-14 flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Meet Our <span className="text-blue-600">Expert Doctors</span>
            </h2>

            <Button
              variant="outline"
              to="/doctors"
              className="px-6 py-2"
            >
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {doctorsPreview.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>

        </div>
      </section>

      {/* Premium CTA Section */}
      {/* Ultra Premium CTA Section */}
<section className="relative py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden">

  {/* Glow Background Effect */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>

  {/* Glass Overlay */}
  <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>

  <div className="relative max-w-4xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
    >
      Book Your Diagnostic Test Today
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="text-blue-100 text-lg mb-12"
    >
      Fast booking, certified labs and instant reports at your convenience.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Button
        to="/booking"
        className="group bg-blue text-blue-600 px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105"
      >
        <span className="flex items-center gap-3">
          Get Started Now
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Button>
    </motion.div>

  </div>
</section>


    </MainLayout>
  );
}
