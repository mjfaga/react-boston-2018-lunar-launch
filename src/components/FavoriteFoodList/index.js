import React from 'react';
import gql from 'graphql-tag';
import FavoriteFoodItem, {
  FavoriteFoodItem_favoriteFoods,
} from './FavoriteFoodItem';

export const FavoriteFoodList_user = gql`
  fragment FavoriteFoodList_user on User {
    favoriteFoods {
      ...FavoriteFoodItem_favoriteFoods
    }
  }

  ${FavoriteFoodItem_favoriteFoods}
`;

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

export default FavoriteFoodList;
