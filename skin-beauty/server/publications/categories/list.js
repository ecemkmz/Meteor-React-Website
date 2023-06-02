import { Categories } from "../../../lib/collections/categories";
Meteor.publish('categories', function () {
    return Categories.find({});
  });