import React from 'react';
import renderer from 'react-test-renderer';
import {MockedProvider} from 'react-apollo/test-utils';
import AddFavoriteFoodToUser from '../AddFavoriteFoodToUser';

const renderComponent = (userId, updateWrapper, mocks) =>
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddFavoriteFoodToUser userId={userId} updateWrapper={updateWrapper} />
    </MockedProvider>
  );

describe('AddFavoriteFoodToUser', () => {
  describe('when the user adds a new favorite food', () => {
    it('Submits the mutation and renders success', async () => {
      const newFoodName = 'Delicious Food';
      const newEatingFrequency = 'DAILY';
      const userId = 123;
      const mocks = [
        {
          request: {
            query: AddFavoriteFoodToUser.mutation,
            variables: {
              userId,
              name: newFoodName,
              eatingFrequency: newEatingFrequency,
            },
          },
          result: {
            data: {
              addFavoriteFood: {
                id: 456,
                foodItem: {
                  id: 789,
                  name: newFoodName,
                },
                eatingFrequency: newEatingFrequency,
              },
            },
          },
        },
      ];

      const updateSpy = jest.fn();
      const updateWrapper = () => updateSpy();

      const component = renderComponent(userId, updateWrapper, mocks);

      component.root.findByType('input').props.onChange({
        target: {value: newFoodName},
      });

      component.root.findByType('select').props.onChange({
        target: {value: newEatingFrequency},
      });

      const formResetSpy = jest.fn();
      const formPreventDefaultSpy = jest.fn();
      component.root.findByType('form').props.onSubmit({
        preventDefault: formPreventDefaultSpy,
        target: {reset: formResetSpy},
      });

      expect(formPreventDefaultSpy).toHaveBeenCalled();
      expect(updateSpy).toHaveBeenCalled();
      expect(
        component.root.find(el => el.props.className === 'success-message')
          .children
      ).toContain('You did it!');
      expect(formResetSpy).toHaveBeenCalled();
    });
  });
});
