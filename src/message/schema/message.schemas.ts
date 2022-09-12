import { Schema } from 'mongoose';

export const MessagesSchema = new Schema({
  idU: String,
  messages: [
    {
      msg: String,
      ids: String,
      dates: { type: Date, default: Date.now() },
      visible: { type: Boolean, default: true },
      vis: { type: Boolean, default: true },
    },
  ],

  date: { type: Date, default: Date.now() },
});
