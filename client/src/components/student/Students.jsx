import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./style.css";
import AbtPage from "./AbtPage";
import CoursesPage from "./course/CoursesPage";
import TrainersPage from "./TrainersPage";
import Features from "./Features";
import Counts from "./course/Counts";
import SEO from "../SEO";
import Testimonials from "./Testimonials";

export default function Students() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <SEO
        title="GNLife | Students"
        description="GNLife Tech Network has professionals in various major tech fields who can mentor new talents"
        name="GNLife Tech Network"
        type="landing page"
      />
      <Header />

      {/* <!-- ======= first section Home page ======= --> */}
      <section class="gnlife-banner">
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
          <h2>
            We are team experts in various tech fields, and we are growing new
            talents
          </h2>
          <a
            href="https://forms.gle/gKovAv6h6rNu8zCM6"
            target="_blank"
            class="register"
          >
            Register Now
          </a>
        </div>
      </section>
      {/* <!-- End of first section Home page--> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}

        <AbtPage />
        {/* <!-- End About Section --> */}

        <Counts />

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" class="why-us">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="why-main-content">
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
              <div class="benefits" data-aos="zoom-in" data-aos-delay="100">
                <div class="gnlife-students-stages">
                  <div class="row">
                    <div class="stage">
                      <div class="">
                        <i class="ri-user-line"></i>
                        <h4>Become a student today</h4>
                        <p>Fill in the form to join our student's community.</p>
                      </div>
                    </div>
                    <div class="stage">
                      <div class="">
                        <i class="ri-box-3-line"></i>
                        <h4>Build your talent and a sound culture</h4>
                        <p>
                          Go through our six months training and become a better
                          version of yourself.
                        </p>
                      </div>
                    </div>
                    <div class="stage">
                      <div class="">
                        <i class="ri-graduation-cap-line"></i>
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

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
