import React, { useState } from 'react';
import { AgencyNavbar } from './dashboard-layout/DashboardNavbar';
import { dashboard, dashBoardMainBody } from './dashboard.module.css';
import { Statistics } from './agency/statistics/Statistics';
import { AgencySidebar } from './dashboard-layout/DashboardSidebar';
import { Route, Switch } from 'react-router';
import { Mentions } from './mentions/Mentions';
import { ManagePetitions } from './manage-petitions/ManagePetitions';
import {
  DashboardComponentLoader,
  DashboardLoader,
} from './dashboard-layout/DashboardLoader';

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <DashboardLoader setLoading={setLoading} />;

  const isAdmin = true;
  return (
    <React.Fragment>
      <div className={dashboard}>
        <AgencyNavbar />
        <div className={`${dashBoardMainBody} bg-white d-flex`}>
          <AgencySidebar />
          {!isAdmin ? (
            <Switch>
              <Route path="/agency/petitions/id" component={ManagePetitions} />
              <Route path="/agency/mentions" component={Mentions} />
              <Route path="/agency" component={Statistics} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/agency/petitions/id" component={ManagePetitions} />
              {/* <Route path="/agency/mentions" component={Mentions} /> */}
              <Route path="/agency" component={Statistics} />
            </Switch>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
