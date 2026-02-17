import ServiceCard from "./ServiceCard";
import { Activity, Scan, HeartPulse } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Diagnostic Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Blood Test"
            description="Complete blood analysis with accurate lab reports."
            price="₹499"
            icon={<Activity size={28} />}
          />

          <ServiceCard
            title="MRI Scan"
            description="Advanced MRI imaging with expert radiologists."
            price="₹2499"
            icon={<Scan size={28} />}
          />

          <ServiceCard
            title="Cardiac Checkup"
            description="Full heart health screening and ECG testing."
            price="₹999"
            icon={<HeartPulse size={28} />}
          />

        </div>
      </div>
    </section>
  );
}
