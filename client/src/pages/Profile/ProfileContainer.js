import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import Profile from './Profile';

class ProfileContainer extends Component {
  render() {
    return (
      <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return loading;
          if (error) return `${error}`;
          if (data) {
            console.log(data);
            return <Profile data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default ProfileContainer;
