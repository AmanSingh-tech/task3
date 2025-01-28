import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimized images

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black text-black dark:text-white py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div>
          <Image
            src="https://logosandtypes.com/wp-content/uploads/2024/08/tango.svg" // Replace with your image path
            alt="Slido Logo"
            width={70} // Adjust width as needed
            height={35} // Adjust height as needed
            priority
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Technova Cloud</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">AI Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Automation Tools</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Data Analytics</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Tech Support</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">SME Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blockchain Services</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Press</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Partners</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Webinars</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2025 Technova. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
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
