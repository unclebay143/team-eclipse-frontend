import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../../../components/helper/time/time';
import { getAllPetitions } from '../../../../../redux/petition/actions/petition.actions';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';
import { store } from 'react-notifications-component';

export const AdminManagePetitions = () => {
  const [loading, setloading] = useState(true);
  const { petitions } = useSelector((state) => state.petitions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPetitions());
  }, []);

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
      <div className="container">
        <span className="d-flex text-primary align-items-center flex-shrink-0 py-3 link-dark text-decoration-none border-bottom">
          <h3 className="fw-semibold fs-4 text-left btn-m">Petition Lists</h3>
        </span>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="text-primary">
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Agency</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="small">
              {[...petitions]?.reverse().map((petition, index) => {
                return (
                  <AdminManagePetitionCard
                    petition={petition}
                    key={petition.caseId}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export const AdminManagePetitionCard = ({ petition, index }) => {
  const { title, description1, preferredAgency, status, dateCreated } =
    petition;
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <Link
            to="/petitions/id"
            className="fs-6 text-decoration-none text-nowrap"
          >
            {title}
          </Link>
        </td>
        <td>{timeAgo(dateCreated)}</td>
        <td>{preferredAgency}</td>
        <td>{status}</td>
        <td>
          <select
            className="form-control form-control-sm"
            id="exampleFormControlSelect1"
          >
            <option selected>Select option</option>
            <option value={1}>Open</option>
            <option value={2}>Close</option>
            <option value={3}>Delete</option>
            <option value={4}>Hide</option>
          </select>
        </td>
      </tr>
    </React.Fragment>
  );
};
