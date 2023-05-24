import SimpleSchema from 'simpl-schema';

 export const SkinTypeQuestions = new Mongo.Collection('skinTypeQuestions');

SkinTypeQuestionSchema = new SimpleSchema({
  key: String,
  text: String,
  choices: {
    type: Array,
  },
  "choices.$": {
    type: String,
   
  },
  correctAnswer: Number

  
});

SkinTypeQuestions.attachSchema(SkinTypeQuestionSchema);