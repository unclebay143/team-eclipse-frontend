import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardComponentLoader } from '../dashboard-layout/DashboardLoader';

export const Mentions = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const loadtime = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => {
      clearTimeout(loadtime);
    };
  }, []);

  if (loading) return <DashboardComponentLoader />;
  return (
    <React.Fragment>
      <div className="w-100 bg-white p-2">
        <span className="d-flex text-primary align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">EFCC Mentions</span>
        </span>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <Link
            to="/petition/id"
            className="list-group-item list-group-item-action hover-primary py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1 text-primary">
                List group item heading
              </strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </Link>
          <Link
            to="/petition/id"
            className="list-group-item list-group-item-action hover-primary py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1 text-primary">
                List group item heading
              </strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </Link>
          <Link
            to="/petition/id"
            className="list-group-item list-group-item-action hover-primary py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1 text-primary">
                List group item heading
              </strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </Link>
          <Link
            to="/petition/id"
            className="list-group-item list-group-item-action hover-primary py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1 text-primary">
                List group item heading
              </strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
