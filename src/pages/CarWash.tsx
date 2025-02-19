import React from 'react';
import { Car, Shield, Clock, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CarWash() {
  const services = [
    {
      name: 'Basic Wash',
      description: 'Exterior wash, tire cleaning, and basic interior vacuum',
      duration: '30-45 mins',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Full Detailing',
      description: 'Complete interior and exterior cleaning with premium products',
      duration: '2-3 hours',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Premium Polish',
      description: 'Professional polishing and waxing for a showroom finish',
      duration: '1-2 hours',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Premium Products',
      description: 'We use only the highest quality cleaning products'
    },
    {
      icon: Clock,
      title: 'Efficient Service',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: Sparkles,
      title: 'Expert Detailing',
      description: 'Professional staff with years of experience'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
            alt="Car wash hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Car Wash Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Keep your vehicle looking its best with our expert car wash and detailing services
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Book an Appointment
            <Phone className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your car wash appointment. We'll make your vehicle shine!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Contact Us
            <Phone className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}