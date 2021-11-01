import React from 'react';
import { ViewPetition } from './petitions/ViewPetition';
import { NewPetition } from './new-petition/NewPetition';
import { TrackPetition } from './track-petition/TrackPetition';
import { Route, Switch } from 'react-router';
import { Home } from './home/Home';
import { Petitions } from './petitions/Petitions';
import { Layout } from '../../components/layouts/Layout';
import { PageNotFound } from '../404/PageNotFound';

export const Public = ({ match }) => {
  console.log(match.url);
  return (
    <Layout>
      <Switch>
        <Route
          path={match.url + 'petitions'}
          exact={true}
          component={Petitions}
        />
        <Route path={match.url} exact={true} component={Home} />
        <Route
          path={match.url + 'petition/id'}
          exact={true}
          component={ViewPetition}
        />
        <Route
          path={match.url + 'new_petition'}
          exact={true}
          component={NewPetition}
        />
        <Route
          path={match.url + 'track_petition'}
          exact={true}
          component={TrackPetition}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
};
