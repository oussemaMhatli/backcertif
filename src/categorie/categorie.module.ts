import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchemas } from './schemas/cat.schemas';
import { CategorieController } from './categorie.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Categoris', schema: CatSchemas }]),
  ],
  providers: [CategorieService],
  controllers: [CategorieController],
})
export class CategorisModule {}
