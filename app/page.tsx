"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Eyewear Collection",
      subtitle: "Discover our latest designs",
      bg: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
      title: "Summer Special Offers",
      subtitle: "Up to 30% off on selected items",
      bg: "bg-gradient-to-r from-amber-500 to-pink-500",
    },
    {
      title: "Custom Lens Crafting",
      subtitle: "Tailored to your vision needs",
      bg: "bg-gradient-to-r from-emerald-500 to-teal-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const products = [
    { id: 1, name: "Classic Aviator", price: "$129", category: "Sunglasses" },
    { id: 2, name: "Modern Round", price: "$99", category: "Eyeglasses" },
    { id: 3, name: "Sport Shield", price: "$159", category: "Sunglasses" },
    { id: 4, name: "Vintage Square", price: "$89", category: "Eyeglasses" },
    { id: 5, name: "Designer Cat-Eye", price: "$179", category: "Eyeglasses" },
    { id: 6, name: "Polarized Wayfarer", price: "$149", category: "Sunglasses" },
  ];

  return (
    <>
      <Head>
        <title>LensCrafterHub - Premium Eyewear</title>
        <meta name="description" content="Discover our collection of premium eyewear and custom lenses" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Slider */}
        <section className="relative h-screen -mt-16">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className={`w-full h-full ${slide.bg} flex items-center justify-center`}>
                <div className="text-center px-4 max-w-4xl mx-auto text-white animate-fadeInUp">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover our handcrafted eyewear collection designed for style and comfort</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Product Image</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose LensCrafterHub</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We combine quality craftsmanship with innovative design</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Premium Materials",
                  description: "Our frames are made from high-quality acetate and lightweight metals for durability and comfort."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Fast Delivery",
                  description: "Get your eyewear delivered within 3-5 business days with our express shipping options."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  title: "Secure Payment",
                  description: "Shop with confidence using our secure payment options and buyer protection."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-blue-600 mb-4 mx-auto w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Pair?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust LensCrafterHub for their eyewear needs</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                Shop Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Book an Eye Test
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LensCrafterHub</h3>
              <p className="text-gray-400">Crafting vision, defining style since 2010.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Special Offers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Eyewear Street</li>
                <li className="text-gray-400">Vision City, VC 10001</li>
                <li className="text-gray-400">info@lenscrafterhub.com</li>
                <li className="text-gray-400">(123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LensCrafterHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}