import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-black py-20 px-6">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-10 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Get in Touch
        </h3>
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Google Maps Integration */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-center text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Our Location
        </h3>
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 p-4">
          <div className="relative w-full h-[400px]">
            <iframe
              className="w-full h-full rounded-xl"
              height="400"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
