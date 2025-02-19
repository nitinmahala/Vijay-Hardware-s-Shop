import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vijay E-commerce</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop solution for hardware products, agricultural tools, and professional car wash services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 text-sm">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-green-500 text-sm">Products</Link>
              </li>
              <li>
                <Link to="/car-wash" className="text-gray-400 hover:text-green-500 text-sm">Car Wash</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Hardware Solutions</li>
              <li className="text-gray-400 text-sm">Agricultural Equipment</li>
              <li className="text-gray-400 text-sm">Car Wash & Detailing</li>
              <li className="text-gray-400 text-sm">Professional Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Business Street, City, State</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@vijayecommerce.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vijay E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}