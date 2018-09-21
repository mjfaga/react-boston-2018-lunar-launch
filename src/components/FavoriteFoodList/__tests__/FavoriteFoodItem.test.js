import React from 'react';
import {mount} from 'enzyme';
import FavoriteFoodItem from '../FavoriteFoodItem';

describe('FavoriteFoodItem', () => {
  it('renders a list item with a favorite food statement', () => {
    const favoriteFoodItem = {
      foodItem: {name: 'Delicious Food'},
      eatingFrequency: 'DAILY',
    };

    const component = mount(
      <FavoriteFoodItem favoriteFoodItem={favoriteFoodItem} />
    );

    const listItem = component.find('li');
    expect(listItem.text()).toEqual(
      'I like to eat Delicious Food on a daily basis'
    );
  });
});
