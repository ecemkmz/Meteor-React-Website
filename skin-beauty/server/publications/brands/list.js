import { Brands } from "../../../lib/collections/brands";

Meteor.publish('brands', function () {
    return Brands.find({});
  });