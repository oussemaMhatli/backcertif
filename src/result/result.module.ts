import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultController } from './result.controller';
import { ResSchemas } from './schemas/resultschemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Result', schema: ResSchemas }]),
  ],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
