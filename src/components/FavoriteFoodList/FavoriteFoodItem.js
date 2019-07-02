import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from 'react-relay';

const FavoriteFoodItem = ({favoriteFoodItem}) => (
  <li>
    I like to eat {favoriteFoodItem.foodItem.name} on a{' '}
    {favoriteFoodItem.eatingFrequency.toLowerCase()} basis
  </li>
);

export default createFragmentContainer(FavoriteFoodItem, {
  favoriteFoodItem: graphql`
    fragment FavoriteFoodItem_favoriteFoodItem on FavoriteFoodItem {
      id
      foodItem {
        id
        name
      }
      eatingFrequency
    }
  `,
});
