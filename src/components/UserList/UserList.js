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
    {({data, error, loading}) => {
      if (loading) return <div>Loading...</div>;
      if (error && error.networkError) return <div>{error.message}</div>;
      if (error && error.graphQLErrors)
        return <div>{`GraphQL error: ${error.graphQLErrors[0].message}`}</div>;
      if (data.users.length === 0)
        return <div>You don&#39;t have any users yet!</div>;

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
UserList.query = USER_LIST_QUERY;

export default UserList;
