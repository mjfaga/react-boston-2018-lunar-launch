import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import FavoriteFoodList from '../FavoriteFoodList';

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
            &#39;s favorite foods:
          </h2>
          <FavoriteFoodList favoriteFoods={data.user.favoriteFoods} />
        </React.Fragment>
      );
    }}
  </Query>
);
User.query = USER_QUERY;

export default User;
