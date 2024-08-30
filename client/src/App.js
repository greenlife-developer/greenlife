import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Students from "./components/student/Students";
import Contact from "./components/contacts/Contact";
import About from './components/student/About';
import Courses from './components/student/course/Courses';
import Trainers from './components/student/Trainers';
import BookForm from './components/services/forms/BookForm';
import Service from './components/services/Service';
import 'remixicon/fonts/remixicon.css';
import 'swiper/css/bundle';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./css/style.css";
import "./css/mediaq.css";
import "./css/index.css";
import "./css/service.css";
import "./css/indexquery.css";
import Products from './components/amazonProducts/Products';
import FiverrGigPage from './components/fiverr/FiverGigPage';
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
            <Route path="/services" element={<Service />} />
            <Route path="/services/service/:id" element={<BookForm />} />
            <Route path="/amazon_afiliate_products" element={<Products />} />
            <Route path="/promoting_gig_page" element={<FiverrGigPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}