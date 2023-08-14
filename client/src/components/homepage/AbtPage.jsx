import React from "react";

export default function AbtPage() {
  return (
    <section id="about" class="about-gnlife">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="about-img"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src="assets/img/about.jpg" class="" alt="" />
          </div>
          <div class="content">
            <h3>
              We are building a community of young people with high in-demand
              skills.
            </h3>
            <p class="fst-italic">
              You will go through a six months of training that will build your
              skills and shape your culture. When you register, you'll get:
            </p>
            <ul role="list">
              <li data-icon="">
                <i class="ri-checkbox-circle-line"></i>
                Learn from professional in a conducive environment.
              </li>
              <li data-icon="">
                <i class="ri-checkbox-circle-line"></i>
                Be a part of a fast growing community of skilled and in-demand
                individuals.
              </li>
              <li data-icon="">
                <i class="ri-checkbox-circle-line"></i>
                Develop personal projects paying little or no amount with the
                help of the community.
              </li>
            </ul>
            <p>
              We provide maximum support for any and everyone of our students
              who wants to explore any aspect of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
