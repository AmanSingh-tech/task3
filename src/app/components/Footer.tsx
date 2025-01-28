import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimized images

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-10 border-t">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://your-logo-url.com/logo.png" // Replace with Technova logo path
            alt="Technova Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Technova Cloud</a></li>
              <li><a href="#" className="hover:text-blue-600">AI Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600">Automation Tools</a></li>
              <li><a href="#" className="hover:text-blue-600">Data Analytics</a></li>
              <li><a href="#" className="hover:text-blue-600">Tech Support</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600">SME Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-blue-600">Blockchain Services</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
              <li><a href="#" className="hover:text-blue-600">Partners</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600">Webinars</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2025 Technova. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
