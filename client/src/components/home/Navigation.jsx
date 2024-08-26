import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/apple-touch-icon.png";

export default function Navigation() {

  const handleNav = () => {
    const navButton = document.getElementById("nav-togggle");
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("navbar-mobile");
    navButton.classList.toggle("ri-menu-line");
    navButton.classList.toggle("ri-close-line");
  };

  return (
    <div className="main-nav">
      <header id="">
        <div className="nav-flex">
          <h1 className="logo">
            <img src={logo} alt="" />
            <a href="/">GNLIFE TECH NETWORK</a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {/* <li>
                <NavLink to="/blog">Blog</NavLink>
              </li> */}
              <li>
                <NavLink to="/students">Students</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
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
