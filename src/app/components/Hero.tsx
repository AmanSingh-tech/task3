import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-16 px-0 md:px-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
      {/* Left Section (Text Content) */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Innovate. Transform. Lead.
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Welcome to <span className="font-semibold">TechNova</span>, where cutting-edge technology meets innovation. 
          Join us on a journey to shape the future of digital transformation.
        </p>
        <button className="px-6 py-3 text-white bg-blue-800 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-md">
          Get Started <FaArrowRight className="inline ml-2" />
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full max-w-[500px] h-[300px] md:h-[400px] lg:h-[500px]">
          {/* Hero Image */}
          <Image
            src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96430.jpg?t=st=1738009797~exp=1738013397~hmac=c574c2f6b92cc66e1df78241744daf52dc8fb580b4dc0b7b924e119fcf897d27&w=1380"
            alt="TechNova Innovation"
            layout="fill"
            objectFit="cover"
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
