import React, { useRef, useEffect } from "react";
import { testimonies } from "./testimonies";
import Review from "./Review";

export default function Testimonials() {

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
