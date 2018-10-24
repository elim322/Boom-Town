import React from 'react';
import ItemCards from '../ItemCards/ItemCards';
import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <div>
      <ItemCards item={shareItemPreview} />
    </div>
  );
};

const mapStateToProps = state => ({
  shareItemPreview: state.shareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);
