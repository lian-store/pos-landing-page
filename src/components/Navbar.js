import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-2xl">Toast POS</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary transition-colors duration-300">
                Pricing
              </a>
              <a href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary transition-colors duration-300">
                Testimonials
              </a>
              <a href="#faq" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn-primary">
              Free Trial
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Features
          </a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Pricing
          </a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Testimonials
          </a>
          <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            FAQ
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary-dark">
            Free Trial
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 