import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageController } from './message.controller';
import {MessagesSchema} from "./schema/message.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'message', schema: MessagesSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
