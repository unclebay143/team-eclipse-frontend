import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../../../components/helper/time/time';
import { getAllPetitions } from '../../../../../redux/petition/actions/petition.actions';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const Mentions = () => {
  const [loading, setloading] = useState(true);
  const { petitions } = useSelector((state) => state.petitions);
  const { currentAgency } = useSelector((state) => state.agency);
  const { agencyName } = currentAgency;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPetitions());
  }, [dispatch]);

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
          <span className="fs-5 fw-semibold">
            {agencyName.toUpperCase()} Mentions
          </span>
        </span>
        <div className="list-group list-group-flush border-bottom scrollarea">
          {[...petitions]
            ?.reverse()
            .map(({ title, dateCreated, description1, description2 }) => {
              return (
                <Link
                  to="/petition/id"
                  className="list-group-item list-group-item-action hover-primary py-3 lh-tight"
                  aria-current="true"
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1 text-primary">{title}</strong>
                    <small>{timeAgo(dateCreated)}</small>
                  </div>
                  <div className="col-10 mb-1 small">{description1}</div>
                </Link>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};
