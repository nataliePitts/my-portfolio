import React from 'react';
  
export default function Footer() {
    return (

  <footer className="bg-purple-light">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col mb-20">
          <h1 className="sm:text-lg text-lg font-medium title-font mb-4 text-purple-darkest">
          Handcrafted by me © Natalie Pitts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
         Made with React.js
          </p>
        </div>
      </div>
  
  </footer>
   );
  
    }