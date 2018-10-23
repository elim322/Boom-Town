import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import UserProfileCard from '../../components/UserProfileCard';

const Profile = ({ classes }) => {
  return (
    <div className={classes.root}>
      <UserProfileCard className={classes.card} />
      <p>
        This is the profile page located at <code>/profile/:userId</code>.
      </p>
    </div>
  );
};

export default withStyles(styles)(Profile);
