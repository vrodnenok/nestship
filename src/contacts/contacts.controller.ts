import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Get()
    getAll(){
        return this.contactsService.findAll();
    }

    @Get(':id')
    getOne(@Param() params): string{
        return 'Get one with Id: '+ params.id;
    }

    @Post()
    create(@Body() body){
        return this.contactsService.create(body);
    }

    @Delete()
    remove(){

    }

    @Put()
    update(){

    }
}
