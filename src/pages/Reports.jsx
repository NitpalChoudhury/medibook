import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

export default function Reports() {
  const [phone, setPhone] = useState("");
  const [searched, setSearched] = useState(false);

  // Dummy Report Data (Demo Purpose)
  const reportsData = [
    {
      id: "MED-10234",
      phone: "9876543210",
      test: "Blood Test",
      date: "2026-02-10",
    },
    {
      id: "MED-20987",
      phone: "9876543210",
      test: "MRI Scan",
      date: "2026-02-12",
    },
  ];

  const filteredReports = reportsData.filter(
    (report) => report.phone === phone
  );

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10"
          >
            Access Your Reports
          </motion.h1>

          {/* Search Box */}
          <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Enter Your Registered Phone Number
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 border p-3 rounded-xl"
              />

              <Button onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          {/* Reports List */}
          {searched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              {filteredReports.length > 0 ? (
                <>
                  <h2 className="text-xl font-semibold mb-6">
                    Your Reports
                  </h2>

                  <div className="space-y-6">
                    {filteredReports.map((report) => (
                      <div
                        key={report.id}
                        className="flex flex-col md:flex-row justify-between items-center border-b pb-4"
                      >
                        <div>
                          <p className="font-semibold">
                            {report.test}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Booking ID: {report.id}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Date: {report.date}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          className="mt-4 md:mt-0 flex items-center gap-2"
                        >
                          <Download size={16} />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-600 text-center">
                  No reports found for this number.
                </p>
              )}
            </motion.div>
          )}

        </div>
      </section>
    </MainLayout>
  );
}
