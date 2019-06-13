import React from 'react';
import gql from 'graphql-tag';

export const FAVORITE_FOOD_ITEM_FRAGMENT = gql`
  fragment FavoriteFoodItemDisplay on FavoriteFoodItem {
    id
    foodItem {
      id
      name
    }
    eatingFrequency
  }
`;

const FavoriteFoodItem = ({favoriteFoodItem}) => (
  <li>
    I like to eat {favoriteFoodItem.foodItem.name} on a{' '}
    {favoriteFoodItem.eatingFrequency.toLowerCase()} basis
  </li>
);

export default FavoriteFoodItem;
