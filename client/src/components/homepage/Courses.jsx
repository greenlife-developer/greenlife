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
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
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
