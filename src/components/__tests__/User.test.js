import React from 'react';
import wait from 'waait';
import {mount} from 'enzyme';
import {MockedProvider} from 'react-apollo/test-utils';
import User, {addNewFoodCallback} from '../User';

const renderComponent = (userId, mocks) =>
  mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <User userId={userId} />
    </MockedProvider>
  );

describe('User', () => {
  describe('when the user is loading', () => {
    it('displays loading indicator', () => {
      const userId = 123;
      const component = renderComponent(userId, [
        {request: {query: User.query}, result: {data: {users: []}}},
      ]);

      expect(component.text()).toEqual('Grabbing favorite foods for 123...');
    });
  });

  describe('when a user is returned', () => {
    it('renders the users profile', async () => {
      const userId = 123;
      const user = {id: userId, name: 'Mark', favoriteFoods: []};
      const mocks = [
        {
          request: {
            query: User.query,
            variables: {
              id: userId,
            },
          },
          result: {
            data: {
              user,
            },
          },
        },
      ];

      const component = renderComponent(userId, mocks);

      await wait(0);
      component.update();

      expect(component.find('h2').text()).toEqual("Mark's favorite foods:");
      expect(component.find('FavoriteFoodList').props()).toEqual({user});
    });
  });

  describe('there is a network error', () => {
    it('displays an error message', async () => {
      const userId = 123;
      const component = renderComponent(userId, [
        {
          request: {query: User.query, variables: {id: userId}},
          error: new Error('I broke'),
        },
      ]);

      await wait(0);
      component.update();

      expect(component.text()).toEqual('An error occurred.');
    });
  });

  describe('there is a GraphQL error', () => {
    it('displays an error message', async () => {
      const userId = 123;
      const component = renderComponent(userId, [
        {
          request: {query: User.query, variables: {id: userId}},
          result: {
            errors: [{message: 'Whoops!'}],
          },
        },
      ]);

      await wait(0);
      component.update();

      expect(component.text()).toEqual('An error occurred.');
    });
  });
});

describe('addNewFoodCallback', () => {
  it('reads and writes to the cache', () => {
    const userId = 123;
    const cache = {
      readQuery: jest.fn(() => ({
        user: {id: userId, favoriteFoods: [{some: 'property'}]},
      })),
      writeQuery: jest.fn(),
    };
    const data = {data: {addFavoriteFood: {new: 'property'}}};

    addNewFoodCallback(123)(cache, data);

    const query = expect.any(Object);
    expect(cache.readQuery).toHaveBeenCalledWith({
      query,
      variables: {id: userId},
    });
    expect(cache.writeQuery).toHaveBeenCalledWith({
      query,
      data: {
        user: {
          id: userId,
          favoriteFoods: [{some: 'property'}, {new: 'property'}],
        },
      },
    });
  });
});
