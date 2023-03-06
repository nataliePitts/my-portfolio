
import React, { useState } from "react";
import { useAlert } from 'react-alert'

const isEmpty = value => value.trim() === '';

export default function Contact() {
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
    <section id="contact"><br/> <br/><br/><br/><br/> 
    <section  className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-newwinter-lightest">
        <div className="lg:w-2/3 md:w-1/2 bg-newwinter-lightest rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
          <div className="bg-newwinter-darkest relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-2/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-newwinter-light tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-newwinter-lightest mt-1">
               
                Tel Aviv, Israel
              </p>
            </div>
            <div className="lg:w-2/2 px-6 mt-4 lg:mt-0">
            <br/><h2 className="title-font font-semibold text-newwinter-light tracking-widest text-xs">

                EMAIL
              </h2>
              <a className="text-newwinter-lightest leading-relaxed">

                nataliepittss@gmail.com
              </a>
              <h2 className="title-font font-semibold text-newwinter-light tracking-widest text-xs mt-4">

                PHONE
              </h2>
              <p className="text-newwinter-lightest leading-relaxed">+972-54-7769-369</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-newwinter-darkest sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-newwinter-dark">
          
          <br/> For business inquiries and collaborations please contact me below.<br/><br/> 
           I'm looking forward to hearing from you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-500">
              <b>Name</b>
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              className="w-full bg-newwinter-lightest rounded border focus:border-newwinter-light focus:ring-2 focus:ring-newwinter-light1 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-500">
             <b>Email</b>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-newwinter-lightest rounded border focus:border-newwinter-light focus:ring-2 focus:ring-newwinter-light1 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-500">
              <b>Message</b>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-newwinter-lightest rounded border focus:border-newwinter-light focus:ring-2 focus:ring-newwinter-light1 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-newwinter-lightest bg-newwinter-dark border-0 py-2 px-6 focus:outline-none hover:bg-purple-darkest rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
    </section>
  );
}