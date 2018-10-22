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
      <AppBar position="static">
        <Toolbar
          style={{
            margin: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <img
            src={BoomtownLogo}
            alt="Boomtown Logo"
            style={{
              height: '40px',
              width: 'auto',
              position: 'relative',
              bottom: '10px',
              right: '10px'
            }}
          />
          <div>
            <Link
              to="/share"
              style={{
                position: 'relative',
                bottom: '10px'
              }}
            >
              <Button to="/share">
                <Icon
                  style={{
                    margin: '10px'
                  }}
                />
                SHARE SOMETHING
              </Button>
              <IconButton>
                <Dots
                  style={{
                    opacity: '0.7'
                  }}
                />
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

export default withStyles()(withRouter(NavBar));
