import React from 'react';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <React.Fragment>
      <div className="container text-center p-5">
        <h2>Petition Added Successful</h2>
        <p>
          Your petition has been added to our database and waiting for the right
          agency to show interest
        </p>
        <p>
          {' '}
          Your petition reference id is <code>xdhsueilsmm189</code>{' '}
        </p>

        <p>
          Go back <Link to="/">Home</Link>
        </p>
      </div>
    </React.Fragment>
  );
};
