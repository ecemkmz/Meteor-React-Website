
import SimpleSchema from "simpl-schema";


export const Brands = new Mongo.Collection("brands");

BrandSchema = new SimpleSchema({
  title : String,
});

Brands.attachSchema(BrandSchema);