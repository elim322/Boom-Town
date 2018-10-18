import React, { Component } from 'react';

import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';

// const ITEM_QUERY = gql`
//   {
//     ...ItemsFields
//   }
// `;

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'loading';
          if (error) return `${error}`;
          if (data) {
            console.log(data);
            return data.items.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            });
          }
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
