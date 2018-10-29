import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Gravatar from 'react-gravatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

const ItemCard = ({ classes, item }) => {
  return (
    <Grid>
      <Card className={classes.card}>
        <img
          className={classes.media}
          placeholder="Select your image"
          src={item.imageurl}
          alt="item"
        />
        <CardContent>
          <CardHeader
            title={item.itemowner.fullname}
            avatar={<Gravatar email={item.itemowner.email} />}
          />
          <Typography className={classes.name} gutterBottom component="h2">
            {item.title}
          </Typography>
          <Typography className={classes.description} component="p">
            {item.description}
          </Typography>
          {item.tags && (
            <Typography component="p">
              {item.tags.map((tag, index) => {
                if (index < item.tags.length - 1) return tag.title + ', ';
                return tag.title;
              })}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button className={classes.borrow} size="large" variant="outlined">
            Borrow
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemCard);