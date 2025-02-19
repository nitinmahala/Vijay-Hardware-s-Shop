import React from 'react';
import { PenTool as Tool, Tractor, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Hardware Products',
      description: 'Quality tools and equipment from trusted brands',
      icon: Tool,
      image: 'https://images.unsplash.com/photo-1581147036324-c1c9597a378b?auto=format&fit=crop&q=80&w=1000',
      link: '/products#hardware'
    },
    {
      title: 'Agricultural Tools',
      description: 'Professional farming and gardening equipment',
      icon: Tractor,
      image: 'https://images.unsplash.com/photo-1592982537447-6e3e1981b2d3?auto=format&fit=crop&q=80&w=1000',
      link: '/products#agriculture'
    },
    {
      title: 'Car Wash Services',
      description: 'Professional car cleaning and detailing',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000',
      link: '/car-wash'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=2000"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Partner in Quality Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Hardware Products • Agricultural Tools • Car Wash Services
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <service.icon className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our store or contact us today to explore our wide range of products and services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}