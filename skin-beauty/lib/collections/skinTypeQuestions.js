import SimpleSchema from "simpl-schema";

export const SkinTypeQuestions = new Mongo.Collection("skinTypeQuestions");

SkinTypeQuestionSchema = new SimpleSchema({
  testId: {
    type: Number,
  },
  testName: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  questions: {
    type: Array,
  },
  "questions.$": {
    type: Object,
  },
  "questions.$.key": {
    type: String,
  },
  "questions.$.text": {
    type: String,
  },
  "questions.$.choices": {
    type: Array,
  },
  "questions.$.choices.$": {
    type: String,
  },
  "questions.$.correctAnswer": {
    type: Number,
  },
});

SkinTypeQuestions.attachSchema(SkinTypeQuestionSchema);