import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        About Us
      </h2>

      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h3>
        <p className="text-lg text-gray-600 mb-12">
          At TechNova, our mission is to innovate, transform, and lead the way in technological advancements. 
          We are committed to pushing the boundaries of what's possible and empowering businesses and individuals 
          to thrive in the digital age.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Vision</h3>
        <p className="text-lg text-gray-600">
          Our vision is to be at the forefront of the digital revolution, offering cutting-edge solutions in AI, 
          cloud technologies, and more. We strive to create an inclusive and future-ready world, transforming 
          industries and improving lives through innovation.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-black">John Doe</h4>
          <p className="text-sm text-gray-600">CEO & Founder</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-black">Jane Smith</h4>
          <p className="text-sm text-gray-600">CTO</p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-black">Sam Johnson</h4>
          <p className="text-sm text-gray-600">Lead Developer</p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md shadow-lg hover:bg-blue-700">
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
