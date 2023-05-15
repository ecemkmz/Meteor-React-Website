import SimpleSchema from "simpl-schema";

BlogTexts = new Mongo.Collection("blogTexts");

BlogTextSchema = new SimpleSchema({
  dataId: String,
  title : String,
  content:String,
  detailedContent:String,
  image:String
});

BlogTexts.attachSchema(BlogTextSchema);