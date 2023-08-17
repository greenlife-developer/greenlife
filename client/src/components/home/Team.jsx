import React from "react";
import team1 from "../../images/team/team-1.png";
import team2 from "../../images/team/team-2.png";
import team3 from "../../images/team/team-3.jpg";

export default function Team() {
  return (
    <section className="main-team">
      <div className="main-team-title">
        <div className="">
          <h1>Meet Our Team Of Professionals</h1>
        </div>
      </div>

      <div className="main-team-content">
        <div className="team-grid">
          <div className="item" style={{ backgroundImage: `url(${team1})` }}>
            {/* <img src={video} alt="video editing" /> */}
            <div className="member-details">
              <h1>Jesumuyiwa Grace</h1>
              <div className="hover">
                <p>Digital Designs</p>
                <span>Grapic and Product Designer, Content Creator</span>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${team2})` }}>
            {/* <img src={video} alt="video editing" /> */}
            <div className="member-details">
              <h1>Efosa Osiomwanuri</h1>
              <div className="hover">
                <p>Video Editing</p>
                <span>Cinematographer, writer and film maker</span>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${team3})` }}>
            {/* <img src={video} alt="video editing" /> */}
            <div className="member-details">
              <h1>Afolabi Opeyemi</h1>
              <div className="hover">
                <p>Web development</p>
                <span>MERN stack developer, Tech Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${team1})` }}>
            {/* <img src={video} alt="video editing" /> */}
            <div className="member-details">
              <h1>Afolabi Opeyemi</h1>
              <div className="hover">
                <p>Web development</p>
                <span>MERN stack developer, Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
