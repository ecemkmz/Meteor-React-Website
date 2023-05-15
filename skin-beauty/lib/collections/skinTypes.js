import SimpleSchema from 'simpl-schema';

SkinTypes = new Mongo.Collection('skinTypes');

SkinTypeSchema = new SimpleSchema({
  title: String
});

SkinTypes.attachSchema(SkinTypeSchema);