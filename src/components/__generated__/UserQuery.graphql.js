/**
 * @flow
 * @relayHash 59c50c5401033dfa488a9fb3916b88f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoriteFoodList_user$ref = any;
export type UserQueryVariables = {|
  id: string
|};
export type UserQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: string,
    +$fragmentRefs: FavoriteFoodList_user$ref,
  |}
|};
export type UserQuery = {|
  variables: UserQueryVariables,
  response: UserQueryResponse,
|};
*/


/*
query UserQuery(
  $id: ID!
) {
  user(id: $id) {
    id
    name
    ...FavoriteFoodList_user
  }
}

fragment FavoriteFoodList_user on User {
  favoriteFoods {
    ...FavoriteFoodItem_favoriteFoodItem
    id
  }
}

fragment FavoriteFoodItem_favoriteFoodItem on FavoriteFoodItem {
  id
  foodItem {
    id
    name
  }
  eatingFrequency
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "FavoriteFoodList_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "favoriteFoods",
            "storageKey": null,
            "args": null,
            "concreteType": "FavoriteFoodItem",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "foodItem",
                "storageKey": null,
                "args": null,
                "concreteType": "FoodItem",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "eatingFrequency",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserQuery",
    "id": null,
    "text": "query UserQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    ...FavoriteFoodList_user\n  }\n}\n\nfragment FavoriteFoodList_user on User {\n  favoriteFoods {\n    ...FavoriteFoodItem_favoriteFoodItem\n    id\n  }\n}\n\nfragment FavoriteFoodItem_favoriteFoodItem on FavoriteFoodItem {\n  id\n  foodItem {\n    id\n    name\n  }\n  eatingFrequency\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92e61edb23ac7fb3068b47ae2d91226b';
module.exports = node;
