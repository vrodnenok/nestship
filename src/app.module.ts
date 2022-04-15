import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [AppService],
})
export class AppModule {}
