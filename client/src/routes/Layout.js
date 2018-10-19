import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Welcome from '../pages/Welcome';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import NavBar from '../components/NavBar';

export default () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/Items" component={Items} />
      <Route exact path="/Welcome" component={Welcome} />
      <Route exact path="/Share" component={Share} />
      <Route exact path="/Profile/:id" component={Profile} />
      {/* <Route component={Items} /> */}
      <Redirect to="/Welcome" />
    </Switch>
  </Fragment>
);
