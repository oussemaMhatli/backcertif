import { Document } from 'mongoose';

export class Categori extends Document {
  name: string;
  img: string;
  desc: string;
}
