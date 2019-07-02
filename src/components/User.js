import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from 'react-relay';
import relayEnvironment from '../utilities/relayEnvironment';
import FavoriteFoodList from './FavoriteFoodList';

const USER_QUERY = graphql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
      name
      ...FavoriteFoodList_user
    }
  }
`;

const userRender = ({error, props}) => {
  if (error) return <div>An error occurred.</div>;
  if (!props) {
    return (
      <h2>
        Grabbing favorite foods for {'{'}userId{'}'}...
      </h2>
    );
  }

  return (
    <React.Fragment>
      <h2>
        {props.user.name}
        &#39;s favorite foods:
      </h2>
      <FavoriteFoodList user={props.user} />
    </React.Fragment>
  );
};

const User = ({userId}) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={USER_QUERY}
    variables={{id: userId}}
    render={userRender}
  />
);

export default User;
