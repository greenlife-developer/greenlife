import React from "react";

export default function AbtPage() {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              We are building a community of young people with high in-demand
              skills.
            </h3>
            <p class="fst-italic">
              You will go through a six months of training that will build your
              skills and shape your culture. When you register, you'll get:
            </p>
            <ul>
              <li>
                <i class="bi bi-check-circle"></i> Learn from professional in a
                conducive environment.
              </li>
              <li>
                <i class="bi bi-check-circle"></i> Be a part of a fast growing
                community of skilled and in-demand individuals.
              </li>
              <li>
                <i class="bi bi-check-circle"></i> Develop personal projects
                paying little or no amount with the help of the community.
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
