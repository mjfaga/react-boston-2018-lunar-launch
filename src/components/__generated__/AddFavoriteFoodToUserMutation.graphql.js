/**
 * @flow
 * @relayHash c9eec6299bed761b7a18bb3755af6586
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EatingFrequency = "DAILY" | "MONTHLY" | "WEEKLY" | "%future added value";
export type AddFavoriteFoodToUserMutationVariables = {|
  userId: string,
  name: string,
  eatingFrequency: EatingFrequency,
|};
export type AddFavoriteFoodToUserMutationResponse = {|
  +addFavoriteFood: ?{|
    +favoriteFoodEdge: ?{|
      +node: ?{|
        +id: string,
        +foodItem: {|
          +id: string,
          +name: string,
        |},
        +eatingFrequency: EatingFrequency,
      |}
    |}
  |}
|};
export type AddFavoriteFoodToUserMutation = {|
  variables: AddFavoriteFoodToUserMutationVariables,
  response: AddFavoriteFoodToUserMutationResponse,
|};
*/


/*
mutation AddFavoriteFoodToUserMutation(
  $userId: ID!
  $name: String!
  $eatingFrequency: EatingFrequency!
) {
  addFavoriteFood(userId: $userId, name: $name, eatingFrequency: $eatingFrequency) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "eatingFrequency",
    "type": "EatingFrequency!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addFavoriteFood",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "eatingFrequency",
        "variableName": "eatingFrequency"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "FavoriteFoodItemResponse",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favoriteFoodEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "FavoriteFoodItemEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "FavoriteFoodItem",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "foodItem",
                "storageKey": null,
                "args": null,
                "concreteType": "FoodItem",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddFavoriteFoodToUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddFavoriteFoodToUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddFavoriteFoodToUserMutation",
    "id": null,
    "text": "mutation AddFavoriteFoodToUserMutation(\n  $userId: ID!\n  $name: String!\n  $eatingFrequency: EatingFrequency!\n) {\n  addFavoriteFood(userId: $userId, name: $name, eatingFrequency: $eatingFrequency) {\n    favoriteFoodEdge {\n      node {\n        id\n        foodItem {\n          id\n          name\n        }\n        eatingFrequency\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce85cd9502fd71580c248d8c98aec0f3';
module.exports = node;
