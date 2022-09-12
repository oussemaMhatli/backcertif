import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './model/QuestionModel';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('question')
    private readonly QModel: Model<Question>,
  ) {}

  async createC(Ques: Question): Promise<any> {
    console.log('aaaaaaaaa', Ques);
    return await new this.QModel({
      ...Ques,
      createdAt: new Date(),
    }).save();
  }
  async findOne(id: string): Promise<any> {
    return await this.QModel.findById(id).exec();
  }
  async findAllC(): Promise<Question[]> {
    return await this.QModel.find().sort({ date: 'ascending' }).exec();
  }
  async count(): Promise<number> {
    return await this.QModel.find().count().exec();
  }
  async dlete(id): Promise<Question> {
    return await this.QModel.findByIdAndDelete(id).exec();
  }
  async updateCat(id: string, update: Question): Promise<any> {
    return await this.QModel.findByIdAndUpdate(id, update).exec();
  }
  async findQByN(cat: string, lev: number): Promise<any> {
    return this.QModel.find({ categorie: cat, level: lev }).exec();
  }
  async findcat(cat: string): Promise<any> {
    return this.QModel.find({ categorie: cat }).exec();
  }
}
