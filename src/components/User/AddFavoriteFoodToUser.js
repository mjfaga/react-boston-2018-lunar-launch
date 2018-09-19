import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const ADD_FAVORITE_FOOD_MUTATION = gql`
  mutation AddFavoriteFood(
    $userId: ID!
    $name: String!
    $eatingFrequency: EatingFrequency
  ) {
    addFavoriteFood(
      userId: $userId
      name: $name
      eatingFrequency: $eatingFrequency
    ) {
      id
      foodItem {
        id
        name
      }
      eatingFrequency
    }
  }
`;

const AddFavoriteFoodToUser = ({update, userId}) => (
  <Mutation mutation={ADD_FAVORITE_FOOD_MUTATION} update={update}>
    {(addFavoriteFood, {data, error}) =>
      console.log('data:', data, 'error:', error) || (
        <form
          ref={e => (this.form = e)}
          onSubmit={e => {
            e.preventDefault();
            addFavoriteFood({
              variables: {
                userId: userId,
                name: this.name.value,
                eatingFrequency: this.eatingFrequency.value,
              },
            });
            this.form.reset();
          }}
        >
          <input required ref={e => (this.name = e)} placeholder="Food Name" />
          <select
            ref={e => (this.eatingFrequency = e)}
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Eating Frequency...
            </option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MONTHLY">Monthly</option>
          </select>
          <button type="submit">Add Favorite Food</button>
        </form>
      )
    }
  </Mutation>
);

export default AddFavoriteFoodToUser;
