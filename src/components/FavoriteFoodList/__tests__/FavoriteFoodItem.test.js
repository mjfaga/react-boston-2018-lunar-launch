import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteFoodItem from '../FavoriteFoodItem';

describe('FavoriteFoodItem', () => {
  it('renders a list item with a link to the user', () => {
    const favoriteFoodItem = {
      foodItem: {name: 'Delicious Food'},
      eatingFrequency: 'DAILY',
    };

    const component = renderer.create(
      <FavoriteFoodItem favoriteFoodItem={favoriteFoodItem} />
    );

    const link = component.root.findByType('li');
    expect(link.children.join('')).toEqual(
      'I like to eat Delicious Food on a daily basis'
    );
  });
});
