import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from 'react-relay';
import FavoriteFoodItem from './FavoriteFoodItem';

const FavoriteFoodList = ({user}) => {
  if (user.favoriteFoods.edges.length === 0)
    return <div>No favorites yet!</div>;

  return (
    <div>
      <ul>
        {user.favoriteFoods.edges.map((favoriteFoodItem, index) => (
          <FavoriteFoodItem
            key={index}
            favoriteFoodItem={favoriteFoodItem.node}
          />
        ))}
      </ul>
    </div>
  );
};

export default createFragmentContainer(FavoriteFoodList, {
  user: graphql`
    fragment FavoriteFoodList_user on User {
      favoriteFoods(first: 10) @connection(key: "User_favoriteFoods") {
        edges {
          node {
            ...FavoriteFoodItem_favoriteFoodItem
          }
        }
      }
    }
  `,
});
