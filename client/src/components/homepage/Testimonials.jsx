import React, { useRef, useEffect } from "react";
import { testimonies } from "./testimonies";
import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import Review from "./Review";

export default function Testimonials() {
  new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    modules: [Navigation, Pagination],
  });

  return (
    <section id="testimonials" class="students-testimonials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
          <p>What our students are saying</p>
        </div>
        
        <div
          class="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row">
            <Review />
            
          </div>
          {/* <div class="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  );
}
