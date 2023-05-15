import SimpleSchema from 'simpl-schema';
import Mongo from 'meteor/mongo';

Products = new Mongo.Collection('products');

ProductSchema = new SimpleSchema({
  name: String,
  brand: String,
  category: String,
  image_link: String,
  skin_type: String
});

Products.attachSchema(ProductSchema);