import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="">
        <header id="">
        <div class="">
          <h1 class="logo">
            <a href="/students">GNLIFE</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="">
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
            {/* <i
              id="nav-togggle"
              onClick={handleNav}
              class="bi bi-list mobile-nav-toggle"
            ></i> */}
          </nav>

          <a href="https://forms.gle/gKovAv6h6rNu8zCM6" target="_blank" class="">
            Register Now
          </a>
        </div>
      </header>
        </div>
    )
}