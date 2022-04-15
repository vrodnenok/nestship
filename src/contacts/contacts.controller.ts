import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    @Get()
    getAll(): string {
        return 'All contacts';
    }

    @Get(':id')
    getOne(@Param() params): string{
        return 'Get one with Id: '+ params.id;
    }

    @Post()
    create(){

    }

    @Delete()
    remove(){

    }

    @Put()
    update(){
        
    }
}
