import React from 'react';
  
export default function Footer() {
    return (

  <footer className="bg-purple-light">
      <div className="container px-2 py-1 mx-auto text-center lg:px-2">
        <div className="flex flex-col mb-50">
          <h1 className="sm:text-lg text-lg font-medium title-font mb-4 text-purple-darkest">
          © 2022 Natalie Pitts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
         Made with React.js
          </p>
        </div>
      </div>
  
  </footer>
   );
  
    }