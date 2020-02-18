import React from 'react';
import gql from 'graphql-tag';
import FavoriteFoodItem, {
  FAVORITE_FOOD_ITEM_FRAGMENT,
} from './FavoriteFoodItem';

export const FAVORITE_FOODS_LIST_FRAGMENT = gql`
  fragment FavoriteFoodsListDisplay on User {
    favoriteFoods {
      ...FavoriteFoodItemDisplay
    }
  }

  ${FAVORITE_FOOD_ITEM_FRAGMENT}
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
