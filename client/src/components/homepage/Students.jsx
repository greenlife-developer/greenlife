import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import AbtPage from "./AbtPage";
import CoursesPage from "./CoursesPage";
import TrainersPage from "./TrainersPage";
import Features from "./Features";
import Counts from "./Counts";

export default function Students() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Header />
      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        class="d-flex justify-content-center align-items-center"
      >
        <div
          class="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>We are team of developers training young children to code.</h2>
          <a
            href="https://forms.gle/gKovAv6h6rNu8zCM6"
            target="_blank"
            class="btn-get-started"
          >
            Get Started
          </a>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}

        <AbtPage />
        {/* <!-- End About Section --> */}

        <Counts />

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" class="why-us">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="content">
                  <h3>Why Choose GNLIFE?</h3>
                  <p>
                    GNLIFE is a community where young children learn to code
                    with a very easy to understand curriculum. With a six months
                    curriculum distributed into 4hrs weekend classes per week.
                    every student have the opportunity to attend normal schools
                    and still join us weekends to add value to themselves. Every
                    student gets access to lifetime mentorship from their
                    respective tutors, just to make sure there is maximum
                    support for them to explore their skills.
                  </p>
                  <div class="text-center">
                    <a href="/about#" class="more-btn">
                      Learn More <i class="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-user"></i>
                        <h4>Become a student today</h4>
                        <p>Fill in the form to join our student's community.</p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Build your talent and a sound culture</h4>
                        <p>
                          Go through our six months training and become a better
                          version of yourself.
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-user"></i>
                        <h4>Become an expert in the field</h4>
                        <p>
                          Join the past students community and build personal
                          projects with little or no funds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Why Us Section --> */}

        <Features />

        <CoursesPage />

        <TrainersPage />
      </main>
      <Footer />
    </div>
  );
}
