/**
 * @flow
 * @relayHash 7f56e6437b838e1c69d0de3f59f017e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListItem_user$ref = any;
export type UserListQueryVariables = {||};
export type UserListQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +$fragmentRefs: UserListItem_user$ref
  |}>
|};
export type UserListQuery = {|
  variables: UserListQueryVariables,
  response: UserListQueryResponse,
|};
*/


/*
query UserListQuery {
  users {
    ...UserListItem_user
    id
  }
}

fragment UserListItem_user on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserListItem_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserListQuery",
    "id": null,
    "text": "query UserListQuery {\n  users {\n    ...UserListItem_user\n    id\n  }\n}\n\nfragment UserListItem_user on User {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '86268ae8fa465f01af8b314e417a8a5b';
module.exports = node;
