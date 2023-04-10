/**
 * @file Canalization Schema
 * @description Canalization Schema:
 * This file contains the schema for the Canalization collection.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CanalizationDocument = Canalization & Document;

@Schema()
export class Canalization {
    @Prop({ default: null, trim: true })
    subBand: string;

    @Prop({ default: null, trim: true })
    chanel: string;

    @Prop({ default: null })
    delivery: number;

    @Prop({ default: null })
    return: number;

    @Prop({ default: null, trim: true })
    band: string;

    @Prop({ default: null, trim: true })
    emission: string;

    @Prop({ default: null, trim: true })
    capacity: string;
}

export const CanalizationSchema = SchemaFactory.createForClass(Canalization);
