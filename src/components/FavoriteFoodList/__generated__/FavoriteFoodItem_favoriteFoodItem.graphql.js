/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type EatingFrequency = "DAILY" | "MONTHLY" | "WEEKLY" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoriteFoodItem_favoriteFoodItem$ref: FragmentReference;
declare export opaque type FavoriteFoodItem_favoriteFoodItem$fragmentType: FavoriteFoodItem_favoriteFoodItem$ref;
export type FavoriteFoodItem_favoriteFoodItem = {|
  +id: string,
  +foodItem: {|
    +id: string,
    +name: string,
  |},
  +eatingFrequency: EatingFrequency,
  +$refType: FavoriteFoodItem_favoriteFoodItem$ref,
|};
export type FavoriteFoodItem_favoriteFoodItem$data = FavoriteFoodItem_favoriteFoodItem;
export type FavoriteFoodItem_favoriteFoodItem$key = {
  +$data?: FavoriteFoodItem_favoriteFoodItem$data,
  +$fragmentRefs: FavoriteFoodItem_favoriteFoodItem$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FavoriteFoodItem_favoriteFoodItem",
  "type": "FavoriteFoodItem",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "foodItem",
      "storageKey": null,
      "args": null,
      "concreteType": "FoodItem",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '863242a1ece1e7dfa3c4711b6cb637c4';
module.exports = node;
