import SimpleSchema from "simpl-schema";

Category = new Mongo.Collection("category");

CategorySchema = new SimpleSchema({
  category: String,
});

Category.attachSchema(CategorySchema);
