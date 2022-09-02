import { Schema } from 'mongoose';

export const QuestionSchemas = new Schema({
  questionText: String,
  img: String,
  zip: String,
  reponse1: {
    text: String,
    correct: Boolean,
  },
  reponse2: {
    text: String,
    correct: Boolean,
  },
  reponse3: {
    text: String,
    correct: Boolean,
  },
  reponse4: {
    text: String,
    correct: Boolean,
  },

  categorie: String,
  level: String,
  type: Number,
});
