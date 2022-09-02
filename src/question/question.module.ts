import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { MongooseModule } from '@nestjs/mongoose';

import { QuestionController } from './question.controller';
import { QuestionSchemas } from './schemas/question.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'question', schema: QuestionSchemas }]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
