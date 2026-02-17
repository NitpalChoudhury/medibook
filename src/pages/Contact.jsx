import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14"
          >
            Contact Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <p className="text-green-600 font-medium">
                  Thank you! We will get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border p-3 rounded-xl"
                  ></textarea>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                <Phone className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@mediscan.com</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                <MapPin className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              {/* Map Section */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-60 border-0"
                  loading="lazy"
                ></iframe>
              </div>

            </motion.div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}
