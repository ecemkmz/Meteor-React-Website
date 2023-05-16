import SimpleSchema from 'simpl-schema';

export const SkinTypes = new Mongo.Collection('skinTypes');

SkinTypeSchema = new SimpleSchema({
  title: String
});

SkinTypes.attachSchema(SkinTypeSchema);