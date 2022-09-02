import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Categori } from './models/catModel';

@Injectable()
export class CategorieService {
  constructor(
    @InjectModel('Categoris')
    private readonly catModel: Model<Categori>,
  ) {}

  async createC(categ: Categori): Promise<any> {
    if (!(await this.finOneC(categ.name))) {
      return await new this.catModel({
        ...categ,
        createdAt: new Date(),
      }).save();
    } else {
      throw new UnprocessableEntityException('categorie already exists.');
    }
  }
  async findAllC(): Promise<Categori[]> {
    return await this.catModel.find().sort({ date: 'ascending' }).exec();
  }
  async finOneC(name): Promise<Categori> {
    return this.catModel.findOne({ name }).exec();
  }
  async dlete(id): Promise<Categori> {
    return await this.catModel.findByIdAndDelete(id).exec();
  }
  async updateCat(id: string, update: Categori): Promise<any> {
    return await this.catModel.findByIdAndUpdate(id, update).exec();
  }
  async findOne(id: string): Promise<any> {
    return await this.catModel.findById(id).exec();
  }
  async count(): Promise<number> {
    return await this.catModel.find().count().exec();
  }
}
