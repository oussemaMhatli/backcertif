import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { Categori } from './models/catModel';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly catService: CategorieService) {}

  @Post()
  async create(@Body() categ: Categori) {
    const generatedId = await this.catService.createC(categ);

    return generatedId;
  }
  @Get()
  async findAllF(): Promise<Categori[]> {
    return await this.catService.findAllC();
  }
  @Delete(':id')
  async deleteApp(@Param('id') id: string) {
    return await this.catService.dlete(id);
  }
  @Put(':id')
  async updateForm(
    @Param('id') id: string,
    @Body() updateCat,
  ): Promise<Categori> {
    return await this.catService.updateCat(id, updateCat);
  }
  @Get('one/:id')
  async findOne(@Param('id') id: string): Promise<Categori[]> {
    return await this.catService.findOne(id);
  }
  @Get('/countC')
  async count(): Promise<number> {
    return await this.catService.count();
  }
}
