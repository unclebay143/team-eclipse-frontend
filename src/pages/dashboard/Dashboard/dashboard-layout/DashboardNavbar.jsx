import React from 'react';
import { navbar, dashboardTextColor } from './../dashboard.module.css';

export const AgencyNavbar = () => {
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-md px-2 px-lg-3 bg-white navbar-light bg-light ${navbar}`}
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand text-dark d-flex align-items-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-megaphone me-2"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
            </svg>
            <span>
              Whistle <b>Blower</b>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto"></ul>
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item">
                <a
                  className={`nav-link active ${dashboardTextColor}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-primary ${dashboardTextColor}`}
                  href="#"
                >
                  Settings
                </a>
              </li>

              {/* view on mobile only */}
              <li className="nav-item d-lg-none">
                <a className={`nav-link ${dashboardTextColor}`} href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className={`nav-link ${dashboardTextColor}`} href="#">
                  Mentions
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className={`nav-link ${dashboardTextColor}`} href="#">
                  Petitions
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className={`nav-link ${dashboardTextColor}`} href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
