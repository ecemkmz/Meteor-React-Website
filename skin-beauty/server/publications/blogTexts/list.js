import {BlogTexts} from "../../../lib/collections/blogTexts"
Meteor.publish('blogTexts', function () {
    return BlogTexts.find({});
  });