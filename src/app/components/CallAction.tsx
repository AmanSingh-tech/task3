import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-[#FBF8F1] py-16">
            <div className="max-w-3xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Energize your participants with live quizzes.
                </h2>

                {/* Button */}
                <a
                    href="#"
                    className="inline-block bg-green-700 text-white px-6 py-3 text-lg rounded-md hover:bg-black transition"
                >
                    Create your quiz for free
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
