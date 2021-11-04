import React from 'react';

export const DashboardSuccess = () => {
  return (
    <React.Fragment>
      <div
        className={`container text-center row w-100 py-5 overflow-auto`}
        style={{ maxHeight: '80vh' }}
      >
        Agency add successfully. a mail has been sent to the registered email
        address.
      </div>
    </React.Fragment>
  );
};
