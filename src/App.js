import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AgencyLogin } from './pages/dashboard/auth/AgencyLogin';
import { Public } from './pages/public/Public';
import { AdminLogin } from './pages/dashboard/auth/AdminLogin';
import { CreatePassword } from './pages/dashboard/auth/CreatePassword';
import { Success } from './components/utils/Success';
import { AdminDashboard } from './pages/dashboard/Dashboard/AdminDashboard';
import { AgencyDashboard } from './pages/dashboard/Dashboard/AgencyDashboard';
// Notification
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <Provider store={store}>
      <ReactNotification />
      <Router>
        <div className="App bg-light">
          <Switch>
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/agency" component={AgencyDashboard} />
            <Route path="/admin_login" component={AdminLogin} />
            <Route path="/create_password" component={CreatePassword} />
            <Route path="/agency_login" component={AgencyLogin} />
            <Route path="/success" component={Success} />
            <Route path="/" component={Public} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
