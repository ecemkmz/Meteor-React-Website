import {SkinTypeQuestions} from "../../../lib/collections/skinTypeQuestions"
Meteor.publish('skinTypeQuestions', function () {
    return SkinTypeQuestions.find({});
  });