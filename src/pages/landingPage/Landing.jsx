import React from "react";
import Navbar from "../../components/Navbar";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 leading-tight">
              <br className="hidden sm:inline" />
              User Directory & Administration Portal
            </h1>

            <p className="mb-8 leading-relaxed text-base max-w-xl mx-auto text-gray-500">
              Welcome to the central user administration interface. This
              dashboard is built entirely with React.js to fetch, handle, and
              display dynamic employee records from a RESTful API core. Navigate
              to the 'Users' tab above to explore active user cards, view deeper
              diagnostic profile screens, and experience modern client-side
              routing implementations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 border-0 py-2.5 px-6 sm:px-8 rounded-md text-base sm:text-lg font-medium shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 cursor-pointer"
              >
                Get Started
              </button>

              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-95 border border-gray-200 py-2.5 px-6 sm:px-8 rounded-md text-base sm:text-lg font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
