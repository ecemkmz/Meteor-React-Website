import { Products } from "../../../lib/collections/products";

Meteor.publish('products', function () {
    return Products.find({});
  });