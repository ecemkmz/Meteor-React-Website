
import SimpleSchema from "simpl-schema";

Brands = new Mongo.Collection("brands");

BrandSchema = new SimpleSchema({
  title : String,
});

Brands.attachSchema(BrandSchema);