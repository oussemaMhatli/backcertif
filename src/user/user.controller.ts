import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param, Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './model/usermodel';
import { TokenDto } from './dto/tokenDto';
import { Categori } from '../categorie/models/catModel';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Post()
  async create(@Body() user: User) {
    const generatedId = await this.userservice.registre(user);

    return { id: generatedId };
  }
  @Post('/login')
  async sendToken(@Res() res, @Body() tokenDto: TokenDto) {
    const user = await this.userservice.login(tokenDto);
    if (user === null) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'email or password incorrecte',
      });
    }
    return res.status(HttpStatus.OK).json({
      token: user,
    });
  }
  @Get()
  async findAllF(): Promise<Categori[]> {
    return await this.userservice.findAlluser();
  }
  @Delete(':id')
  async deleteApp(@Param('id') id: string) {
    return await this.userservice.delete(id);
  }
  @Put('/up/:id')
  async updateForm(
    @Param('id') id: string,
    @Body() updateCat,
  ): Promise<any> {
    return await this.userservice.updateCat(id, updateCat);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.userservice.findOne(id);
  }
  @Get('/countU')
  async count(): Promise<number> {
    return await this.userservice.count();
  }
  @Get('/countWh')
  async countWh(): Promise<number> {
    return await this.userservice.countwho();
  }
  @Post('/mail')
  async addMessage(@Body() body: any, @Res() res) {
    const message = await this.userservice.addMessage(body.msg, body.rec);
    return res.send(message);
  }
  @Patch(':id')
  async updateValidation(@Param('id') id: string): Promise<User> {
    return this.userservice.updateValidation(id);
  }
  @Patch(':id/:code')
  async updateCode(@Param('id') id: string,@Param('code') code: string  ): Promise<User> {
    return this.userservice.updateCode(id, code);
  }
  @Patch('/exam/:id/:code')
  async updateExamCode(
    @Param('id') id: string,
    @Param('code') code: string,
  ): Promise<User> {
    return this.userservice.updateExamCode(id, code);
  }
}
