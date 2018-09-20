import React from 'react';
import wait from 'waait';
import {mount} from 'enzyme';
import {MockedProvider} from 'react-apollo/test-utils';
import User from '../User';
import USER_QUERY from '../USER_QUERY';

const renderComponent = (userId, mocks) => {
  return mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <User userId={userId} />
    </MockedProvider>
  );
};

describe('User', () => {
  describe('when the user is loading', () => {
    it('displays loading indicator', () => {
      const userId = 123;
      const component = renderComponent(userId, [
        {request: {query: USER_QUERY}, result: {data: {users: []}}},
      ]);

      expect(component.text()).toEqual('Grabbing favorite foods for 123...');
    });
  });

  describe('when a user is returned', () => {
    it('renders the users profile', async () => {
      const userId = 123;
      const mocks = [
        {
          request: {
            query: USER_QUERY,
            variables: {
              id: userId,
            },
          },
          result: {
            data: {
              user: {id: userId, name: 'Mark', favoriteFoods: []},
            },
          },
        },
      ];

      const component = renderComponent(userId, mocks);

      await wait(0);
      component.update();

      expect(component.find('h2').text()).toEqual("Mark's favorite foods:");
      expect(component.find('FavoriteFoodList').props()).toEqual({
        favoriteFoods: [],
      });
    });
  });

  describe('there is a network error', () => {
    it('displays an error message', async () => {
      const userId = 123;
      const component = renderComponent(userId, [
        {
          request: {query: USER_QUERY, variables: {id: userId}},
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
          request: {query: USER_QUERY, variables: {id: userId}},
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
