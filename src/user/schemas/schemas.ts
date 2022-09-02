import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  postalcode: Number,
  score: Number,
  Activationcode: String,
  Examcode: String,
  isEmailConfirmed: Boolean,
  RegistrationDate: { type: Date, default: Date.now() },
  role: { type: Number, default: 1 },
  examDate: Date,
  passedExam:  { type: Boolean, default: false },
  img: String,
});
