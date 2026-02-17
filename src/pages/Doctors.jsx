import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const doctors = [
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
    {
      id: 3,
      name: "Dr. Rahul Mehta",
      specialization: "Pathologist",
      experience: "12+ Years",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    },
  ];

  return (
    <MainLayout>
      <section className="relative bg-blue-50 min-h-screen pt-32 pb-24 px-6 overflow-hidden">

        {/* Soft Background Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Meet Our <span className="text-blue-600">Expert Doctors</span>
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified specialists ensure accurate diagnosis and
              provide the highest level of medical care.
            </p>
          </motion.div>

          {/* Doctors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <DoctorCard {...doctor} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
