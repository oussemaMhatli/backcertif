import { Schema } from 'mongoose';

export const CatSchemas = new Schema({
  name: String,
  img:String,
  desc:String,
});
