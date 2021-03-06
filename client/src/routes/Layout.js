import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Welcome from '../pages/Welcome';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import NavBar from '../components/NavBar';
import { ViewerContext } from '../context/ViewerProvider';

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer, error }) => {
      if (loading) return '';
      if (error) return '';
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/items" component={Items} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile/:id" component={Profile} />
            <Redirect to="/Items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
