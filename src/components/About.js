import React from "react";
import CTA from './CTA'

export default function About() {
  return (
    <section id="about bg-newwinter-light">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-newwinter-darkest">
          Data Engineer 
            <br className="hidden lg:inline-block text-newwinter-dark" /> <br/> 
          </h1>
          <p className="mb-8 leading-relaxed text-newwinter-dark">
          <b className="text-newwinter-darkest">Data Science and Internet Technology Expert </b>that enjoys creating and coding things from the scratch, 
          <br/> as well as bringing ideas to life in the digital world. 
          <br/>
          <br/> My ambition is to always think forward and to be inspired and motivated to study more
          <br/> 
          <br/> Being creative, innovative, dynamic, and hardworking are the keys to future success.
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
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./nat23.jpg"
          />
        </div>
      </div>
    </section>
  );
}