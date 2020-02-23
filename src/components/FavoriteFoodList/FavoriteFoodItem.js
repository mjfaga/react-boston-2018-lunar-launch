import React from 'react';
import gql from 'graphql-tag';

export const FavoriteFoodItem_favoriteFoods = gql`
  fragment FavoriteFoodItem_favoriteFoods on FavoriteFoodItem {
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
