import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import Grid from '@material-ui/core/Grid';
import ItemCards from '../../components/ItemCards';

import styles from './styles';

const Share = ({ classes }) => {
  return (
    <div className="Share">
      <Grid
        container
        className={classes.root}
        direction="row-reverse"
        alignItems="center"
      >
        <ShareItemForm />
      </Grid>
      <Grid>
        <ItemCards />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Share);
