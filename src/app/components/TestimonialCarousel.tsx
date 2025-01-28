"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        quote:
            "TechNova has revolutionized our digital transformation journey. Their innovative solutions have increased our team’s productivity and engagement significantly.",
        author: "Jane Doe",
        position: "Chief Technology Officer",
        companyName: "TechNova Corp",
        companyLogo: "https://logosandtypes.com/wp-content/uploads/2024/08/tango.svg", // Replace with your logo file path
        image: "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg", // Replace with the user image path
    },
    {
        id: 2,
        quote:
            "The collaboration with TechNova has been fantastic. Their team’s dedication to understanding our needs made all the difference in the success of our project.",
        author: "Michael Johnson",
        position: "Product Manager",
        companyName: "InnovateTech",
        companyLogo: "https://logosandtypes.com/wp-content/uploads/2024/08/tango.svg", // Replace with your logo file path
        image: "https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg", // Replace with the user image path
    },
    {
        id: 3,
        quote:
            "TechNova’s attention to detail and commitment to quality have been essential in helping us meet our project goals and deadlines. We’re looking forward to continuing our partnership.",
        author: "Emily Richards",
        position: "Senior Developer",
        companyName: "Web Solutions",
        companyLogo: "https://logosandtypes.com/wp-content/uploads/2024/08/tango.svg", // Replace with your logo file path
        image: "https://www.corporatephotographerslondon.com/wp-content/uploads/2021/09/corporate-headshots-retouching.jpg", // Replace with the user image path
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const { quote, author, position, companyName, companyLogo, image } =
        testimonials[current];

    return (
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Profile Image and Company Logo */}
                <div className="flex items-center justify-center space-x-8 mb-8">
                    <div className="relative w-28 h-28">
                        <Image
                            src={image}
                            alt={author}
                            className="w-28 h-28 rounded-full object-cover border-4 border-white"
                            width={112}  // Adjust width
                            height={112} // Adjust height
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image
                            src={companyLogo}
                            alt={`${companyName} Logo`}
                            className="h-12"
                            width={48}  // Adjust width
                            height={48} // Adjust height
                        />
                    </div>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl font-medium leading-relaxed text-gray-100">
                    <span className="text-6xl font-extrabold text-white">“</span> {quote}
                </blockquote>

                {/* Author and Position */}
                <div className="mt-8">
                    <p className="text-lg font-semibold">{author}</p>
                    <p className="text-sm font-light text-gray-300">{position}</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center mt-10 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-200 transition duration-300"
                    >
                        &larr;
                    </button>
                    <span className="text-lg font-semibold text-white">
                        {current + 1}/{testimonials.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-200 transition duration-300"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
