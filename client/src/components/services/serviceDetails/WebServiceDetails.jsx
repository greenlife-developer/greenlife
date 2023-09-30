import React from "react";
import { Link } from "react-router-dom";

const WebServiceDetails = ({deliverables, p, li, h3}) => {
  return (
    <div className="web-mobile-service service">
      <div className="service-header">
        <h1>What you will get</h1>
        <Link
          className="btn-service-page"
          to="/services/service/web-mobile-app"
        >
          Book Now
        </Link>
      </div>
      <div className="service-grid">
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Design: </strong> This includes wireframes, mockups, and
            prototypes to help visualize and refine the design of your website
            or web application.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Development: </strong> This includes building the front-end
            and back-end of your web or mobile application, using the latest
            technologies and best practices.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Testing: </strong> This includes thorough testing of your
            website or web application to ensure that it is bug-free and
            performing as expected.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Deployment: </strong> This includes publishing your website
            or web application to a live server and making it accessible to your
            users.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Maintenance and support: </strong> This includes providing
            ongoing support and maintenance for your mobile app, including bug
            fixes, security updates, and new features.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Content creation: </strong> This includes writing and
            editing the copy for your website or mobile app, as well as creating
            and optimizing images and other media.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>SEO: </strong> This includes optimizing your website or
            mobile app for search engines so that it is more likely to be found
            by potential customers.
          </span>
        </div>
      </div>
      <div className="description">
        <h1>Description</h1>
        <div className="description-body">
          <p>
            We offer a comprehensive suite of web and mobile development
            services to help businesses of all sizes create and maintain
            high-quality digital experiences. Our team of experienced developers
            and designers can help you with everything from designing and
            developing your website or mobile app to deploying and maintaining
            it once it's live.
          </p>
          <h3>Our web development services include:</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>Custom web design and
              development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>E-commerce website
              development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Content management system
              (CMS) development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Web application development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Website hosting and
              maintenance
            </li>
          </ul>

          <h3>Our mobile development services include:</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>Native iOS and Android app
              development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Cross-platform mobile app
              development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Hybrid mobile app
              development
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Mobile app testing and
              deployment
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Mobile app maintenance and
              support
            </li>
          </ul>

          <p>
            We understand that every business is different, so we take the time
            to understand your specific needs and goals before we start working
            on any project. We also work closely with you throughout the
            development process to ensure that you are happy with the results.
          </p>

          <h3>Why choose us for your web and mobile development needs?</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>We have a team of
              experienced and skilled developers and designers.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>We use the latest
              technologies and best practices.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>We offer a wide range of
              services to meet your specific needs.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i> We are committed to
              providing our clients with high-quality products and services.
            </li>
          </ul>
          <br />
          <br />

          <Link
            className="btn-service-page"
            to="/services/service/web-mobile-app"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebServiceDetails;