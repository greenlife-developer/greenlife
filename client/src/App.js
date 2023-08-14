import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Students from "./components/homepage/Students";
import Contact from "./components/contacts/Contact";
import About from './components/homepage/About';
import Courses from './components/homepage/Courses';
import Trainers from './components/homepage/Trainers';
import Student from './components/home/Student';
import 'remixicon/fonts/remixicon.css';
import 'swiper/css/bundle';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./components/homepage/style.css";
import "./components/homepage/mediaq.css";
const helmetContext = {};


// import "./components/homepage/style.css";



export default function App() {
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}