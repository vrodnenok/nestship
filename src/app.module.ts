import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsModule } from './contacts/contacts.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
