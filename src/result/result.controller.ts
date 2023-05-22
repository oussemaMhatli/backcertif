import {Body, Controller, Get, Param, Post} from '@nestjs/common';

import { ResultService } from './result.service';
import { Result } from './model/resultModel';

@Controller('result')
export class ResultController {
  constructor(private readonly RS: ResultService) {}

  @Post()
  async create(@Body() res: Result) {
    const generatedId = await this.RS.createC(res);

    return generatedId;
  }
  @Get()
  async findAllF(): Promise<Result[]> {
    return await this.RS.findAllC();
  }
  @Get('one/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.RS.findOne(id);
  }
  @Get('oneuser/:id')
  async findOneuser(@Param('id') id: string): Promise<any> {
    return await this.RS.findbyuser(id);
  }
  @Get('getByCat/:cat')
  async findByCat(@Param('cat') cat: string): Promise<any> {
    return await this.RS.findcat(cat);
  }
}
