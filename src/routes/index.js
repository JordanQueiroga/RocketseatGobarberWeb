import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SinIn from '../pages/SingIn';
import SinUp from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SinIn} />
      <Route path="/register" component={SinUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
