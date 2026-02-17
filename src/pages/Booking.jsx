import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    test: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    age: "",
  });

  const tests = ["Blood Test", "MRI Scan", "CT Scan", "Full Body Checkup"];
  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8 text-sm font-medium">
            <span className={step >= 1 ? "text-blue-600" : "text-gray-400"}>
              Select Test
            </span>
            <span className={step >= 2 ? "text-blue-600" : "text-gray-400"}>
              Date & Time
            </span>
            <span className={step >= 3 ? "text-blue-600" : "text-gray-400"}>
              Details
            </span>
            <span className={step >= 4 ? "text-blue-600" : "text-gray-400"}>
              Confirm
            </span>
          </div>

          {/* STEP CONTENT */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Select Diagnostic Test
                </h2>

                <select
                  name="test"
                  value={formData.test}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-6"
                >
                  <option value="">Choose Test</option>
                  {tests.map((test, index) => (
                    <option key={index} value={test}>
                      {test}
                    </option>
                  ))}
                </select>

                <Button onClick={nextStep} className="w-full">
                  Next
                </Button>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Select Date & Time
                </h2>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-6"
                />

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-6"
                >
                  <option value="">Select Time Slot</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Enter Patient Details
                </h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-4"
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-4"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl mb-6"
                />

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button onClick={nextStep}>
                    Confirm
                  </Button>
                </div>
              </>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-green-600">
                  Booking Confirmed 🎉
                </h2>

                <div className="space-y-3 text-gray-700">
                  <p><strong>Test:</strong> {formData.test}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>

                <div className="mt-8">
                  <Button to="/">
                    Back to Home
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
