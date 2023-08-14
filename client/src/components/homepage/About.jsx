import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import AbtPage from "./AbtPage";
import Testimonials from "./Testimonials";
import Counts from "./Counts";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs" data-aos="fade-in">
          <div class="container">
            <h2>About Us</h2>
            <p>
              GNLife is the solution to development in Nigeria. We are raised to
              raise, blessed to bless. Every energy is towards creating people,
              products and services that will change the world.
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        <AbtPage />

        <Counts />
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
