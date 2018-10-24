import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function UserProfileCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        placeholder="Select your image"
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.user.fullname}
        </Typography>
        <Typography className={classes.description} component="p">
          {props.user.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ItemCards.propTypes = {
//   classes: PropTypes.object.isRequired
// };

UserProfileCard.defaultProps = {
  user: {
    fullname: 'Einer',
    bio: 'none'
  }
};

export default withStyles(styles)(UserProfileCard);
