import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Satisfied Customers', value: '10,000+' },
    { label: 'Product Categories', value: '500+' },
    { label: 'Expert Staff', value: '50+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We ensure all our products meet the highest quality standards'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: "Our customers' satisfaction is our top priority"
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We value your time and ensure prompt service delivery'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Our team brings years of industry expertise'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted partner in hardware, agriculture, and automotive care since 2008
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Vijay E-commerce has grown from a small hardware store to a comprehensive solution provider for hardware, agricultural tools, and car care services.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been driven by a commitment to quality, customer service, and continuous improvement. We take pride in being a one-stop destination for all your hardware and automotive needs.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our offerings while maintaining the same dedication to excellence that has defined us from the beginning.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000"
              alt="Our store"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}