import React from "react";

const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      <img
        src="/gorilla-logo.jpeg"
        width="100"
        height="100"
        className="d-inline-block align-center"
        alt="gorilla-logo"
      ></img>
      <span className="navbar-brand mb-0 text-center" style={{ fontSize: 32 }}>
        Greedy Gorilla
      </span>
      <h6>
        <i>Your favorite Budget Tracker</i>
      </h6>
    </a>
  </nav>
);

export default Nav;
