import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../../../../components/helper/time/time';
import { agencyClaimPetition } from '../../../../../redux/agency/actions/agency.actions';
import { getAllPetitions } from '../../../../../redux/petition/actions/petition.actions';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const AgencyManagePetitions = () => {
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

  const claimCase = (caseId, agencyName) => {
    const payload = {
      agencyName,
      caseId,
    };
    dispatch(agencyClaimPetition(payload))
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(agencyName);

  if (loading || !petitions) return <DashboardComponentLoader />;
  return (
    <React.Fragment>
      <div className="container">
        <span className="d-flex text-primary align-items-center flex-shrink-0 py-3 link-dark text-decoration-none border-bottom">
          <h3 className="fw-semibold fs-4 text-left btn-m">Petitions</h3>
        </span>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="text-primary">
                <th scope="col">S/N</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Case ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="small">
              {[...petitions]
                ?.reverse()
                .map(({ title, caseId, status, dateCreated }, index) => {
                  return (
                    <React.Fragment>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <Link
                            to={`petitions/${caseId}`}
                            className="fs-6 text-decoration-none text-nowrap"
                          >
                            {title}
                          </Link>
                        </td>
                        <td>{timeAgo(dateCreated)}</td>
                        <td>{status}</td>
                        <td className="smal">{caseId}</td>
                        <td>
                          {status === 'open' ? (
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => claimCase(caseId, agencyName)}
                            >
                              Claim Petition
                            </button>
                          ) : (
                            <button
                              className="btn btn-sm btn-danger"
                              // onClick={() => claimCase(caseId, agencyName)}
                            >
                              Drop Petition
                            </button>
                          )}
                          {/* <select
                            className="form-control form-control-sm"
                            onChange={handleChange}
                          >
                            <option selected>Select option</option>
                            <option value={1}>Open</option>
                            <option value={2}>Claim</option>
                            <option value={3}>Solved</option>
                            <option value={4}>Closed</option>
                            <option value={5}>Drop</option>
                          </select> */}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
