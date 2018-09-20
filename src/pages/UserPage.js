import React from 'react';
import {Link} from 'react-router-dom';
import User, {AddFavoriteFoodToUser} from '../components/User';

const UserPage = ({match}) => (
  <React.Fragment>
    <User userId={match.params.id} />
    <AddFavoriteFoodToUser userId={match.params.id} />
    <Link to={`/`}>&lt;&lt; Back</Link>
  </React.Fragment>
);

export default UserPage;
