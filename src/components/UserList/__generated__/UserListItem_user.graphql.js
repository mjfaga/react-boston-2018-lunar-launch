/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserListItem_user$ref: FragmentReference;
declare export opaque type UserListItem_user$fragmentType: UserListItem_user$ref;
export type UserListItem_user = {|
  +id: string,
  +name: string,
  +$refType: UserListItem_user$ref,
|};
export type UserListItem_user$data = UserListItem_user;
export type UserListItem_user$key = {
  +$data?: UserListItem_user$data,
  +$fragmentRefs: UserListItem_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserListItem_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '25c3a82586cade0977b06cb0f0e3ae01';
module.exports = node;
