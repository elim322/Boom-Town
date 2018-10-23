import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function ItemCards(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} placeholder="Select your image" />

      <CardContent>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Name your item
        </Typography>
        <Typography className={classes.description} component="p">
          Describe your item
        </Typography>
      </CardContent>

      <CardActions>
        <Button className={classes.borrow} size="large" variant="contained">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
}

// ItemCards.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(ItemCards);
