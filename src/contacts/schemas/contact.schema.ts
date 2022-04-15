import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    @Prop()
    first_mane: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    company_mane: string;

    @Prop()
    is_broker: boolean;

    @Prop()
    is_charterer: boolean;

    @Prop()
    is_owner: boolean;

    @Prop()
    disabled: boolean;

    @Prop()
    comment: string;
} 

export const ContactSchema = SchemaFactory.createForClass(Contact);