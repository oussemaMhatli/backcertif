import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategorieService } from '../categorie/categorie.service';
import { Categori } from '../categorie/models/catModel';
import { QuestionService } from './question.service';
import { Question } from './model/QuestionModel';

@Controller('question')
export class QuestionController {
  constructor(private readonly QService: QuestionService) {}

  @Post()
  async create(@Body() question: Question) {
    const generatedId = await this.QService.createC(question);

    return generatedId;
  }
  @Get()
  async findAllF(): Promise<Question[]> {
    return await this.QService.findAllC();
  }
  @Get('/countQ')
  async count(): Promise<number> {
    return await this.QService.count();
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.QService.findOne(id);
  }
  @Delete(':id')
  async deleteApp(@Param('id') id: string) {
    return await this.QService.dlete(id);
  }
  @Put(':id')
  async updateForm(
    @Param('id') id: string,
    @Body() updateCat,
  ): Promise<Question> {
    return await this.QService.updateCat(id, updateCat);
  }
  @Get('/findCAt/:cat/:lev')
  async findcatlev(@Param('cat') cat: string,@Param('lev') lev: number): Promise<any> {
    return this.QService.findQByN(cat, lev);
  }
  @Get('/findcat/:cat')
  async findOnecat(@Param('cat') cat: string): Promise<any> {
    return this.QService.findcat(cat);
  }
}
