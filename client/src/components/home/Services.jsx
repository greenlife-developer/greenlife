import React from "react";
import { Link } from "react-router-dom";
import chart from "../../images/chart.png";
import code from "../../images/code-circle.png";
import path from "../../images/path-square.png";
import video from "../../images/video.png";

export default function Services() {
  return (
    <section className="gnlife-services">
      <div className="services-title">
        <div className="">
          <h1>Our services</h1>
          <p>our Team offers an innovating Digital Experience</p>
        </div>
      </div>

      <div className="services-content">
        <div className="services-grid">
          <div className="item">
            <img src={video} alt="video editing" />
            <h3>Video Editing</h3>
            <p>
              Tell your story with captivating visuals. Our skilled video
              editors breathe life into your footage, creating compelling videos
              that resonate with your target audience.
            </p>
          </div>

          <div className="item background">
            <img src={code} alt="development" />
            <h3>Web and Mobile App Development</h3>
            <p>
              Harness the power of technology with our top-notch web and mobile
              app development services. We transform your concepts into
              user-friendly and feature-rich applications that deliver
              outstanding user experiences across devices.
            </p>
          </div>

          <div className="item background">
            <img src={path} alt="design" />
            <h3>Graphic Design | UI/UX Design</h3>
            <p>
              User-centric design lies at the heart of every successful digital
              product. Our designers create intuitive and visually appealing
              interfaces that enhance user engagement and satisfaction.
            </p>
          </div>

          <div className="item">
            <img src={chart} alt="digital marketing" />
            <h3>Digital Marketing</h3>
            <p>
              Navigate the digital landscape with confidence. Our digital
              marketing strategies encompass a range of techniques that elevate
              your online presence, drive traffic, and boost conversions.
            </p>
          </div>
        </div>
      </div>

      <div className="action">
        <Link to="/services">Contact Us Now</Link>
      </div>
    </section>
  );
}
