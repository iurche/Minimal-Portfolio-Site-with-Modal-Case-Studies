import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <a href="#" className="text-xl font-medium bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text mb-4">
              Jane Designer
            </a>
            <p className="text-gray-400 max-w-xs">
              Strategic product designer creating digital experiences that solve
              complex problems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#work" className="text-gray-400 hover:text-white transition-colors">
                Work
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">hello@janedesigner.com</p>
            <p className="text-gray-400">San Francisco, CA</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Jane Designer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};