import React from "react";
import { Link } from "react-router-dom";

const VideoEditingService = ({ deliverables, p, li, h3 }) => {
  return (
    <div className="web-mobile-service service">
      <div className="service-header">
        <h1>What you will get</h1>
        <Link className="btn-service-page" to="/services/service/video-editing">
          Book Now
        </Link>
      </div>
      <div className="">
        <h3>
          Professional video editing services for businesses and individuals
        </h3>
        <br />

        <p>
          At GNLIFE Tech Network, we offer professional video editing services
          to businesses and individuals of all sizes. We have a team of
          experienced and talented video editors who can help you to create
          high-quality videos that will engage your audience and achieve your
          goals.
        </p>
      </div>
      <br />
      <br />
      <div className="service-grid">
        {/* <h3>Our services include:</h3> */}
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Video editing: </strong> We can edit your raw footage into a
            polished and professional video, complete with transitions, effects,
            and music.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Motion graphics: </strong> We can create custom motion
            graphics to add visual interest and clarity to your videos.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Color grading: </strong>We can color grade your videos to
            improve their overall look and feel.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Sound mixing: </strong>We can mix the audio in your videos
            to ensure that it is clear, balanced, and effective.
          </span>
        </div>

        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Marketing videos: </strong>We can create marketing videos
            that will help you to promote your products or services and reach
            new customers.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Explainer videos: </strong> We can create explainer videos
            that will help you to explain complex concepts in a clear and
            concise way.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Product demos: </strong>We can create product demos that
            will show your customers how to use your products and get the most
            out of them.
          </span>
        </div>
        <div className="item">
          <i class="ri-check-double-line"></i>
          <span>
            <strong>Event videos: </strong>We can create event videos to capture
            your special events and share them with your audience.
          </span>
        </div>
      </div>
      <div className="description">
        <div className="description-body">
          <h3>Why choose us for your Video Editing needs needs?</h3>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>Experienced and talented
              video editors: Our team of experienced and talented video editors
              will create high-quality videos that will engage your audience and
              achieve your goals.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Wide range of services: We
              offer a wide range of video editing services, including video
              editing, motion graphics, color grading, and sound mixing. This
              one-stop shop approach can save you time and money.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Excellent customer service:
              We are committed to providing excellent customer service. We work
              closely with you to understand your needs and goals, and we
              provide regular feedback and updates throughout the video editing
              process.
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>Competitive pricing: We
              offer high-quality services at a competitive price. We make sure
              that you get the best value for your money.
            </li>
          </ul>
          <br />
          <br />

          <Link
            className="btn-service-page"
            to="/services/service/video-editing"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingService;
