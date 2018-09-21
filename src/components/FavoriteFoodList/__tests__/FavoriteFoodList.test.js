import React from 'react';
import {shallow} from 'enzyme';
import FavoriteFoodList from '../FavoriteFoodList';

describe('FavoriteFoodList', () => {
  describe('when there are no food items', () => {
    it('renders a list of FavoriteFoodItems', () => {
      const favoriteFoods = [];

      const component = shallow(
        <FavoriteFoodList favoriteFoods={favoriteFoods} />
      );

      expect(component.text()).toEqual('No favorites yet!');
    });
  });

  describe('when there are food items', () => {
    it('renders a list of FavoriteFoodItems', () => {
      const favoriteFoods = [{first: 'firstItem'}, {second: 'secondItem'}];

      const component = shallow(
        <FavoriteFoodList favoriteFoods={favoriteFoods} />
      );

      const foodItems = component.find('FavoriteFoodItem');
      expect(foodItems).toHaveLength(2);
      expect(foodItems.first().props()).toEqual({
        favoriteFoodItem: {first: 'firstItem'},
      });
      expect(foodItems.last().props()).toEqual({
        favoriteFoodItem: {second: 'secondItem'},
      });
    });
  });
});
