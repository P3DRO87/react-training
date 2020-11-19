import React, { Fragment } from "react";

import logoConf from "../assets/img/platziconf-logo.svg";
import astronauts from "../assets/img/astronauts.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid home-background">
        <div className="container h-100">
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-lg-4 d-flex align-items-center">
              <div>
                <figure>
                  <img src={logoConf} alt="" />
                </figure>
                <h1>PRINT YOUR BADGES</h1>
                <p>The easiest way to manage your conference</p>
                <div className="d-flex">
                  <Link to="/badges" className="btn btn-dark mx-auto">
                    Start now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex justify-content-end">
              <figure>
                <img src={astronauts} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
