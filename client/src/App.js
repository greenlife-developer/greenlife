import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Students from "./components/homepage/Students";
import Contact from "./components/contacts/Contact";
import About from './components/homepage/About';
import Courses from './components/homepage/Courses';
import Trainers from './components/homepage/Trainers';

// import "./components/homepage/style.css";



export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </Router>
    </div>
  );
}