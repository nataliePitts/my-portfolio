import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-900">
            Hi, I'm Natalie.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps and websits.
          </h1>
          <p className="mb-8 leading-relaxed">
            B. A in Data Science and Internet Technology (Bar-Ilan University).
            <br/>
            Specializes in building dynamic websites, combining innovative design and marketing models from the digital world.
            <br/>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg">
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./npitts.jpg"
          />
        </div>
      </div>
    </section>
  );
}