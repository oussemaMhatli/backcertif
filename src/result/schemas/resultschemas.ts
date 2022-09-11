import { Schema } from 'mongoose';

export const ResSchemas = new Schema({
  name: String,
  email: String,
  postalcode: Number,
  password: String,
  score: Number,
  categori: String,
  level: String,
  activationcode: String,
  registrationdate: { type: Date, default: Date.now() },
  examDate: Date,
  userID: String,
  Quesnumber: Number,
  wrongques: Number,
  emptyques: Number,
  correct:Number,

});
