import SimpleSchema from 'simpl-schema';

 export const Products = new Mongo.Collection('products');

ProductSchema = new SimpleSchema({
  name: String,
  brand: String,
  categoryId: String,
  imageLink: String,
  skinType: String
});

Products.attachSchema(ProductSchema);