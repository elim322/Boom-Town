import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import UserProfileCard from '../../components/UserProfileCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemCard from '../../components/ItemCard/ItemCard';

const Profile = ({ classes, viewerId, data }) => {
  console.log(data);
  return (
    <Grid className={classes.root}>
      <div>
        <UserProfileCard className={classes.card} data={data} />
      </div>
      <Typography className={classes.title} color="primary">
        Shared Items
      </Typography>
      <div className={classes.items}>
        {data.user.items.map(item => {
          return (
            <ItemCard className={classes.card} key={item.id} item={item} />
          );
        })}
      </div>
      <Typography className={classes.title} color="primary">
        Borrowed Items
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
