import SimpleSchema from "simpl-schema";

Categories = new Mongo.Collection("categories");

CategorySchema = new SimpleSchema({
  title : String,
  color : String,
  item : String,
  image : String

});

Categories.attachSchema(CategorySchema);

