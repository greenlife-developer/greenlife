import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const handleNav = () => {
    const navButton = document.getElementById("nav-togggle");
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("navbar-mobile");
    navButton.classList.toggle("bi-list");
    navButton.classList.toggle("bi-x");
  };

  return (
    <div className="">
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="/students">GNLIFE</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="navbar order-last order-lg-0">
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
            </ul>
            <i
              id="nav-togggle"
              onClick={handleNav}
              class="bi bi-list mobile-nav-toggle"
            ></i>
          </nav>

          <a href="https://forms.gle/gKovAv6h6rNu8zCM6" target="_blank" class="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}
