import React from 'react';
import wait from 'waait';
import renderer from 'react-test-renderer';
import {MockedProvider} from 'react-apollo/test-utils';
import {MemoryRouter} from 'react-router-dom';
import User, {USER_QUERY} from '../User';

const renderComponent = (match, mocks) => {
  return renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <User match={match} />
      </MemoryRouter>
    </MockedProvider>
  );
};

describe('User', () => {
  describe('when the user is loading', () => {
    it('displays loading indicator', () => {
      const component = renderComponent({params: {id: 123}}, [
        {request: {query: USER_QUERY}, result: {data: {users: []}}},
      ]);

      expect(component.toJSON().children.join('')).toEqual(
        'Grabbing favorite foods for 123...'
      );
    });
  });

  // describe('when a user is returned', () => {
  //   it('renders those users in a list', async () => {
  //     const mocks = [
  //       {
  //         request: {
  //           query: USER_QUERY,
  //         },
  //         result: {
  //           data: {
  //             user: {id: 123, name: 'Mark', favoriteFoods: []},
  //           },
  //         },
  //       },
  //     ];
  //
  //     const component = renderComponent({params: {id: 123}}, mocks);
  //
  //     await wait(0);
  //
  //     console.log(component.toJSON());
  //     expect(header.children.join('')).toEqual("Mark's favorite foods:");
  //
  //     // expect(userListItems).toHaveLength(2);
  //     // expect(userListItems[0].props).toEqual({
  //     //   user: {
  //     //     id: 1,
  //     //     name: 'Mark',
  //     //   },
  //     // });
  //     // expect(userListItems[1].props).toEqual({
  //     //   user: {
  //     //     id: 2,
  //     //     name: 'Craig',
  //     //   },
  //     // });
  //   });
  // });

  describe('there is a network error', () => {
    it('displays an error message', async () => {
      const component = renderComponent({params: {id: 123}}, [
        {
          request: {query: USER_QUERY},
          error: new Error('I broke'),
        },
      ]);

      await wait(0);

      expect(component.toJSON().children).toContain('An error occurred.');
    });
  });

  describe('there is a GraphQL error', () => {
    it('displays an error message', async () => {
      const component = renderComponent({params: {id: 123}}, [
        {
          request: {query: USER_QUERY},
          result: {
            errors: [{message: 'Whoops!'}],
          },
        },
      ]);

      await wait(0);

      expect(component.toJSON().children).toContain('An error occurred.');
    });
  });
});
