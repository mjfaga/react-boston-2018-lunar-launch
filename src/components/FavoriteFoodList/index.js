import React from 'react';
import FavoriteFoodItem from './FavoriteFoodItem';

const FavoriteFoodList = ({favoriteFoods}) => {
  if (favoriteFoods.length === 0) return <div>No favorites yet!</div>;

  return (
    <div>
      <ul>
        {favoriteFoods.map((favoriteFoodItem, index) => (
          <FavoriteFoodItem key={index} favoriteFoodItem={favoriteFoodItem} />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteFoodList;
