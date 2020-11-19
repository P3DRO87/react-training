import React from "react";
import { Link, matchPath } from "react-router-dom";

import logo from "../assets/img/logo.svg";

class Navbar extends React.Component {
  render() {
    const path = window.location.pathname;

    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light mr-2">
              {path === "/" ? "Plazi" : "conference"}
            </span>
            <span className="font-weight-bold">badges</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
