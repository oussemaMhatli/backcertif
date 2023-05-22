import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from './model/resultModel';
import {exec} from "child_process";

@Injectable()
export class ResultService {
  constructor(
    @InjectModel('Result')
    private readonly result: Model<Result>,
  ) {}

  async createC(res: Result): Promise<any> {
    return await new this.result({
      ...res,
      createdAt: new Date(),
    }).save();
  }
  async findAllC(): Promise<Result[]> {
    return await this.result.find().sort({ date: 'ascending' }).exec();
  }
  async findOne(id: string): Promise<any> {
    return await this.result.findById(id).exec();
  }
  async findbyuser(id: string): Promise<any> {
    return this.result.find({userID:id}).exec();
  }
  async findcat(cat: string): Promise<any> {
    return this.result.find({ categori: cat }).exec();
  }
}
