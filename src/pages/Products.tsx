import React from 'react';
import { PenTool as Tool, Wrench, Hammer, Plug, Tractor, Shovel } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      title: 'Hardware Products',
      id: 'hardware',
      description: 'Professional-grade tools and equipment for all your needs',
      products: [
        {
          name: 'Power Tools',
          brands: ['Bosch', 'Stanley', 'DeWalt'],
          icon: Tool,
          image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800',
          priceRange: '$99 - $499',
          featured: {
            name: 'Bosch Power Drill Set',
            price: '$299'
          }
        },
        {
          name: 'Hand Tools',
          brands: ['Stanley', 'Craftsman'],
          icon: Hammer,
          image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
          priceRange: '$15 - $149',
          featured: {
            name: 'Stanley Professional Tool Kit',
            price: '$129'
          }
        },
        {
          name: 'Electrical Fittings',
          brands: ['Havells', 'Schneider'],
          icon: Plug,
          image: 'https://images.unsplash.com/photo-1558424871-c0cc31dea15d?auto=format&fit=crop&q=80&w=800',
          priceRange: '$5 - $99',
          featured: {
            name: 'Schneider Circuit Breaker Set',
            price: '$79'
          }
        }
        ,
        {
          name: 'Hand Tools',
          brands: ['Stanley', 'Craftsman'],
          icon: Hammer,
          image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
          priceRange: '$15 - $149',
          featured: {
            name: 'Stanley Professional Tool Kit',
            price: '$129'
          }
        }
        ,
        {
          name: 'Hand Tools',
          brands: ['Stanley', 'Craftsman'],
          icon: Hammer,
          image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
          priceRange: '$15 - $149',
          featured: {
            name: 'Stanley Professional Tool Kit',
            price: '$129'
          }
        }
        
        
      ]
    },
    {
      title: 'Agricultural Tools',
      id: 'agriculture',
      description: 'Quality farming and gardening equipment for optimal results',
      products: [
        {
          name: 'Irrigation Equipment',
          brands: ['Jain Irrigation', 'KisanKraft'],
          icon: Tractor,
          image: 'https://images.unsplash.com/photo-1592982537447-6e3e1981b2d3?auto=format&fit=crop&q=80&w=800',
          priceRange: '$199 - $999',
          featured: {
            name: 'Smart Irrigation System',
            price: '$599'
          }
        },
        {
          name: 'Hand Tools',
          brands: ['Falcon', 'Mahindra'],
          icon: Shovel,
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
          priceRange: '$25 - $199',
          featured: {
            name: 'Professional Garden Tool Set',
            price: '$149'
          }
        },
        {
          name: 'Maintenance Tools',
          brands: ['KisanKraft', 'Falcon'],
          icon: Wrench,
          image: 'https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?auto=format&fit=crop&q=80&w=800',
          priceRange: '$49 - $299',
          featured: {
            name: 'KisanKraft Maintenance Kit',
            price: '$249'
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive range of quality tools and equipment
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => (
          <div key={category.id} id={category.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
            <p className="text-gray-600 mb-8">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <product.icon className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">Featured Item:</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-800">{product.featured.name}</span>
                        <span className="text-green-600 font-semibold">{product.featured.price}</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-gray-600 mb-2">Available Brands:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand, brandIndex) => (
                          <span
                            key={brandIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}