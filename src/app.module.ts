import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorisModule } from './categorie/categorie.module';
import { FileController } from './file/file.controller';
import { QuestionModule } from './question/question.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { ResultController } from './result/result.controller';
import { ResultModule } from './result/result.module';
import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';


@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/certification'),
    CategorisModule,
    QuestionModule,
    ConfigModule.forRoot(),
    MailModule,
    ResultModule,
    MessageModule,
  ],

  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule {}
