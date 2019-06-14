import React from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';

export const USER_LIST_ITEM_FRAGMENT = gql`
  fragment UserListItemDisplay on User {
    id
    name
  }
`;

const UserListItem = ({user}) => (
  <li>
    <Link to={`/user/${user.id}`}>{user.name}</Link>
  </li>
);

export default UserListItem;
