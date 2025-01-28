"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-black py-20 px-6 transition-colors duration-300">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
        About Us
      </h2>

      {/* Mission and Vision Section */}
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            At <span className="text-blue-600 dark:text-purple-400 font-medium">TechNova</span>, our mission is to innovate, transform, and lead 
            the way in technological advancements. We are committed to pushing the boundaries of 
            what&apos;s possible and empowering businesses and individuals to thrive in the digital age.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Our Vision
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our vision is to be at the forefront of the digital revolution, offering cutting-edge 
            solutions in AI, cloud technologies, and beyond. We strive to create an inclusive 
            and future-ready world, transforming industries and improving lives through innovation.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20 grid  dgrid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          { name: "Aman Singh", role: "CEO & Founder", img: "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg" },
          { name: "Avis Lowha", role: "CTO", img: "https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg" },
          { name: "Vasu Mehotra", role: "Lead Developer", img: "https://www.corporatephotographerslondon.com/wp-content/uploads/2021/09/corporate-headshots-retouching.jpg" },
        ].map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-purple-600 rounded-xl shadow-lg shadow-blue-600 dark:shadow-purple-600 hover:shadow-purple-600 dark:hover:shadow-blue-600 p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 dark:bg-purple-600 text-white text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
