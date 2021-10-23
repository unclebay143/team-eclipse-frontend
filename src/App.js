import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Layout } from './components/layouts/Layout';
import { Home } from './pages/home/Home';
import { ViewPetition } from './pages/petitions/ViewPetition';
import { Petitions } from './pages/petitions/Petitions';
import { NewPetition } from './pages/new-petition/NewPetition';
import { Success } from './components/utils/Success';

function App() {
  return (
    <Router>
      <div className="App bg-light">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/petition/id" component={ViewPetition} />
            <Route path="/petitions" component={Petitions} />
            <Route path="/new_petition" component={NewPetition} />
            <Route path="/success" component={Success} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
