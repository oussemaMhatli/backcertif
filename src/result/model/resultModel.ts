import { Document } from 'mongoose';

export class Result extends Document {
  name: string;
  email: string;
  postalcode: number;
  password: string;
  score: number;
  categori: string;
  level: string;
  activationcode: string;
  registrationdate: Date;
  examDate: Date;
  userID: string;
  Quesnumber: number;
  wrongques: number;
  emptyques: number;
  correct:number;

}
