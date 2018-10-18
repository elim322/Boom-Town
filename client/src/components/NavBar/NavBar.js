import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      this.props.location.pathname !== '/Welcome' && (
        <div>
          <p>this is the navbar</p>
        </div>
      )
    );
  }
}

export default withRouter(NavBar);
