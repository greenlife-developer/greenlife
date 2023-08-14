import React, { useEffect } from "react";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Students() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("message");

  console.log(query);
  return (
    <>
      <Header />

      <main id="main" className="gnlife-contact">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs" data-aos="fade-in">
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              Send us an instatnt message and receive a reply within 24 hours.
              Our team is working hard to make our promises a reality. <br />
              Your feedback is highly welcome
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section class="contact">
          <div data-aos="fade-up">
            <iframe
              style={{ border: "0", width: "100%", height: "350px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div class="container" data-aos="fade-up">
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="ri-map-pin-line"></i>
                    <div className="">
                      <h4>Location:</h4>
                      <p>Adekunle Plaza, Opposite North gate, Akure</p>
                    </div>
                  </div>

                  <div class="email">
                    <i class="ri-mail-line"></i>
                    <div className="">
                      <h4>Email:</h4>
                      <p>greenlifeinfoteam@gmail.com</p>
                    </div>
                  </div>

                  <div class="phone">
                    <i class="ri-smartphone-line"></i>
                    <div className="">
                      <h4>Call:</h4>
                      <p>+234 806 5109 764</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="/gnlife/students/contact"
                  method="post"
                  role="form"
                  class="contact-form"
                >
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="">
                      <input
                        type="email"
                        class="contact-email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="contact-subject">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="contact-message">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="error-message"></div>
                    {query && query === "sent" ? (
                      <div class="success-message">
                        Your message has been sent. Thank you!
                      </div>
                    ) : null}
                  </div>
                  <div class="contact-btn">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>

      <Footer />

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
