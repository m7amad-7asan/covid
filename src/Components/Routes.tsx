import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

const DRAWER = lazy(() => import('./Drawer'));
const WELCOME = lazy(() => import('../Screens/Welcome'));
const COUNTRIES = lazy(() => import('../Screens/Countries'));

const Routes: React.FC = () => {
  const screensRoutes = (
    <Switch>
      <Route
        path="/home"
        render={() => (
          <Suspense fallback={<div>Loading ...</div>}>
            <WELCOME />
          </Suspense>
        )}
      />
      <Route
        path="/countries"
        render={() => (
          <Suspense fallback={<div>Loading ...</div>}>
            <COUNTRIES />
          </Suspense>
        )}
      />
      <Redirect to="/home" />
    </Switch>
  );

  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading ...</div>}>
        <DRAWER />
      </Suspense>
      <Router>{screensRoutes}</Router>
    </React.Fragment>
  );
};

export default Routes;
