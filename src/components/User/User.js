import React from 'react';
import {Query} from 'react-apollo';
import FavoriteFoodList from '../FavoriteFoodList';
import USER_QUERY from './USER_QUERY';

const User = ({userId}) => (
  <Query query={USER_QUERY} variables={{id: userId}}>
    {({data, error, loading}) => {
      if (loading)
        return (
          <h2>
            Grabbing favorite foods for {userId}
            ...
          </h2>
        );
      if (error) return <div>An error occurred.</div>;

      return (
        <React.Fragment>
          <h2>
            {data.user.name}
            's favorite foods:
          </h2>
          <FavoriteFoodList favoriteFoods={data.user.favoriteFoods} />
        </React.Fragment>
      );
    }}
  </Query>
);

export default User;
