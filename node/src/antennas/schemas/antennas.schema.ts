/**
 * @file Antenna Schema
 * @description Antenna Schema:
 * This file contains the schema for the Antenna collection.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AntennaDocument = Antenna & Document;

@Schema()
export class Point {
    @Prop({ required: true, unique: true })
    angle: number;

    @Prop({ default: null })
    verticalValue: number;

    @Prop({ default: null })
    horizontalValue: number;
}

@Schema()
export class Antenna {
    @Prop({ required: true, unique: true, trim: true })
    model: string;

    @Prop({ default: null })
    diameter: number;

    @Prop({ default: null })
    gain: number;

    @Prop({ default: null, trim: true })
    brand: string;

    @Prop({ default: null, trim: true })
    homologation: string;

    @Prop({ default: null, trim: true })
    type: string;

    @Prop({ default: null })
    weight: number;

    @Prop({ default: [] })
    pattern: Point[];
}

export const AntennaSchema = SchemaFactory.createForClass(Antenna);
