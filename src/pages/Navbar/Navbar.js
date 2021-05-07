import React from "react";
import "./Navbar.scss";

import MainContainer from "../MainContainer/MainContainer";

export default function Navbar() {
  return (
    <div className="background-1">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Landings
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link nav-nav" href="#">
                  WORK
                </a>
                <a className="nav-link nav-nav" href="#">
                  FEATURES
                </a>
                <a className="nav-link nav-nav" href="#">
                  BLOG
                </a>
                <a className="nav-link nav-nav" href="#">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <MainContainer />
    </div>
  );
}
