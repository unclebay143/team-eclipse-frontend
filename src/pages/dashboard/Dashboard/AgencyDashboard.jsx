import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { DashboardNavbar } from './dashboard-layout/DashboardNavbar';
import { dashboard, dashBoardMainBody } from './dashboard.module.css';
import { DashboardSidebar } from './dashboard-layout/DashboardSidebar';
import { AgencyManagePetitions } from './agency/agency-manage-petitions/AgencyManagePetitions';
import { DashboardLoader } from './dashboard-layout/DashboardLoader';
import { Mentions } from './agency/mentions/Mentions';
import { AgencyStatistics } from './agency/agency-statistics/AgencyStatistics';
import { NewSubAgentForm } from './admin/manage-agency/NewSubAgentForm';

export const AgencyDashboard = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <DashboardLoader setLoading={setLoading} />;

  return (
    <React.Fragment>
      <div className={dashboard}>
        <DashboardNavbar />
        <div className={`${dashBoardMainBody} bg-white d-flex`}>
          <DashboardSidebar userRole="agency" />
          <Switch>
            <Route
              path="/agency/petitions/id"
              component={AgencyManagePetitions}
            />
            <Route path="/agency/mentions" component={Mentions} />
            <Route path="/agency/agent_form" component={NewSubAgentForm} />
            <Route path="/agency" component={AgencyStatistics} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};
