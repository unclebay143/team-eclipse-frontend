import React from "react";
import universalStyles from "./../styles/Universal.module.css";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className={`text-white py-5 ${universalStyles.bgPrimaryColor}`}>
        <div className="container">
          <p className="float-end mb-1">
            <a href="#" className="text-white">
              Back to top
            </a>
          </p>
          <p className="mb-1">
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p className="mb-5">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our
            <a href="../getting-started/introduction/">getting started guide</a>
            .
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};
