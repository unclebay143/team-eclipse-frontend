import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Login } from './pages/dashboard/auth/Login';
import { Public } from './pages/public/Public';
import { Register } from './pages/dashboard/auth/Register';
import { CreatePassword } from './pages/dashboard/auth/CreatePassword';
import { Success } from './components/utils/Success';
import { AdminDashboard } from './pages/dashboard/Dashboard/AdminDashboard';
import { AgencyDashboard } from './pages/dashboard/Dashboard/AgencyDashboard';

function App() {
  return (
    <Router>
      <div className="App bg-light">
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/agency" component={AgencyDashboard} />
          <Route path="/register" component={Register} />
          <Route path="/create_password" component={CreatePassword} />
          <Route path="/login" component={Login} />
          <Route path="/success" component={Success} />
          <Route path="/" component={Public} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
