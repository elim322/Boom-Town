import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function ItemCards(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <img
        className={classes.media}
        placeholder="Select your image"
        src={props.item.imageurl}
      />

      <CardContent>
        <Typography className={classes.name} gutterBottom component="h2">
          {props.item.title}
        </Typography>
        <Typography className={classes.description} component="p">
          {props.item.description}
        </Typography>
        <Typography component="p">
          {props.item.tags.map((tag, index) => {
            if (index < props.item.tags.length - 1) return tag.title + ', ';
            return tag.title;
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.borrow} size="large" variant="outlined">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
}

ItemCards.propTypes = {
  classes: PropTypes.object.isRequired
};

ItemCards.defaultProps = {
  item: {
    title: 'Name your item',
    description: 'Describe your item'
  }
};

export default withStyles(styles)(ItemCards);
