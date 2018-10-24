import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import UserProfileCard from '../../components/UserProfileCard';
import Grid from '@material-ui/core/Grid';

const Profile = ({ classes }) => {
  return (
    <Grid className={classes.root}>
      <div>
        <UserProfileCard className={classes.card} />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
