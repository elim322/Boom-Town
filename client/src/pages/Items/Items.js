import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

const Items = ({ classes, data }) => {
  return (
    <Grid className={classes.root} spacing={24}>
      {data.items.map(item => {
        return <ItemCard className={classes.card} item={item} key={item.id} />;
      })}
    </Grid>
  );
};

export default withStyles(styles)(Items);
