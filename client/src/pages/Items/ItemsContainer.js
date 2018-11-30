import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import Items from './Items';

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return loading;
          if (error) return `${error}`;
          if (data) {
            return <Items data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
