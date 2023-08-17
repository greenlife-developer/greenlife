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
              <h1>Project Title</h1>
              <div className="p-title">
                <span>Website Development</span>
                <span>UI/UX Design</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          <div className="project reverse">
            <div className="project-img">
              <img src={team2} alt="" />
            </div>
            <div className="project-details">
              <h1>Project Title</h1>
              <div className="p-title">
                <span>Website Development</span>
                <span>UI/UX Design</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
