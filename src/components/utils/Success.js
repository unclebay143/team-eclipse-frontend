import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Notification } from '../layouts/notification/Notification';

export const Success = () => {
  const { newPetitionStatus } = useSelector((state) => state.petitions);
  const { petitionId, status } = newPetitionStatus;
  const history = useHistory();

  if (!petitionId) {
    history.push('/new_petition');
  }

  return (
    <React.Fragment>
      <div className="p-5 mt-5 text-center bg-white">
        <h2 className="custom-primary-color">Petition Added Successfully</h2>
        <p>
          Your petition has been added to our database and waiting for the right
          agency to show interest
        </p>
        <p>
          Your petition reference id is <br />
          <code>{petitionId}</code>
        </p>

        <p>
          Go back <Link to="/">Home</Link>
        </p>
      </div>

      <Notification
        label="Petition added successfully."
        urlLink={`petition/${petitionId}`}
      />
    </React.Fragment>
  );
};
