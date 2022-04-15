import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact, ContactDocument } from './schemas/contact.schema';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable({})
export class ContactsService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>){}

    async create(createContactDto: CreateContactDto): Promise<Contact>{
        const createdContact = new this.contactModel(createContactDto);
        return createdContact.save();
    };

    async findAll(): Promise<Contact[]>{
        return this.contactModel.find().exec();
    };
}
