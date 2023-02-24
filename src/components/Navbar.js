// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";


export default function Navbar() {
  return (
    
    <header className="bg-newwinter-darkest md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-newwinter-lightest mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl">
            Natalie Pitts
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 text-newwinter-lightest hover:text-newwinter-light">
            About 
          </a>
          <a href="#skills" className="mr-5 text-newwinter-lightest hover:text-newwinter-light">
            Skills 
          </a>
          <a href="#projects" className="mr-5 text-newwinter-lightest hover:text-newwinter-light">
            Projects 
          </a>
          <a href="#contact" className="text-newwinter-lightest  mr-5 hover:text-newwinter-light">
          Say Hello 
          </a>
          
          {/* <a href="#testimonials" className="mr-5 hover:text-gray-400">
            Testimonials
          </a> */}
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://www.linkedin.com/in/natalie-pitts-a679271a0/" className="mr-4" target="_blank" fgColor="#fff" style={{ width: 35, height: 35}}/>
                <SocialIcon url="https://github.com/nataliePitts" className="mr-4" target="_blank" fgColor="#fff" style={{ width: 35, height: 35}}/>
                <SocialIcon url="https://www.facebook.com/chucha.pitts/" className="mr-4" target="_blank" fgColor="#fff" style={{ width: 35, height: 35}}/>
                <SocialIcon url="https://www.instagram.com/nati.pitts/" className="mr-4" target="_blank" fgColor="#fff" style={{ width: 35, height: 35}}/>
                </div>
       
      </div>
    </header>
  );
}