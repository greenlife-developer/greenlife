import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/apple-touch-icon.png";

export default function Navigation() {
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
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
