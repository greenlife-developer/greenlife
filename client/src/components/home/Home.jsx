import React from "react";
import SEO from "../SEO";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import banner from "../../images/baaa.png";
import Services from "../services/Services";
import Team from "./Team";
import Previous from "./Previous";
import ClientsTestimony from "./ClientsTestimony";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="GNLife Tech Network"
        description="GNLife Tech Network has professionals in various major tech fields who can mentor new talents"
        name="GNLife Tech Network"
        type="landing page"
      />
      <div className="gnlife-container-main">
        <div className="">
          <div className="navigation-container">
            <Navigation />
          </div>
          <section className="gnlife-banner-section">
            <img src={banner} alt="gnlife-banner" />
            <div className="banner-content">
              <div className="">
                <h1>Welcome to, <br /> GNLIFE Tech Network</h1>
                <p>Innovating Digital Experiences</p>
              </div>
            </div>
          </section>
        </div>

        <div className="">
          <Services />
        </div>

        <div className="">
          <Team />
        </div>

        <div className="">
          <Previous />
        </div>

        <div className="">
          <ClientsTestimony />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>

      {/* <h3>Coming soon...</h3>
      <h6>
        {" "}
        <Link to="/students">student's page</Link>{" "}
      </h6> */}
    </>
  );
}
