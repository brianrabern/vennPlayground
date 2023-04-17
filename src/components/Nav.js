import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/3-set_Venn_diagram.svg/1920px-3-set_Venn_diagram.svg.png"
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        vennPlayground{" "}
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-dark" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
              </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">
              About
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
