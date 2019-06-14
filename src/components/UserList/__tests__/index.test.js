import React from 'react';
import wait from 'waait';
import renderer from 'react-test-renderer';
import {MockedProvider} from 'react-apollo/test-utils';
import {MemoryRouter} from 'react-router-dom';
import UserList from '../index';
import UserListItem from '../UserListItem';

const renderComponent = mocks =>
  renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks}>
        <UserList />
      </MockedProvider>
    </MemoryRouter>
  );

describe('UserList', () => {
  describe('when the user list is loading', () => {
    it('displays loading indicator', () => {
      const component = renderComponent([{request: {query: UserList.query}}]);

      expect(component.toJSON().children.join('')).toEqual('Loading...');
    });
  });

  describe('there is a network error', () => {
    it('displays the error', async () => {
      const component = renderComponent([
        {
          request: {query: UserList.query},
          error: new Error('I broke'),
        },
      ]);

      await wait(0);

      expect(component.toJSON().children.join('')).toEqual(
        'Network error: I broke'
      );
    });
  });

  describe('there is a GraphQL error', () => {
    it('displays the error', async () => {
      const component = renderComponent([
        {
          request: {query: UserList.query},
          result: {
            errors: [{message: 'Whoops!'}],
          },
        },
      ]);

      await wait(0);

      expect(component.toJSON().children.join('')).toEqual(
        'GraphQL error: Whoops!'
      );
    });
  });

  describe('when no users are returned', () => {
    it('display missing users message', async () => {
      const component = renderComponent([
        {request: {query: UserList.query}, result: {data: {users: []}}},
      ]);

      await wait(0);

      expect(component.toJSON().children.join('')).toEqual(
        "You don't have any users yet!"
      );
    });
  });

  describe('when users are returned', () => {
    it('renders those users in a list', async () => {
      const mocks = [
        {
          request: {
            query: UserList.query,
          },
          result: {
            data: {
              users: [
                {__typename: 'User', id: 1, name: 'Mark'},
                {__typename: 'User', id: 2, name: 'Hillary'},
              ],
            },
          },
        },
      ];

      const component = renderComponent(mocks);

      await wait(0);

      const userListItems = component.root.findAllByType(UserListItem);
      expect(userListItems).toHaveLength(2);
      expect(userListItems[0].props).toEqual({
        user: {
          __typename: 'User',
          id: 1,
          name: 'Mark',
        },
      });
      expect(userListItems[1].props).toEqual({
        user: {
          __typename: 'User',
          id: 2,
          name: 'Hillary',
        },
      });
    });
  });
});
