import React from "react";
import Navigation from "../home/Navigation";
import ServiceTabs from "./ServiceTabs";
import Footer from "../home/Footer";

export default function Service() {
  return (
    <div className="gnlife-container-main">
      <div className="service-page">
        <Navigation />
        <div className="service-tabs">
          <ServiceTabs />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
