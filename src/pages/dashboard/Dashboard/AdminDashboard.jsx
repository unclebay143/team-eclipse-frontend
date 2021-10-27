import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { DashboardNavbar } from './dashboard-layout/DashboardNavbar';
import { dashboard, dashBoardMainBody } from './dashboard.module.css';
import { DashboardSidebar } from './dashboard-layout/DashboardSidebar';
import { DashboardLoader } from './dashboard-layout/DashboardLoader';
import { Mentions } from './agency/mentions/Mentions';
import { AdminStatistics } from './admin/admin-statistics/AdminStatistics';
import { NewAgencyForm } from './admin/manage-agency/NewAgencyForm';
import { AgencyList } from './admin/manage-agency/AgencyList';
import { AdminManagePetitions } from './admin/admin-manage-petitions/AdminManagePetition';

export const AdminDashboard = () => {
  const [pageLoading, setpageLoading] = useState(true);

  // Page Loader
  if (pageLoading) return <DashboardLoader setLoading={setpageLoading} />;

  return (
    <React.Fragment>
      <div className={dashboard}>
        <DashboardNavbar />
        <div className={`${dashBoardMainBody} bg-white d-flex`}>
          <DashboardSidebar userRole="admin" />
          <Switch>
            <Route path="/admin/agencies" component={AgencyList} />
            <Route path="/admin/agency/new" component={NewAgencyForm} />
            <Route
              path="/admin/petitions/id"
              component={AdminManagePetitions}
            />
            <Route path="/admin/mentions" component={Mentions} />
            <Route path="/admin" component={AdminStatistics} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};
