import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/apple-touch-icon.png";

export default function Header() {
  const handleNav = () => {
    const navButton = document.getElementById("nav-togggle");
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("navbar-mobile");
    navButton.classList.toggle("ri-menu-line");
    navButton.classList.toggle("ri-close-line");
  };

  return (
    <div className="students">
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <div class="logo me-auto">
            <img src={logo} alt="" />
            <a href="/students">GNLife Tech Network</a>
          </div>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <NavLink to="/students">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/trainers">Trainers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <a
                  href="https://forms.gle/gKovAv6h6rNu8zCM6"
                  target="_blank"
                  class="register"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu">
            <i id="nav-togggle" onClick={handleNav} class="ri-menu-line"></i>
            {/* <i class="ri-close-line"></i> */}
          </div>
        </div>
      </header>
    </div>
  );
}
