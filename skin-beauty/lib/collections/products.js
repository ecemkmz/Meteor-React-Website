import SimpleSchema from 'simpl-schema';

 export const Products = new Mongo.Collection('products');

ProductSchema = new SimpleSchema({
  name: String,
  brand: String,
  category: String,
  imageLink: String,
  skinType: String,
  ingredients: String
});

Products.attachSchema(ProductSchema);