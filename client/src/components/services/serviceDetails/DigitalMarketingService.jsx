import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketingService = ({ deliverables, p, li, h3 }) => {
  return (
    <div className="web-mobile-service service">
      <div className="service-header">
        <h1>What you will get</h1>
        <Link
          className="btn-service-page"
          to="/services/service/digital-marketing"
        >
          Book Now
        </Link>
      </div>
      <div className="service-grid">
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Digital marketing strategy</strong>
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Website design and development</strong>
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Search engine optimization (SEO)</strong>
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Pay-per-click (PPC) advertising</strong>
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <strong>Social media marketing</strong>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <strong>Email marketing</strong>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <strong>Content marketing (optional)</strong>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <strong>Analytics and reporting</strong>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            {" "}
            <strong>Digital marketing strategy: </strong> A digital marketing
            strategy is a roadmap for achieving your business goals through
            online marketing channels. It should include an analysis of your
            target audience, your competitive landscape, and the specific
            tactics that you will use to reach your goals.
          </span>
        </div>
      </div>

      <div className="description">
        <h1>Description</h1>
        <div className="description-body">
          <h3>Digital marketing services to help you grow your business</h3>
          <p>
            At GNLIFE Tech Network, we offer a comprehensive range of digital
            marketing services to help you achieve your business goals. We have
            a team of experienced and talented professionals who can help you to
            create and implement a digital marketing strategy that is tailored
            to your specific needs.
          </p>

          <p>
            We understand that every business is different, so we tailor our
            services to meet the specific needs of each client. We work closely
            with our clients to understand their goals and objectives, and we
            develop custom strategies that are designed to help them achieve
            those goals.
          </p>

          <p>
            If you are looking for a digital marketing company that can help you
            to grow your business, then contact GNLIFE Tech Network today. We
            offer a free consultation to discuss your needs and how we can help
            you to achieve your goals.
          </p>

          <h3>Why choose us for your Graphic and UI/UX needs?</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>Experienced and talented
              professionals: Our team of experienced and talented professionals
              has the skills and expertise to create and implement successful
              digital marketing campaigns.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Wide range of services: We
              offer a wide range of digital marketing services, including
              website design and development, SEO, PPC, and social media
              marketing. This one-stop shop approach can save you time and
              money.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Competitive pricing: We
              offer high-quality digital marketing services at a competitive
              price. This makes us a great value for your money.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i> Competitive pricing: We
              offer high-quality digital marketing services at a competitive
              price. This makes us a great value for your money.
            </li>
          </ul>
          <br />
          <br />

          <Link
            className="btn-service-page"
            to="/services/service/digital-marketing"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingService;
