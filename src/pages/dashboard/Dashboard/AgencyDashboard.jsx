import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { DashboardNavbar } from './dashboard-layout/DashboardNavbar';
import { dashboard, dashBoardMainBody } from './dashboard.module.css';
import { DashboardSidebar } from './dashboard-layout/DashboardSidebar';
import { AgencyManagePetitions } from './agency/agency-manage-petitions/AgencyManagePetitions';
import { DashboardLoader } from './dashboard-layout/DashboardLoader';
import { Mentions } from './agency/mentions/Mentions';
import { AgencyStatistics } from './agency/agency-statistics/AgencyStatistics';
import { NewSubAgentForm } from './admin/manage-agency/NewSubAgentForm';
import { loadAgencyProfileWithToken } from '../../../redux/agency/actions/agency.actions';
import { useDispatch } from 'react-redux';

export const AgencyDashboard = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const agencyToken = localStorage.getItem('jwt_agency');

    if (agencyToken) {
      dispatch(loadAgencyProfileWithToken(agencyToken));
    } else {
      history.push('/agency_login');
    }
  }, []);

  // Page Loader
  if (loading) return <DashboardLoader setLoading={setLoading} />;

  return (
    <React.Fragment>
      <div className={dashboard}>
        <DashboardNavbar />
        <div className={`${dashBoardMainBody} bg-white d-flex`}>
          <DashboardSidebar userRole="agency" />
          <Switch>
            <Route path="/agency/petitions" component={AgencyManagePetitions} />
            <Route path="/agency/mentions" component={Mentions} />
            <Route path="/agency/agent_form" component={NewSubAgentForm} />
            <Route path="/agency" component={AgencyStatistics} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};
