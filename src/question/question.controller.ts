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
  @Get('/findCAt/:cat')
  async findOneFemail(@Param('cat') cat: string): Promise<any> {
    return this.QService.findQByN(cat);
  }
}
