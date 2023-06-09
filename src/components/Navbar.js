import React from "react";

import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/h" >
                  {props.title}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  {props.contactUs}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  {props.aboutUs}
                </a>
              </li>
            </ul>
            <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Default switch checkbox input
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  contactUs: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutUs: "Set aboutUs here",
  contactUs: "Set contactUs here",
  home: "Set home here",
};
