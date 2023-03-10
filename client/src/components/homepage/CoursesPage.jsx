import React from "react";

export default function CoursesPage() {
  return (
    <>
      {/* <!-- ======= Popular Courses Section ======= --> */}
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>

          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="course-item">
                <img
                  src="assets/img/course-1.jpg"
                  class="img-fluid"
                  alt="..."
                />
                <div class="course-content">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Web Development</h4>
                    <p class="price">#120,000</p>
                  </div>

                  <h3>
                    <a href="course-details.html">Website Development</a>
                  </h3>
                  <p>
                    Enroll for our six months curriculum, to learn HTML,
                    CSS(grid and flexbox), Javascript, git and github, and
                    hosting a static website
                  </p>
                  <div class="trainer d-flex justify-content-between align-items-center">
                    <div class="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/trainers/trainer-2.png"
                        class="img-fluid"
                        alt=""
                      />
                      <span>Afolabi Opeyemi</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"></i>&nbsp;10 &nbsp;&nbsp;
                      <i class="bx bx-heart"></i>&nbsp;15
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Course Item--> */}

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="course-item">
                <img
                  src="assets/img/course-2.jpg"
                  class="img-fluid"
                  alt="..."
                />
                <div class="course-content">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Video Editing</h4>
                    <p class="price">#100,000</p>
                  </div>

                  <h3>
                    <a href="course-details.html">Video Editing</a>
                  </h3>
                  <p>
                    Are you wanting to make more professional, unique,
                    memorable, engaging, and impressive videos? Perfect! You've
                    made it to the right video editing course!
                  </p>
                  <div class="trainer d-flex justify-content-between align-items-center">
                    <div class="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/trainers/trainer-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                      <span>Efosa Osiomwanuri</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"></i>&nbsp;15 &nbsp;&nbsp;
                      <i class="bx bx-heart"></i>&nbsp;54
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Course Item--> */}

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="course-item">
                <img
                  src="assets/img/course-3.jpg"
                  class="img-fluid"
                  alt="..."
                />
                <div class="course-content">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Data Analytics</h4>
                    <p class="price">#120,000</p>
                  </div>

                  <h3>
                    <a href="course-details.html">Data Analytics</a>
                  </h3>
                  <p>
                    Basic / intermediate experience with Microsoft Excel or
                    another spreadsheet software (common functions, vlookups,
                    Pivot Tables etc). Strong knowledge of data types (strings,
                    integers, floating points, booleans) etc
                  </p>
                  <div class="trainer d-flex justify-content-between align-items-center">
                    <div class="trainer-profile d-flex align-items-center">
                      {/* <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt="" > */}
                      <span>Brandon</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                      <i class="bx bx-heart"></i>&nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="course-item">
                <img
                  src="assets/img/course-4.jpg"
                  class="img-fluid"
                  alt="..."
                />
                <div class="course-content">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Digital Designs</h4>
                    <p class="price">#120,000</p>
                  </div>

                  <h3>
                    <a href="course-details.html">Digital Designs</a>
                  </h3>
                  <p>
                    The Ultimate Graphic Design Course Which Covers Photoshop,
                    Illustrator, InDesign,Design Theory, Branding and Logo
                    Design
                  </p>
                  <div class="trainer d-flex justify-content-between align-items-center">
                    <div class="trainer-profile d-flex align-items-center">
                      <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt="" />
                      <span>Grace Jesumuyiwa</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                      <i class="bx bx-heart"></i>&nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Course Item--> */}
          </div>
        </div>
      </section>
      {/* <!-- End Popular Courses Section --> */}
    </>
  );
}

// 6501530657, providus acct.
