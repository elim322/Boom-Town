import React, { Component } from 'react';
import { ItemCards } from '../ItemCards';

const ShareItemPreview = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ItemCards />
    </div>
  );
};

export default withStyles(ShareItemPreview);
