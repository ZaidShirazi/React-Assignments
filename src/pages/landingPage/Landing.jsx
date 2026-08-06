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
              Landing Page
            </h1>

            <p className="mb-8 leading-relaxed text-base max-w-xl mx-auto text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi dolorum, qui ea voluptate vero doloremque corporis quam voluptas ullam non obcaecati fugiat quia incidunt ad? Itaque voluptatum nihil quidem!
            </p>

            <div className="flex justify-center gap-4">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-200 ease-in-out shadow-sm font-medium">
                Get Started
              </button>
              <button className="inline-flex text-gray-700 bg-gray-100 border border-gray-300 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg transition-colors duration-200 ease-in-out">
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
