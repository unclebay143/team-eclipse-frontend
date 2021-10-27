import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const AgencyManagePetitions = () => {
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
      <div className="container">
        <span className="d-flex text-primary align-items-center flex-shrink-0 py-3 link-dark text-decoration-none border-bottom">
          <h3 className="fw-semibold fs-4 text-left btn-m">
            EFCC Abuja Petitions
          </h3>
        </span>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="text-primary">
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="small">
              <tr>
                <th scope="row">1</th>
                <td>
                  <Link
                    to="/petitions/id"
                    className="fs-6 text-decoration-none text-nowrap"
                  >
                    List group item heading
                  </Link>
                </td>
                <td>20/20/2021</td>
                <td>Pending</td>
                <td>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect1"
                  >
                    <option selected>Select option</option>
                    <option value={1}>Pending</option>
                    <option value={2}>Solved</option>
                    <option value={3}>Closed</option>
                    <option value={4}>Drop</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <Link
                    to="/petitions/id"
                    className="fs-6 small text-decoration-none"
                  >
                    List group item heading
                  </Link>
                </td>
                <td>20/20/2021</td>
                <td>Pending</td>
                <td>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect1"
                  >
                    <option selected>Select option</option>
                    <option value={1}>Pending</option>
                    <option value={2}>Solved</option>
                    <option value={3}>Closed</option>
                    <option value={4}>Drop</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <Link
                    to="/petitions/id"
                    className="fs-6 small text-decoration-none"
                  >
                    List group item heading
                  </Link>
                </td>
                <td>20/20/2021</td>
                <td>Pending</td>
                <td>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect1"
                  >
                    <option selected>Select option</option>
                    <option value={1}>Pending</option>
                    <option value={2}>Solved</option>
                    <option value={3}>Closed</option>
                    <option value={4}>Drop</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
