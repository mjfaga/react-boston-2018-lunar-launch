import React from 'react';
import {Link} from 'react-router-dom';

const UserListItem = ({user}) => (
  <li>
    <Link to={`/user/${user.id}`}>{user.name}</Link>
  </li>
);

export default UserListItem;
