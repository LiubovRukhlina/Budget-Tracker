import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  let auth = useAuth();
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <Link className="navbar-brand" to={"/"}>
        <img
          src="/gorilla-logo.jpeg"
          width="100"
          height="100"
          className="d-inline-block align-center"
          alt="gorilla-logo"
        ></img>
        <span
          className="navbar-brand mb-0 text-center"
          style={{ fontSize: 32 }}
        >
          Greedy Gorilla
        </span>
        <h6>
          <i>Your favorite Budget Tracker</i>
        </h6>
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          {auth?.user ? (
            <li className="nav-item">
              <div
                className="nav-link pointer"
                onClick={() => {
                  auth.signout();
                }}
              >
                Sign Out
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
