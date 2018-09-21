/* eslint-disable import/no-commonjs */
const {MockList} = require('apollo-server');
const faker = require('faker');

const mocks = {
  FoodItem: () => ({
    name: faker.helpers.randomize([
      'Chocolate Ice Cream',
      'Peppers',
      'Hummus',
      'Sushi',
      'Eggs Benedict',
      'Pad Se Ew',
    ]),
  }),
  User: () => ({
    name: faker.name.findName(),
    favoriteFoods: () => new MockList(5),
  }),
  Query: () => ({
    users: () => new MockList(3),
  }),
};

module.exports = mocks;
