
import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import { useState } from "react";
import { useAlert } from 'react-alert'
const isEmpty = value => value.trim() === '';


export default function Home() {
    const alert = useAlert()
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
  
    function encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }
  
    function handleSubmit(e) {
      
      e.preventDefault();
      //  //if(!isEmpty(name)){}
      // const enteredEmailIsValid = !isEmpty(email);
      // const enteredMessageIsValid = !isEmpty(message);
      // //const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;
      
      // if (formIsValid){
      //   return alert.show(<div style={{ color: 'white' }}>Message Sent!</div>);
      // }
      e.target.reset();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "test", name, email, message }),
      })
        .then(() => alert.show(<div style={{ color: 'white' }}>Message Sent!</div>))
        .catch((error) => alert(error));
     
    }
  return (
    <section id="home">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-darkest">
        Website Design and Development 
          <br className="hidden lg:inline-block" /> <br/> 
        </h1>
        <p className="mb-8 leading-relaxed">
          A Digital Expert who loves to design and code incredibly simple things, creates marketing content and lives the digital world
          <br/>
          <br/>
          B. A in Data Science and Internet Technology (Bar-Ilan University)
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-purple-lightest bg-purple-darkest border-0 py-2 px-6 focus:outline-none hover:bg-purple-light rounded text-lg">
            Let's Connect
          </a>
          
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Projects
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

    <div className="text-gray-400 bg-purple-dark body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Specializes in building dynamic websites, combining innovative design and marketing models from the digital world.

          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-light bg-purple-darkest opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-light mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-purple-lightest mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-purple-lightest">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-warm-lightest">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Tel+aviv&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-purple-darkest relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-2/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-purple-light tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-purple-lightest mt-1">
               
                Tel Aviv, Israel
              </p>
            </div>
            <div className="lg:w-2/2 px-6 mt-4 lg:mt-0">
            <br/><h2 className="title-font font-semibold text-purple-light tracking-widest text-xs">

                EMAIL
              </h2>
              <a className="text-purple-lightest leading-relaxed">

                nataliepittss.gmail.com
              </a>
              <h2 className="title-font font-semibold text-purple-light tracking-widest text-xs mt-4">

                PHONE
              </h2>
              <p className="text-purple-lightest leading-relaxed">+972-54-7769-369</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-500">
          
           For business inquiries and collaborations please contact me below. 
           I'm looking forward to hearing from you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-500">
              Name
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-purple-lightest bg-purple-dark border-0 py-2 px-6 focus:outline-none hover:bg-purple-darkest rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}