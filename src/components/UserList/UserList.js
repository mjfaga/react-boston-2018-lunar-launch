import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import UserListItem from './UserListItem';

const USER_LIST_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

const UserList = () => (
  <Query query={USER_LIST_QUERY}>
    {({data, loading}) => {
      if (loading) return <div>Loading...</div>;

      return (
        <React.Fragment>
          <h2>Users</h2>
          <ul className="user-list">
            {data.users.map((user, index) => (
              <UserListItem user={user} key={index} />
            ))}
          </ul>
        </React.Fragment>
      );
    }}
  </Query>
);

export default UserList;
