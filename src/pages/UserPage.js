import React from 'react';
import {Link} from 'react-router-dom';
import AddFavoriteFoodToUser from '../components/AddFavoriteFoodToUser';
import User from '../components/User';

const UserPage = ({
  match: {
    params: {id: userId},
  },
}) => (
  <React.Fragment>
    <User userId={userId} />
    <AddFavoriteFoodToUser userId={userId} />
    <Link to="/">&lt;&lt; Back</Link>
  </React.Fragment>
);

export default UserPage;
