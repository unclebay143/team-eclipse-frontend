import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Login } from './pages/dashboard/auth/Login';
import { Public } from './pages/public/Public';
import { Register } from './pages/dashboard/auth/Register';
import { CreatePassword } from './pages/dashboard/auth/CreatePassword';
import { Dashboard } from './pages/dashboard/Dashboard/Dashboard';
import { Success } from './components/utils/Success';

function App() {
  return (
    <Router>
      <div className="App bg-light">
        <Switch>
          <Route path="/agency" component={Dashboard} />
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
