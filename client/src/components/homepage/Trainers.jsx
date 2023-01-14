import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import TrainersPage from "./TrainersPage";

export default function Trainers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Header />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs">
          <div class="container">
            <h2>Trainers</h2>
            <p>
              Our Trainers have worked on countless real world projects and they
              have good feedbacks from their clients.
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Trainers Section ======= --> */}
        <TrainersPage />
      </main>
      <Footer />
    </div>
  );
}
