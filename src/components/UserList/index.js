import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from 'react-relay';
import relayEnvironment from '../../utilities/relayEnvironment';
import UserListItem from './UserListItem';

const USER_LIST_QUERY = graphql`
  query UserListQuery {
    users {
      ...UserListItem_user
    }
  }
`;

const userListRender = ({error, props}) => {
  if (error && error.networkError) return <div>{error.message}</div>;
  if (error && error.graphQLErrors)
    return <div>{`GraphQL error: ${error.graphQLErrors[0].message}`}</div>;
  if (!props) return <div>Loading...</div>;
  if (props.users.length === 0)
    return <div>You don&#39;t have any users yet!</div>;

  return (
    <ul className="user-list">
      {props.users.map((user, index) => (
        <UserListItem user={user} key={index} />
      ))}
    </ul>
  );
};

const UserList = () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={USER_LIST_QUERY}
    render={userListRender}
  />
);

export default UserList;
