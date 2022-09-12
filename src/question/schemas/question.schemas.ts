import { Schema } from 'mongoose';

export const QuestionSchemas = new Schema({
  questionText: String,
  img: String,
  zip: String,
  categorie: String,
  level: String,
  type: Number,
  choices: [],
  correct: String,
});
