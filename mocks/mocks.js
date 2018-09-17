const {MockList} = require('apollo-server');
var faker = require('faker');

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
  User: (parent, context, args) => ({
    name: faker.name.findName(),
    favoriteFoods: () => new MockList(5),
  }),
  Query: () => ({
    users: () => new MockList(3),
  }),
};

module.exports = mocks;
