import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-18 py-4  bg-white max-w-screen-xl mx-auto">
      {/* Logo */}
      {/* <div>
        <Link href="/">
          <Image
            src="https://www.slido.com/static/slido-logo.a3d453e1.svg" // Replace with your image path
            alt="Slido Logo"
            width={70} // Adjust width as needed
            height={35} // Adjust height as needed
            priority 
          />
        </Link>
      </div> */}

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link href="/product" className="text-gray-700 hover:text-gray-900">
            Product
          </Link>
        </li>
        <li>
          <Link href="/solutions" className="text-gray-700 hover:text-gray-900">
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/resources" className="text-gray-700 hover:text-gray-900">
            Resources
          </Link>
        </li>
        <li>
          <Link href="/enterprise" className="text-gray-700 hover:text-gray-900">
            Enterprise
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-6">
        <Link
          href="/contact-sales"
          className="hidden md:block text-gray-700 hover:text-gray-900"
        >
          Contact sales
        </Link>
        <Link
          href="/login"
          className="hidden md:block text-gray-700 hover:text-gray-900"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 hover:px-5 hover:py-2"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
