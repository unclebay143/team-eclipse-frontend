import React, { useEffect, useState } from 'react';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const AgencyStatistics = () => {
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
      <div className="p-3 p-lg-5 w-100">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="card card-stats mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Mentions
                    </h5>
                    <span className="h4 mb-0">3</span>
                  </div>
                  <div className="col-auto">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bar-chart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                  {/* <span className="text-muted mr-2">Since registered</span> */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card card-stats mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Petitions
                    </h5>
                    <span className="h4 mb-0">
                      <span className="text-wrap">2,356</span>
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pie-chart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-muted mr-2">
                    {/* <span className="text-nowrap">Made by public</span> */}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card card-stats mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Pending
                    </h5>
                    <span className="h4 mb-0">2</span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-hourglass"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-muted mr-2">
                    {/* <span className="text-nowrap">Since registration</span> */}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card card-stats mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Completed
                    </h5>
                    <span className="h4 mb-0">0</span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-muted mr-2">
                    {/* <span className="text-nowrap">Since registration</span> */}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
