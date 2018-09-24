import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const ADD_FAVORITE_FOOD_MUTATION = gql`
  mutation AddFavoriteFood(
    $userId: ID!
    $name: String!
    $eatingFrequency: EatingFrequency!
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

class AddFavoriteFoodToUser extends React.Component {
  state = {};

  setInput(val) {
    this.setState({
      input: val,
      submitted: false,
      error: null,
    });
  }

  setSelect(val) {
    this.setState({
      select: val,
      submitted: false,
      error: null,
    });
  }

  setError() {
    this.setState({
      submitted: false,
      error: 'Food Name and Eating Frequency are required!',
    });
  }

  setSubmitted() {
    this.setState({
      input: null,
      select: null,
      error: null,
      submitted: true,
    });
  }

  render() {
    const {userId, update} = this.props;

    return (
      <Mutation mutation={ADD_FAVORITE_FOOD_MUTATION} update={update(userId)}>
        {addFavoriteFood => (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!this.state.input || !this.state.select) {
                this.setError();
                return;
              }
              addFavoriteFood({
                variables: {
                  userId,
                  name: this.state.input,
                  eatingFrequency: this.state.select,
                },
              });
              e.target.reset();
              this.setSubmitted();
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
AddFavoriteFoodToUser.mutation = ADD_FAVORITE_FOOD_MUTATION;

export default AddFavoriteFoodToUser;
