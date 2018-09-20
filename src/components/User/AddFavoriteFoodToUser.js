import React from 'react';
import {Mutation} from 'react-apollo';
import USER_QUERY from './USER_QUERY';
import ADD_FAVORITE_FOOD_MUTATION from './ADD_FAVORITE_FOOD_MUTATION';

const updateFavoriteFoodList = userId => (cache, {data: {addFavoriteFood}}) => {
  const {user} = cache.readQuery({query: USER_QUERY, variables: {id: userId}});

  cache.writeQuery({
    query: USER_QUERY,
    data: {
      user: {
        ...user,
        favoriteFoods: [...user.favoriteFoods, addFavoriteFood],
      },
    },
  });
};

const AddFavoriteFoodToUser = ({userId}) => (
  <Mutation
    mutation={ADD_FAVORITE_FOOD_MUTATION}
    update={(cache, data) => updateFavoriteFoodList(userId)(cache, data)}
  >
    {addFavoriteFood => (
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
        <input
          id="name"
          required
          ref={e => (this.name = e)}
          placeholder="Food Name"
        />
        <select
          id="eatingFrequency"
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
    )}
  </Mutation>
);

export default AddFavoriteFoodToUser;
