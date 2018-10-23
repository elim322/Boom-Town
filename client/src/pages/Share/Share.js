import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import ShareItemPreview from '../../components/ShareItemPreview/ShareItemPreview';

const Share = ({ classes, tags }) => {
  return (
    <Grid className={classes.Share}>
      <ShareItemPreview />

      <ShareItemForm tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
