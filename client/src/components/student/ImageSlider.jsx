import React, { useState } from "react";
import { testimonies } from "./testimonies";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <i onClick={prevSlide} class="ri-arrow-left-s-line left-arrow"></i>
      <i onClick={nextSlide} class="ri-arrow-right-s-line right-arrow"></i>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      {testimonies.map((slide, index) => {
        return (
          <>
            {/* <div class="testimonial-wrap"> */}
            <div
              className={
                index === current
                  ? "slide testimonial-item active"
                  : "slide testimonial-item"
              }
              key={index}
            >
              {index === current && (
                // <img src={slide.image} alt="travel image" className="image" />
                <>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    class="testimonial-img"
                    alt="gnlife testimonials"
                  />
                  <h3>Afolabi Opeyemi</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Working as a developer at GNLife is an experience I am
                    grateful for because our students are really growing and
                    they are happy.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </>
              )}
            </div>
            {/* </div> */}

            {/* <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div> */}
          </>
        );
      })}
    </section>
  );
};

export default ImageSlider;
