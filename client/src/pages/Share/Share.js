import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';

import styles from './styles';

const Share = ({ classes }) => {
  return (
    <grid
      container
      className={classes.root}
      direction="row"
      alignItems="center"
      justify="center"
    />
  );
};

export default withStyles(styles)(Share);
