import React from 'react';

const FavoriteFoodItem = ({favoriteFoodItem}) => (
  <li>
    I like to eat {favoriteFoodItem.foodItem.name} on a{' '}
    {favoriteFoodItem.eatingFrequency.toLowerCase()} basis
  </li>
);

export default FavoriteFoodItem;
