import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { ShareItemForm } from '../../components/ShareItemForm/ShareItemForm';

import styles from './styles';

const Share = ({ ShareItemForm }) => {
  return <div>{ShareItemForm}</div>;
};

export default withStyles(styles)(Share);
