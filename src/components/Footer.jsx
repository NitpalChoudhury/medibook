import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            MediScan
          </h2>
          <p className="text-gray-600 text-sm">
            Book diagnostic tests and doctor appointments online with ease.
            Fast, reliable and NABL certified labs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-blue-600">Doctors</Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-blue-600">Book Test</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Blood Test</li>
            <li>MRI Scan</li>
            <li>CT Scan</li>
            <li>X-Ray</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-600 text-sm">

            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>support@mediscan.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Kolkata, India</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MediScan. All rights reserved.
      </div>
    </footer>
  );
}
