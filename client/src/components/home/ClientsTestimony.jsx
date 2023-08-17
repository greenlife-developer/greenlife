import React from "react";
import team3 from "../../images/team/team-3.jpg";
import TestimonialItem from "./TestimonialItem";

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
