/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoriteFoodItem_favoriteFoodItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoriteFoodList_user$ref: FragmentReference;
declare export opaque type FavoriteFoodList_user$fragmentType: FavoriteFoodList_user$ref;
export type FavoriteFoodList_user = {|
  +favoriteFoods: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: FavoriteFoodItem_favoriteFoodItem$ref
      |}
    |}>
  |},
  +$refType: FavoriteFoodList_user$ref,
|};
export type FavoriteFoodList_user$data = FavoriteFoodList_user;
export type FavoriteFoodList_user$key = {
  +$data?: FavoriteFoodList_user$data,
  +$fragmentRefs: FavoriteFoodList_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoriteFoodList_user",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "favoriteFoods"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "favoriteFoods",
      "name": "__User_favoriteFoods_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "FavoriteFoodItemConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "FavoriteFoodItemEdge",
          "plural": true,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "FavoriteFoodItem_favoriteFoodItem",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '008fe715fb8190f1958309a06f9cd625';
module.exports = node;
