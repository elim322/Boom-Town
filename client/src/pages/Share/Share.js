import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ItemCards from '../../components/ItemCards';

import styles from './styles';

const Share = ({ classes }) => {
  return (
    <div className={classes.Share}>
      <div className={classes.Card}>
        <ItemCards />
      </div>
      <div className={classes.Form}>
        <ShareItemForm />
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
