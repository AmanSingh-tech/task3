import React from 'react';

const ExtraFeatures = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Extra features</h2>
          <p className="text-gray-600 mb-12">
            Make the most of our free quiz maker with these handy features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Timer Feature */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Timer</h3>
              <p className="text-gray-600">
                Add an element of pressure by setting a time limit to answer the
                questions.
              </p>
            </div>
            {/* Quiz Question Generator Feature */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4m16 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quiz question generator
              </h3>
              <p className="text-gray-600">
                Short on time or ideas? Generate a random quiz question in one
                click.
              </p>
            </div>
            {/* Suggested Options Feature */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9.5V16m0 0a2 2 0 100 4 2 2 0 100-4zm0-10a2 2 0 100-4 2 2 0 100 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Suggested options <span className="text-sm font-medium">(BETA)</span>
              </h3>
              <p className="text-gray-600">
                Create quizzes faster by letting Slido suggest potential options
                for your quiz questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExtraFeatures;3.
  