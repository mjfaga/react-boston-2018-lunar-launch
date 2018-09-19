import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import FavoriteFoodList from '../FavoriteFoodList';
import AddFavoriteFoodToUser from './AddFavoriteFoodToUser';

const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      favoriteFoods {
        id
        foodItem {
          id
          name
        }
        eatingFrequency
      }
    }
  }
`;

const updateFavoriteFoodList = userId => (cache, {data: {addFavoriteFood}}) => {
  const {user} = cache.readQuery({query: USER_QUERY, variables: {id: userId}});

  cache.writeQuery({
    query: USER_QUERY,
    data: {
      user: {
        ...user,
        favoriteFoods: [...user.favoriteFoods, addFavoriteFood],
      },
    },
  });
};

const User = ({match}) => (
  <Query query={USER_QUERY} variables={{id: match.params.id}}>
    {({data, loading}) => {
      if (loading)
        return (
          <h2>
            Grabbing favorite foods for {match.params.id}
            ...
          </h2>
        );

      return (
        <React.Fragment>
          <h2>
            {data.user.name}
            's favorite foods:
          </h2>
          <FavoriteFoodList favoriteFoods={data.user.favoriteFoods} />
          <AddFavoriteFoodToUser
            update={(cache, data) => {
              updateFavoriteFoodList(match.params.id)(cache, data);
            }}
            userId={match.params.id}
          />
          <Link to={`/`}>&lt;&lt; Back</Link>
        </React.Fragment>
      );
    }}
  </Query>
);

export default User;
