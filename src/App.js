import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-pink-700 bg-orange-100 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <br/>
      <Footer />
    </main>
  );
}
