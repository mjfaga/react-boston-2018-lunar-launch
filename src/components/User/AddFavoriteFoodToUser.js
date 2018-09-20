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

class AddFavoriteFoodToUser extends React.Component {
  state = {};

  setInput(val) {
    this.setState({
      ...this.state,
      input: val,
      submitted: false,
      error: null,
    });
  }

  setSelect(val) {
    this.setState({
      ...this.state,
      select: val,
      submitted: false,
      error: null,
    });
  }

  render() {
    const {userId} = this.props;

    return (
      <Mutation
        mutation={ADD_FAVORITE_FOOD_MUTATION}
        update={(cache, data) => updateFavoriteFoodList(userId)(cache, data)}
      >
        {addFavoriteFood => (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!this.state.input || !this.state.select) {
                this.setState({
                  ...this.state,
                  error: 'Food Name and Eating Frequency are required!',
                });
                return;
              }
              addFavoriteFood({
                variables: {
                  userId: userId,
                  name: this.state.input,
                  eatingFrequency: this.state.select,
                },
              });
              e.target.reset();
              this.setState({submitted: true});
            }}
          >
            <input
              id="name"
              placeholder="Food Name"
              onChange={e => this.setInput(e.target.value)}
            />

            <select
              id="eatingFrequency"
              defaultValue=""
              onChange={e => this.setSelect(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Eating Frequency...
              </option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
            </select>
            <button type="submit">Add Favorite Food</button>
            {this.state.error ? (
              <div className="error-message ">{this.state.error}</div>
            ) : null}
            {this.state.submitted ? (
              <div className="success-message">You did it!</div>
            ) : null}
          </form>
        )}
      </Mutation>
    );
  }
}

export default AddFavoriteFoodToUser;
