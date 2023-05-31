import SimpleSchema from "simpl-schema";

export const TestsContainer = new Mongo.Collection("testsContainer");

TestContainerSchema = new SimpleSchema({
  dataId: String,
  title: String,
  content: String,
  image: String,
});

TestsContainer.attachSchema(TestContainerSchema);
