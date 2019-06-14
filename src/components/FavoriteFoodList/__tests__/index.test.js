import React from 'react';
import {shallow} from 'enzyme';
import FavoriteFoodList from '../index';

describe('FavoriteFoodList', () => {
  describe('when there are no food items', () => {
    it('renders a list of FavoriteFoodItems', () => {
      const user = {favoriteFoods: []};

      const component = shallow(<FavoriteFoodList user={user} />);

      expect(component.text()).toEqual('No favorites yet!');
    });
  });

  describe('when there are food items', () => {
    it('renders a list of FavoriteFoodItems', () => {
      const user = {
        favoriteFoods: [{first: 'firstItem'}, {second: 'secondItem'}],
      };

      const component = shallow(<FavoriteFoodList user={user} />);

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
