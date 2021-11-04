import React from 'react';
import { store } from 'react-notifications-component';
import { Link } from 'react-router-dom';
import { customNotificationBar } from './notification.module.css';

export const Notification = ({ label, urlLink }) => {
  return (
    <React.Fragment>
      <div className={customNotificationBar}>
        <p>
          {label} <Link to={urlLink}>view</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

// export const notification = () => {
//   return store.addNotification({
//     title: 'Wonderful!',
//     message: 'teodosii@react-notifications-component',
//     type: 'success',
//     insert: 'bottom',
//     container: 'bottom-left',
//     animationIn: ['animate__animated', 'animate__fadeIn'],
//     animationOut: ['animate__animated', 'animate__fadeOut'],
//     dismiss: {
//       duration: 5000,
//       onScreen: true,
//     },
//   });
// };
