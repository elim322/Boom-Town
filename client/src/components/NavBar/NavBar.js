import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      this.props.location.pathname !== '/Welcome' && ( //logic to make navbar appear in all pages but welcome page
        <div>
          <p>this is the navbar</p>
        </div>
      )
    );
  }
}

export default withRouter(NavBar);
