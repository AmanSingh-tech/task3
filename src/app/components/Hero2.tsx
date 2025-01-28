import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-6  dark:bg-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Our Core Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We offer a range of cutting-edge services designed to help your business
          succeed in the digital age. Whether you&apos;re looking for web development, cloud
          solutions, or AI/ML services, we have the expertise to deliver top-notch
          results.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 dark:bg-black lg:grid-cols-3 gap-8 px-6">
        {/* Web Development */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-lg mb-6">
            We build responsive, user-friendly websites tailored to your business
            needs. From simple landing pages to complex web applications, we bring
            your ideas to life with modern technologies.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Cloud Solutions */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Cloud Solutions</h2>
          <p className="text-lg mb-6">
            Optimize your business infrastructure with our cloud services. We provide
            scalable and secure cloud solutions to ensure your business operations run
            smoothly and efficiently.
          </p>
          <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* AI/ML Services */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">AI/ML Services</h2>
          <p className="text-lg mb-6">
            Leverage the power of artificial intelligence and machine learning to
            revolutionize your business processes. We offer custom AI/ML solutions to
            solve complex problems and enhance decision-making.
          </p>
          <button className="bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt- dark:bg-black 16 py-4">
        <p className="text-sm text-gray-500  dark:text-white mt-4">
          Join the 17,536 businesses that have already benefited from our services
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
