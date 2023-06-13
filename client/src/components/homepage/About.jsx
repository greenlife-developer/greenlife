import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import AbtPage from "./AbtPage";

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

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" class="counts section-bg">
          <div class="container">
            <div class="row counters">
              <div class="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Students</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="64"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Courses</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="42"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Events</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" class="testimonials">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Testimonials</h2>
              <p>What are they saying</p>
            </div>

            <div
              class="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
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
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        class="testimonial-img"
                        alt="gnlife testimonials"
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        class="testimonial-img"
                        alt="gnlife testimonials"
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        class="testimonial-img"
                        alt="gnlife testimonials"
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
      </main>
      <Footer />
    </div>
  );
}
