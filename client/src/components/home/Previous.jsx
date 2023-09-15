import React from "react";
import team2 from "../../images/team/team-2.png";

export default function Previous() {
  return (
    <section className="past-projects">
      <div className="past-projects-title">
        <div className="">
          <h1>Projects We've worked on</h1>
        </div>
      </div>

      <div className="project-content">
        <div className="projects">
          <div className="project">
            <div className="project-img">
              <img src={team2} alt="" />
            </div>
            <div className="project-details">
              <h1>Website Application</h1>
              <div className="p-title">
                <span>Website Development</span>
                <span>UI/UX Design</span>
              </div>
              <p>
                A website that allows gadget repair and sales businesses to
                showcase their services, sell electronics devices online, and
                manage their e-commerce store. The website also includes a
                booking system for customers to make appointments.
              </p>
            </div>
          </div>

          <div className="project reverse">
            <div className="project-img">
              <img src={team2} alt="" />
            </div>
            <div className="project-details">
              <h1>Website Application</h1>
              <div className="p-title">
                <span>Website Development</span>
                <span>UI/UX Design</span>
              </div>
              <p>
                A web application that can track and record daily sales of a
                shop, and calculate the total net worth of the physical store.
                It has features for recording daily sales, goods in store, their
                prices, and quantities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
