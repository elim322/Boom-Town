import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ItemCards from '../../components/ItemCards/ItemCards';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

const Items = ({ classes, items }) => {
  return (
    <Grid className={classes.root}>
      <ItemCards items={items} key={items.id} />
    </Grid>
  );
};

export default withStyles(styles)(Items);
