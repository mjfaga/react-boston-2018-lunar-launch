import React from 'react';
import {Link} from 'react-router-dom';
import AddFavoriteFoodToUser from '../components/AddFavoriteFoodToUser';
import updateFavoriteFoodList from '../components/updateFavoriteFoodList';
import User from '../components/User';

const UserPage = ({match}) => (
  <React.Fragment>
    <User userId={match.params.id} />
    <AddFavoriteFoodToUser
      userId={match.params.id}
      updateWrapper={updateFavoriteFoodList}
    />
    <Link to="/">&lt;&lt; Back</Link>
  </React.Fragment>
);

export default UserPage;
