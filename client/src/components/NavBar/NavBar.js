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
import IconButton from '@material-ui/core/IconButton';
import DropDown from '../DropDown';

const NavBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.Tool}>
          <Link to="/items">
            <img
              src={BoomtownLogo}
              alt="Boomtown Logo"
              className={classes.Logo}
            />
          </Link>
          <div>
            <Link to="/share">
              <Button>
                <Icon to="/share" />
                SHARE SOMETHING
              </Button>
              <IconButton>
                <DropDown />
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
