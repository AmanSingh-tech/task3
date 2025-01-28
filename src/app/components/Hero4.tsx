import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Get in Touch</h3>
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-black font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-black font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-lg text-black font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Google Maps Integration */}
      <div className="mt-16">
        <h3 className="text-center text-2xl font-semibold mb-4">Our Location</h3>
        <div className="relative w-full h-[400px] rounded-lg shadow-lg">
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Your+Office+Location&key=YOUR_GOOGLE_MAPS_API_KEY"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
