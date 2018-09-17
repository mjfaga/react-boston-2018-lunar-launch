import React from 'react';
import FavoriteFoodItem from './FavoriteFoodItem';

const FavoriteFoodList = ({favoriteFoods}) => (
  <div>
    <ul>
      {favoriteFoods.map((favoriteFoodItem, index) => (
        <FavoriteFoodItem favoriteFoodItem={favoriteFoodItem} key={index} />
      ))}
    </ul>
  </div>
);

export default FavoriteFoodList;
