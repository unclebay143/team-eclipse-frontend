import React, { useEffect, useState } from 'react';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const AdminStatistics = () => {
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
                      Agencies
                    </h5>
                    <span className="h4 mb-0">3</span>
                  </div>
                  <div className="col-auto">
                    <div>
                      <i className="bi bi-people"></i>
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
                      <i className="bi bi-pie-chart"></i>
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
                      <i className="bi bi-hourglass"></i>
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
                      <i className="bi bi-check-circle"></i>
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
