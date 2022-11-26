import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Posts from "./components/Posts";
// import SinglePost from "./components/SinglePost";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";

export default function App() {

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Posts" element={<Posts />}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}
