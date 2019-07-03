import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {commitMutation} from 'react-relay';
import relayEnvironment from '../utilities/relayEnvironment';

const ADD_FAVORITE_FOOD_MUTATION = graphql`
  mutation AddFavoriteFoodToUserMutation(
    $userId: ID!
    $name: String!
    $eatingFrequency: EatingFrequency!
  ) {
    addFavoriteFood(
      userId: $userId
      name: $name
      eatingFrequency: $eatingFrequency
    ) {
      favoriteFoodEdge {
        node {
          id
          foodItem {
            id
            name
          }
          eatingFrequency
        }
      }
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
    const {userId} = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.input || !this.state.select) {
            this.setError();
            return;
          }
          commitMutation(relayEnvironment, {
            mutation: ADD_FAVORITE_FOOD_MUTATION,
            variables: {
              userId,
              name: this.state.input,
              eatingFrequency: this.state.select,
            },
            configs: [
              {
                type: 'RANGE_ADD',
                parentID: userId,
                connectionInfo: [
                  {
                    key: 'User_favoriteFoods',
                    rangeBehavior: 'append',
                  },
                ],
                edgeName: 'favoriteFoodEdge',
              },
            ],
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
    );
  }
}

export default AddFavoriteFoodToUser;
