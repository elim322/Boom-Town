import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <div>
      <ItemCard item={shareItemPreview} />
    </div>
  );
};

const mapStateToProps = state => ({
  shareItemPreview: state.shareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);
