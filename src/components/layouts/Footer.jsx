import React from 'react';
import { Link } from 'react-router-dom';
import universalStyles from './../styles/universal.module.css';

export const Footer = () => {
  return (
    <React.Fragment>
      <footer
        className={`text-white py-5 mt-5 ${universalStyles.bgPrimaryColor}`}
      >
        <div className="container">
          <p className="float-end mb-1">
            <a href="/" className="text-white">
              Back to top
            </a>
          </p>
          <p className="mb-1">
            This is a general public whistle blowing website, aim at improving
            reporting, <br />
            and connecting reporters to .
          </p>
          <p>
            Have a report? <Link to="/new_petition">Report it now</Link>.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};
