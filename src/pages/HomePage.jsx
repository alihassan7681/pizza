import React, { useState } from 'react';
import { FaPizzaSlice, FaBolt, FaLeaf, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pizzas = [
    { name: "Margherita Supreme", price: "PKR 1299", desc: "Fresh mozzarella, basil & tomato sauce", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { name: "Pepperoni Blast", price: "PKR 1499", desc: "Double pepperoni with extra cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop" },
    { name: "Veggie Delight", price: "PKR 1399", desc: "Bell peppers, mushrooms, olives & onions", image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop" },
    { name: "BBQ Chicken", price: "PKR 1599", desc: "Grilled chicken with BBQ sauce", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
    { name: "Meat Lovers", price: "PKR 1699", desc: "Pepperoni, sausage, bacon & ham", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop" },
    { name: "Hawaiian Paradise", price: "PKR 1499", desc: "Ham, pineapple & mozzarella", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-pizza-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-pizza-black/95 backdrop-blur-sm border-b border-pizza-yellow/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-pizza-yellow rounded-full flex items-center justify-center">
                <FaPizzaSlice className="text-pizza-black text-xl md:text-2xl" />
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-pizza-yellow">Pizza Planet</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-pizza-yellow transition-colors">Home</a>
              <a href="#menu" className="hover:text-pizza-yellow transition-colors">Menu</a>
              <a href="#about" className="hover:text-pizza-yellow transition-colors">About</a>
              <a href="#contact" className="hover:text-pizza-yellow transition-colors">Contact</a>
            </div>

            {/* CTA Button */}
            <a href="/order" className="hidden md:block bg-pizza-yellow text-pizza-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105">
              Order Now
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-pizza-yellow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-pizza-black border-t border-pizza-yellow/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block hover:text-pizza-yellow transition-colors">Home</a>
              <a href="#menu" className="block hover:text-pizza-yellow transition-colors">Menu</a>
              <a href="#about" className="block hover:text-pizza-yellow transition-colors">About</a>
              <a href="#contact" className="block hover:text-pizza-yellow transition-colors">Contact</a>
              <a href="/order" className="block w-full bg-pizza-yellow text-pizza-black px-6 py-2 rounded-full font-semibold text-center">
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pizza-yellow/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                Welcome to <span className="text-pizza-yellow">Pizza Planet</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-300">
                The Universe's Best Pizza, Delivered to Your Doorstep! 🚀
              </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 text-gray-400">
                Fresh ingredients, authentic recipes, and out-of-this-world flavors that will transport your taste buds to another planet!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/order" className="bg-pizza-yellow text-pizza-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center space-x-2">
                  <span>Order Now</span>
                  <FaPizzaSlice />
                </a>
                <a href="#menu" className="border-2 border-pizza-yellow text-pizza-yellow px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-pizza-yellow hover:text-pizza-black transition-all transform hover:scale-105 text-center">
                  View Menu
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pizza-yellow/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] animate-bounce">
                  🍕
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-transparent to-pizza-yellow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-2xl p-6 md:p-8 hover:border-pizza-yellow transition-all transform hover:scale-105">
              <FaBolt className="text-4xl md:text-5xl mb-4 text-pizza-yellow" />
              <h3 className="text-xl md:text-2xl font-bold text-pizza-yellow mb-3">Fast Delivery</h3>
              <p className="text-gray-400">Hot and fresh pizza delivered to your door in 30 minutes or less!</p>
            </div>
            <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-2xl p-6 md:p-8 hover:border-pizza-yellow transition-all transform hover:scale-105">
              <FaLeaf className="text-4xl md:text-5xl mb-4 text-pizza-yellow" />
              <h3 className="text-xl md:text-2xl font-bold text-pizza-yellow mb-3">Fresh Ingredients</h3>
              <p className="text-gray-400">Only the finest and freshest ingredients in every pizza we make!</p>
            </div>
            <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-2xl p-6 md:p-8 hover:border-pizza-yellow transition-all transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <FaStar className="text-4xl md:text-5xl mb-4 text-pizza-yellow" />
              <h3 className="text-xl md:text-2xl font-bold text-pizza-yellow mb-3">Best Quality</h3>
              <p className="text-gray-400">Crafted with love and passion by our expert pizza chefs!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <span className="text-pizza-yellow">Special Menu</span></h2>
            <p className="text-lg sm:text-xl text-gray-400">Discover our signature pizzas made with authentic recipes</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pizzas.map((pizza, index) => (
              <div key={index} className="bg-gradient-to-br from-pizza-yellow/10 to-transparent border border-pizza-yellow/30 rounded-2xl overflow-hidden hover:border-pizza-yellow transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-pizza-yellow/20">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pizza.image} 
                    alt={pizza.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pizza-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-pizza-yellow mb-2">{pizza.name}</h3>
                  <p className="text-gray-400 mb-4">{pizza.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl md:text-3xl font-bold text-pizza-yellow">{pizza.price}</span>
                    <button className="bg-pizza-yellow text-pizza-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-pizza-yellow/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">About <span className="text-pizza-yellow">Pizza Planet</span></h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4">
                Since 1995, Pizza Planet has been serving the most delicious pizzas in the galaxy! Our secret? 
                Fresh ingredients, traditional recipes, and a whole lot of love baked into every pie.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                From our humble beginnings as a small pizzeria to becoming the neighborhood's favorite pizza destination, 
                we've never compromised on quality or taste. Every pizza is hand-tossed and made to order!
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-pizza-yellow">28+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Years</div>
                </div>
                <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-pizza-yellow">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Customers</div>
                </div>
                <div className="bg-pizza-black/50 border border-pizza-yellow/30 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-pizza-yellow">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Quality</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pizza-yellow/20 rounded-full blur-3xl"></div>
                <div className="relative text-8xl sm:text-9xl md:text-[12rem]">👨‍🍳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-pizza-yellow">Touch</span></h2>
            <p className="text-lg sm:text-xl text-gray-400">We'd love to hear from you!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pizza-yellow/10 to-transparent border border-pizza-yellow/30 rounded-2xl p-6 text-center hover:border-pizza-yellow transition-all">
              <FaPhone className="text-4xl md:text-5xl mb-4 text-pizza-yellow mx-auto" />
              <h3 className="text-lg md:text-xl font-bold text-pizza-yellow mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="bg-gradient-to-br from-pizza-yellow/10 to-transparent border border-pizza-yellow/30 rounded-2xl p-6 text-center hover:border-pizza-yellow transition-all">
              <FaEnvelope className="text-4xl md:text-5xl mb-4 text-pizza-yellow mx-auto" />
              <h3 className="text-lg md:text-xl font-bold text-pizza-yellow mb-2">Email</h3>
              <p className="text-gray-400">hello@pizzaplanet.com</p>
            </div>
            <div className="bg-gradient-to-br from-pizza-yellow/10 to-transparent border border-pizza-yellow/30 rounded-2xl p-6 text-center hover:border-pizza-yellow transition-all">
              <FaMapMarkerAlt className="text-4xl md:text-5xl mb-4 text-pizza-yellow mx-auto" />
              <h3 className="text-lg md:text-xl font-bold text-pizza-yellow mb-2">Location</h3>
              <p className="text-gray-400">123 Pizza Street, Food City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pizza-black border-t border-pizza-yellow/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pizza-yellow rounded-full flex items-center justify-center">
                <FaPizzaSlice className="text-pizza-black text-lg" />
              </div>
              <span className="text-lg md:text-xl font-bold text-pizza-yellow">Pizza Planet</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">© 2024 Pizza Planet. All rights reserved.</p>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-pizza-yellow hover:text-yellow-500 transition-colors text-xl md:text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-pizza-yellow hover:text-yellow-500 transition-colors text-xl md:text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-pizza-yellow hover:text-yellow-500 transition-colors text-xl md:text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
