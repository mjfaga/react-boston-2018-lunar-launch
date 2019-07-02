import React from 'react';
import {Link} from 'react-router-dom';
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from 'react-relay';

const UserListItem = ({user}) => (
  <li>
    <Link to={`/user/${user.id}`}>{user.name}</Link>
  </li>
);

export default createFragmentContainer(UserListItem, {
  user: graphql`
    fragment UserListItem_user on User {
      id
      name
    }
  `,
});
