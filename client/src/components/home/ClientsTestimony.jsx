import React from "react";
import testimony1 from "../../images/testimony/testimony-1.jpg";
import testimony2 from "../../images/testimony/testimony-2.jpg";
import TestimonialItem from "./TestimonialItem";
import team3 from "./TestimonialItem";

export default function ClientsTestimony() {
  return (
    <section className="clients-testimonials">
      <div className="testimonial-title">
        <div className="">
          <h1>What are our clients saying about our services?</h1>
        </div>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-items">
          <TestimonialItem
            img={testimony1}
            name="Onaolapo Marvelous"
            title="CEO, MaestroMarv Tech Solutions"
            content="We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website. We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website."
          />
          <TestimonialItem
            img={testimony2}
            name="Boyede Osakuade"
            title="CEO, EYOB Agrochemicals"
            content="GNLIFE helped in developing the app that I use for taking the records of my daily sales and purchases. The app is so useful that I can easily access what I have in store both in figure and cash value."
          />
          <TestimonialItem
            img={team3}
            name="Afolabi Opeyemi"
            title="CEO, GNLife"
            content="We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website. We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website."
          />
        </div>

        <div className="testimonial-items items2">
          <TestimonialItem
            img={team3}
            name="Afolabi Opeyemi"
            title="CEO, GNLife"
            content="We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website. We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website."
          />
          <TestimonialItem
            img={team3}
            name="Afolabi Opeyemi"
            title="CEO, GNLife"
            content="We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website. We train students on HTML, CSS (grid and flexbox), Javascript, git and github, and how to host a static website."
          />
        </div>
      </div>
    </section>
  );
}
