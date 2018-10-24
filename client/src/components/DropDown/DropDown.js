import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const options = ['Your Profile', 'Sign Out'];

const ITEM_HEIGHT = 48;

class DropDown extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'drop-down' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="drop-down"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          <Link to="/profile/:id">
            <MenuItem>
              <i class="material-icons">fingerprint</i>
              <p>Your Profile </p>
            </MenuItem>
          </Link>
          <Link to="/welcome">
            <MenuItem>
              <p>Sign Out</p>
            </MenuItem>
          </Link>
          )
        </Menu>
      </div>
    );
  }
}

export default DropDown;
