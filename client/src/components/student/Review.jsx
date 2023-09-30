import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView="1"
        spaceBetween="10"
        effect={window.screen.width <= 425 ? "creative" : "normal"}
        autoplay={{
          delay: 5000,
        }}
        creativeEffect={{
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
          },
          next: {
            // will set `translateX(100%)` on* next slides
            translate: ["100%", 0, 0],
          },
        }}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px***
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                class="testimonial-img"
                alt="gnlife testimonials"
              />
              <h3>Afolayan Peter</h3>
              <h4>Student</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                GNLife highly recommended for excellent mentoring. My coding
                skills improved thanks to their expertise, supervision, and
                simple explanations.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                class="testimonial-img"
                alt="gnlife testimonials"
              />
              <h3>Ajibola</h3>
              <h4>Student</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                GNLIFE has really improved my coding skills. The tutors are
                good at what they do, and they are also good listeners in
                answering our questions. Thanks to GNLIFE
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-4.JPG"
                class="testimonial-img"
                alt="gnlife testimonials"
              />
              <h3>Ajetumobi Ireoluwa</h3>
              <h4>Student</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>I am very
                happy and exited to be a student at GNLIFE. I started as a
                nobody in the tech field and now I make professional websites.
                Thank you GNLife!
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                class="testimonial-img"
                alt="gnlife testimonials"
              />
              <h3>Afolabi Opeyemi</h3>
              <h4>Tutor</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Working as a developer at GNLife is an experience I am grateful
                for because our students are really growing and they are happy.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
