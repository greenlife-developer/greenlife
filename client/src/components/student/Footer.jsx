import React, { useEffect } from "react";

export default function Footer() {
  // let preloader = document.getElementById("preloader");

  // useEffect(() => {
  //   if (preloader) {
  //     window.addEventListener("load", () => {
  //       preloader.remove();
  //     });
  //   }
  // }, [preloader]);

  return (
    <div className="">
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>GNLIFE TECH NETWORK</h4>
                <p>
                  Adekunle Plaza, shop 20 <br />
                  Opposite Futa North Gate, Akure
                  <br />
                  Ondo State. <br />
                  <br />
                  <strong>Phone:</strong> +234 806 5109 765
                  <br />
                  <strong>Email:</strong> greenlifeinfoteam@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/students#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/about#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/courses#">Courses</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/trainers#">Trainers</a>
                  </li>
                </ul>
              </div>

              <div class="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/courses">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/courses">Digital Designs</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/courses">Video Editing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/courses">Data Analytics</a>
                  </li>
                </ul>
              </div>

              <div class="footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Be the first to receive our latest news via email.
                </p>
                <form action="/gnlife/students/subscribe" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright-c">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>GNLIFE TECH NETWORK</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div class="social-links text-center">
            <a href="#" class="twitter">
             <i class="ri-twitter-x-line"></i>
            </a>
            <a href="#" class="facebook">
               <i class="ri-facebook-line"></i>
            </a>
            <a href="#" class="instagram">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}
