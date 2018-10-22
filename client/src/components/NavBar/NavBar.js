import React from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './styles';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/icons/AddCircle';
import BoomtownLogo from './../../images/boomtown.svg';
import Button from '@material-ui/core/Button';
import Dots from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const NavBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <img
            src={BoomtownLogo}
            alt="Boomtown Logo"
            className={classes.Logo}
          />
          <div>
            <Link to="/share">
              <Button to="/share">
                <Icon />
                SHARE SOMETHING
              </Button>
              <IconButton>
                <Dots />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(withRouter(NavBar));
