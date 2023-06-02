import { SkinTypes } from "../../../lib/collections/skinTypes";

Meteor.publish('skinTypes', function () {
    return SkinTypes.find({});
  });