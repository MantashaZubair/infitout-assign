import React from "react";
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-5 fw-bold fs-4" to="/">
          Track Traders
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-primary"
                aria-current="page"
                to="/"
              >
                Option Chain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-black"
                aria-current="page"
                to="/"
              >
                Strategy Builder
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-black"
                aria-current="page"
                to="/"
              >
                Position
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-black"
                aria-current="page"
                to="/"
              >
                Order Book
              </NavLink>
            </li>
          </ul>

          <div className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
            <div className=" d-flex flex-column">
              <span
                className="fs-6 text-dark ms-5"
                aria-current="page"
                to="/"
              >
                NIFITY
              </span>
              <span className="text-dark me-3" aria-current="page" to="#">
                <span className="me-2 text-success ">0.37%</span>
                <span className="">18,245.00</span>
              </span>
            </div>
            <div className=" d-flex flex-column">
              <span
                className="fs-6 text-dark ms-5"
                aria-current="page"
                to="/"
              >
                BANKNIFITY
              </span>
              <span className="text-dark ms-2" aria-current="page" to="#">
                <span className="me-2 text-success ">0.37%</span>
                <span className="">39,156.1.00</span>
              </span>
            </div>
            <div className=" d-flex flex-column ">
              <span
                className="fs-6 text-dark ms-5 "
                aria-current="page"
                to="/"
              >
                INDIA VIX
              </span>
              <span className="text-dark ms-3" aria-current="page" to="">
                <span className="me-2 text-danger ">-0.10%</span>
                <span className="">12.12</span>
              </span>
            </div>
          </div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-dark"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
