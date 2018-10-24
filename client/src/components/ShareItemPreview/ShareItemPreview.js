import React from 'react';
import ItemCards from '../ItemCards/ItemCards';
import { connect } from 'react-redux';

const ShareItemPreview = ({ ShareItemPreview }) => {
  return (
    <div>
      <ItemCards item={ShareItemPreview} />
    </div>
  );
};

const mapStateToProps = state => ({
  ShareItemPreview: state.ShareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);
