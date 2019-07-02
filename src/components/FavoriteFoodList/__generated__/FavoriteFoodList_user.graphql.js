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
  +favoriteFoods: ?$ReadOnlyArray<?{|
    +$fragmentRefs: FavoriteFoodItem_favoriteFoodItem$ref
  |}>,
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
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "favoriteFoods",
      "storageKey": null,
      "args": null,
      "concreteType": "FavoriteFoodItem",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "FavoriteFoodItem_favoriteFoodItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22e7f53155933f49df06f99cf1ff21da';
module.exports = node;
