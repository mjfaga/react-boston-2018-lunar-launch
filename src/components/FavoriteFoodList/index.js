import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from 'react-relay';
import FavoriteFoodItem from './FavoriteFoodItem';

const FavoriteFoodList = ({user}) => {
  if (user.favoriteFoods.length === 0) return <div>No favorites yet!</div>;

  return (
    <div>
      <ul>
        {user.favoriteFoods.map((favoriteFoodItem, index) => (
          <FavoriteFoodItem key={index} favoriteFoodItem={favoriteFoodItem} />
        ))}
      </ul>
    </div>
  );
};

export default createFragmentContainer(FavoriteFoodList, {
  user: graphql`
    fragment FavoriteFoodList_user on User {
      favoriteFoods {
        ...FavoriteFoodItem_favoriteFoodItem
      }
    }
  `,
});
