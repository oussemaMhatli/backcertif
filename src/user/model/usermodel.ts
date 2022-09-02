import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  email: string;
  password: string;
  postalcode: number;
  score: number;
  Activationcode: string;
  Examcode: string;
  isEmailConfirmed: boolean;
  RegistrationDate: Date;
  role: number;
  examDate: Date;
  passedExam: boolean;
  img:string;

}
