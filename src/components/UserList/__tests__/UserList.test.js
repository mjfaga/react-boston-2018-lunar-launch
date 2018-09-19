import wait from 'waait';
import React from 'react';
import renderer from 'react-test-renderer';
import {MockedProvider} from 'react-apollo/test-utils';
import {MemoryRouter} from 'react-router-dom';
import UserList, {USER_LIST_QUERY} from '../UserList';
import UserListItem from '../UserListItem';

const renderComponent = mocks => {
  return renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    </MockedProvider>
  );
};

describe('UserList', () => {
  describe('when the user list is loading', () => {
    it('displays loading indicator', () => {
      const component = renderComponent([
        {request: {query: USER_LIST_QUERY}, result: {data: {users: []}}},
      ]);

      expect(component.toJSON().children).toContain('Loading...');
    });
  });

  describe('when no users are returned', () => {
    it('display missing users message', async () => {
      const component = renderComponent([
        {request: {query: USER_LIST_QUERY}, result: {data: {users: []}}},
      ]);

      await wait(0);

      expect(component.toJSON().children).toContain(
        "You don't have any users yet!"
      );
    });
  });

  describe('when users are returned', () => {
    it('renders those users in a list', async () => {
      const mocks = [
        {
          request: {
            query: USER_LIST_QUERY,
          },
          result: {
            data: {
              users: [{id: 1, name: 'Mark'}, {id: 2, name: 'Craig'}],
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
          id: 1,
          name: 'Mark',
        },
      });
      expect(userListItems[1].props).toEqual({
        user: {
          id: 2,
          name: 'Craig',
        },
      });
    });
  });
  describe('there is a network error', () => {
    it('displays the error', async () => {
      const component = renderComponent([
        {
          request: {query: USER_LIST_QUERY},
          error: new Error('I broke'),
        },
      ]);

      await wait(0);

      expect(component.toJSON().children).toContain('Network error: I broke');
    });
  });

  describe('there is a GraphQL error', () => {
    it('displays the error', async () => {
      const component = renderComponent([
        {
          request: {query: USER_LIST_QUERY},
          result: {
            errors: [{message: 'Whoops!'}],
          },
        },
      ]);

      await wait(0);

      expect(component.toJSON().children).toContain('GraphQL error: Whoops!');
    });
  });
});
