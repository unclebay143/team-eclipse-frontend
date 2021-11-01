import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarBorder, activeLink } from './../dashboard.module.css';
import { adminSidebarLinks, agencySidebarLinks } from './sidebar-links';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const DashboardSidebar = ({ userRole }) => {
  console.log(userRole);
  var roleToSidebar = {
    agency: agencySidebarLinks,
    admin: adminSidebarLinks,
  };

  const detectSidebar = roleToSidebar[userRole] ?? [];

  console.log(detectSidebar);
  return (
    <React.Fragment>
      <div
        className={`d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-white ${sidebarBorder}`}
      >
        <span className="w-100 px-3 text-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-8 text-center btn btn-primary w-100 text-white">
            {userRole === 'admin' ? 'Admin' : userRole}
          </span>
        </span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {detectSidebar?.map(({ title, url, icon, exact, extraClass }) => {
            return (
              <li className="nav-item">
                <NavLink
                  exact={exact}
                  to={url}
                  className={`nav-link nav-link link-dark d-flex align-items-center ${extraClass}`}
                  activeClassName={`${activeLink} text-primary`}
                  aria-current="page"
                >
                  <i className={`me-2 ${icon}`} aria-hidden="true"></i>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="dropdown">
          <a
            href="/"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.dicebear.com/api/initials/EFCC.svg"
              alt
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            {/* <strong>EFCC</strong> */}
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="/">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
