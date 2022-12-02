import React from "react";
import CTA from './CTA'
import './about.css'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-darkest">
          Marketing and Website Development 
            <br className="hidden lg:inline-block" /> <br/> 
          </h1>
          <b>Data Engineer at Webhelp Israel</b>
          <p className="mb-8 leading-relaxed">
            A Digital Expert who loves to design and code incredibly simple things, <br/> creates marketing content and lives the digital world
          </p>
          <div className="flex justify-center">
           <CTA/>
            {/* <a
              href="#contact"
              className="inline-flex text-purple-lightest bg-purple-darkest border-0 py-2 px-6 focus:outline-none hover:bg-purple-light rounded text-lg">
              Let's Connect
            </a>
            
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <div className="container about__container">
          <div className="about__me-image">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./natalie.png"
          />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}