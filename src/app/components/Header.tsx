"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react"; // Import icons from Lucide React

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Persist dark mode across reloads
  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", isDarkMode.toString());
  }, [isDarkMode]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 bg-white dark:black text-black dark:text-white relative transition-colors duration-300">
      {/* Logo & Theme Toggle */}
      <div className="flex items-center space-x-4 ml-4 mr-4">
        <Link href="/">
          <Image
            src="https://logosandtypes.com/wp-content/uploads/2024/08/tango.svg"
            alt="Technova Logo"
            width={70}
            height={35}
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {["Product", "Solutions", "Pricing", "Resources", "Enterprise"].map(
          (item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300 transition">
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/login" className="text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300">
          Log In
        </Link>
        <Link href="/signup" className="px-4 py-2 text-white text-lg font-medium bg-purple-600 rounded-md hover:bg-purple-500 transition">
          Sign Up
        </Link>
        <button onClick={toggleTheme} className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {isDarkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-500" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-black dark:text-white focus:outline-none absolute right-16 z-50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40" onClick={toggleMenu} />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-black dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-start mt-16 space-y-6 px-6">
          {["Product", "Solutions", "Pricing", "Resources", "Enterprise"].map(
            (item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300" onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            )
          )}
          <li>
            <Link href="/login" className="text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300" onClick={toggleMenu}>
              Log In
            </Link>
          </li>
          <li>
            <Link href="/signup" className="block w-full px-4 py-2 text-center text-white text-lg font-medium bg-purple-600 rounded-md hover:bg-purple-500 transition" onClick={toggleMenu}>
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Dark Mode Button in Mobile */}
        <button onClick={toggleTheme} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {isDarkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-500" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
