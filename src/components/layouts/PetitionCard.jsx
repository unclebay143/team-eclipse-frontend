import React from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../helper/time/time';
import universalStyles from './../styles/universal.module.css';

export const PetitionCard = ({ title, caseId, rest }) => {
  const { description1, dateCreated } = rest;

  return (
    <React.Fragment>
      <article className="col">
        <div className="card shadow-sm h-100">
          <svg
            className="bd-placeholder-img card-img-top p-1 text-center"
            width="100%"
            height={225}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Placeholder: ${title}`}
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#12205e" />
            <text
              x="5%"
              y="50%"
              fill="#eceeef"
              dy=".3em"
              fontWeight="600"
              fontSize="17px"
            >
              {title?.slice(0, 37)}...
            </text>
          </svg>
          <div className="card-body">
            <p className={`card-text ${universalStyles.primaryColor}`}>
              {description1?.slice(0, 110)}...
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link
                  to={`/petition/${caseId}`}
                  type="button"
                  className={`btn btn-sm ${universalStyles.filledBtnNoHover}`}
                >
                  View
                </Link>
                <button
                  type="button"
                  className={`btn btn-sm ${universalStyles.outlineBtnNoHover}`}
                >
                  Share
                </button>
              </div>
              <small className="text-muted">{timeAgo(dateCreated)}</small>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};
