import React, { Component } from 'react';
import { Form, Fields } from 'react-final-form';

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button>Select Image</button>
        <label>
          <input
            id="item-name"
            name="item-name"
            type="text"
            placeholder="name your item"
          />
        </label>
        <label>
          <input
            id="item-description"
            name="item-name"
            type="text"
            placeholder="describe your item"
          />
        </label>
        <button>Share</button>
      </div>
    );
  }
}

export default ShareForm;
