import React from "react";
import { Link } from "react-router-dom";

const DesignsService = ({ deliverables, p, li, h3 }) => {
  return (
    <div className="web-mobile-service service">
      <div className="service-header">
        <h1>What you will get</h1>
        <Link
          className="btn-service-page"
          to="/services/service/ui-ux-designs"
        >
          Book Now
        </Link>
      </div>
      <div className="service-grid">
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>User research: </strong> user personas, user journey maps,
            usability testing reports.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Information architecture: </strong> sitemaps, user flows,
            wireframes
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Visual design: </strong> mockups, style guides, design
            systems
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Prototyping: </strong> interactive prototypes that allow
            users to test the design before it is developed
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>UI/UX design for a new website or mobile app</span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>A new branding identity for a company</span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>A redesign of an existing website or mobile app</span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            Branding materials, such as business cards, letterhead, and social
            media graphics
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>A marketing campaign for a new product or service</span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>Website design</span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>Logos</span>
        </div>
      </div>
      <div className="description">
        <h1>Description</h1>
        <div className="description-body">
          <h3>UI/UX design</h3>
          <p>
            UI/UX design, or user interface/user experience design, is the
            process of designing interactive products or services that are both
            easy to use and enjoyable. UI/UX designers focus on the user's
            journey, from first contact with the product or service to the final
            goal. They consider all aspects of the user experience, including
            the visual design, navigation, and content.
          </p>

          <h3>Graphic design</h3>
          <p>
            Graphic design is the process of creating visual compositions to
            communicate messages. Graphic designers use typography, imagery, and
            color to create visually appealing and informative designs. They
            work on a wide range of projects, including logos, branding
            materials, marketing materials, and website design.
          </p>

          <h3>Why choose us for your Graphic and UI/UX needs?</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>Increased website traffic
              and conversions
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Improved customer
              satisfaction and loyalty
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Stronger brand awareness
              and recognition
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i> Increased sales and
              revenue
            </li>
          </ul>
          <br />
          <br />

          <Link
            className="btn-service-page"
            to="/services/service/ui-ux-designs"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignsService;
