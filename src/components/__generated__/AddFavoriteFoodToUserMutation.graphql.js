/**
 * @flow
 * @relayHash f5b5284165a2e7f340495ec450433e18
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
    +id: string,
    +foodItem: {|
      +id: string,
      +name: string,
    |},
    +eatingFrequency: EatingFrequency,
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
    id
    foodItem {
      id
      name
    }
    eatingFrequency
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
    "text": "mutation AddFavoriteFoodToUserMutation(\n  $userId: ID!\n  $name: String!\n  $eatingFrequency: EatingFrequency!\n) {\n  addFavoriteFood(userId: $userId, name: $name, eatingFrequency: $eatingFrequency) {\n    id\n    foodItem {\n      id\n      name\n    }\n    eatingFrequency\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3afb388ff92a4a326e5d227cd13ed2da';
module.exports = node;
