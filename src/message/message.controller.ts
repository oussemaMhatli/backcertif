import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './model/message';

@Controller('message')
export class MessageController {
  constructor(private readonly msgservice: MessageService) {}
  @Post()
  async create(@Body() message: Message) {
    const generatedId = await this.msgservice.createMsg(message);

    return generatedId;
  }
  @Put('/:id/:msg/:ids')
  async pushmsg(
    @Param('id') id: string,
    @Param('msg') msg: string,
    @Param('ids') ids: string,
  ): Promise<any> {
    return this.msgservice.pushmsg(id, msg, ids);
  }
  @Get('/ver/:idU')
  async verif(@Param('idU') idU: string): Promise<Message> {
    return await this.msgservice.verif(idU);
  }
  @Get('/Umsg/:idU')
  async findByids(@Param('idU') idU: string): Promise<Message> {
    return await this.msgservice.findByuser(idU);
  }
  @Get('/countmsg/:id')
  async count(@Param('id') id: string): Promise<number> {
    return await this.msgservice.findconvbyadmin(id);
  }
  @Get('/msgCU/:id')
  async countmsgforuser(@Param('id') id: string): Promise<number> {
    return await this.msgservice.findconvbyuser(id);
  }
  @Put('/upd')
  async upd(): Promise<any> {
    return this.msgservice.updateVis();
  }
  @Put('/upduser/:id')
  async upda(@Param('id') id: string): Promise<any> {
    return this.msgservice.updatevisbysender(id);
  }
  @Get('/f/:id')
  async find(@Param('id') id: string): Promise<any> {
    return this.msgservice.findByids(id);
  }
  @Put('/u/:id')
  async up(@Param('id') id: string): Promise<any> {
    return this.msgservice.update(id);
  }
}
