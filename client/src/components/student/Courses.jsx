import React, {useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos"
import "aos/dist/aos.css";
import CoursesPage from "./CoursesPage";

export default function Courses() {

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
            <h2>Courses</h2>
            <p>
              Our courses are rich in content and are taught by professionals in their various fields. 
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        <CoursesPage />
      </main>
      <Footer />
    </div>
  );
}
