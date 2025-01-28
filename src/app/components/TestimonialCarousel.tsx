"use client";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        quote:
            "TechNova has revolutionized our digital transformation journey. Their innovative solutions have increased our team’s productivity and engagement significantly.",
        author: "Jane Doe",
        position: "Chief Technology Officer",
        companyName: "TechNova Corp",
        companyLogo: "/technova-logo.png", // Replace with your logo file path
        image: "/jane-doe.png", // Replace with the user image path
    },
    {
        id: 2,
        quote:
            "The collaboration with TechNova has been fantastic. Their team’s dedication to understanding our needs made all the difference in the success of our project.",
        author: "Michael Johnson",
        position: "Product Manager",
        companyName: "InnovateTech",
        companyLogo: "/innovate-logo.png", // Replace with your logo file path
        image: "/michael-johnson.png", // Replace with the user image path
    },
    {
        id: 3,
        quote:
            "TechNova’s attention to detail and commitment to quality have been essential in helping us meet our project goals and deadlines. We’re looking forward to continuing our partnership.",
        author: "Emily Richards",
        position: "Senior Developer",
        companyName: "Web Solutions",
        companyLogo: "/websolutions-logo.png", // Replace with your logo file path
        image: "/emily-richards.png", // Replace with the user image path
    },
    {
        id: 4,
        quote:
            "TechNova’s expertise in AI and machine learning has helped us drive forward our product innovations. The value they’ve brought to the table is unmatched.",
        author: "David Lee",
        position: "Head of AI Development",
        companyName: "AI Systems",
        companyLogo: "/aisystems-logo.png", // Replace with your logo file path
        image: "/david-lee.png", // Replace with the user image path
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
                        <img
                            src={image}
                            alt={author}
                            className="w-28 h-28 rounded-full object-cover border-4 border-white"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <img
                            src={companyLogo}
                            alt={`${companyName} Logo`}
                            className="h-12"
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
