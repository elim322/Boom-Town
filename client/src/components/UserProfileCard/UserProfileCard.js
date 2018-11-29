import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Gravatar from 'react-gravatar';
import CardHeader from '@material-ui/core/CardHeader';

function UserProfileCard(props) {
  const { classes, user } = props;
  return (
    <Card className={classes.card}>
      <CardHeader avatar={<Gravatar email={user.email} />} />
      <CardContent className={classes.content}>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {user.fullname}
        </Typography>
        <Typography className={classes.description} component="p">
          {user.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}



UserProfileCard.defaultProps = {
  user: {
    fullname: 'Einer',
    bio: 'none'
  }
};

export default withStyles(styles)(UserProfileCard);
