import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="container custom-primary-color text-center">
        <h1 className="d-5">404 PAGE</h1>
        <Link to="/" className="custom-primary-color">
          Go home
        </Link>
      </div>
    </React.Fragment>
  );
};
