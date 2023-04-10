/**
 * @file Pattern Schema
 * @description Pattern Schema:
 * This file contains the schema for the Pattern collection.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatternDocument = Pattern & Document;

@Schema()
export class Point {
    @Prop({ required: true, unique: true })
    angle: number;

    @Prop({ required: true, unique: true, default: null })
    verticalValue: number;

    @Prop({ required: true, unique: true, default: null })
    horizontalValue: number;
}

@Schema()
export class Pattern {
    @Prop({ required: true, unique: true, trim: true })
    antenna: string;

    @Prop()
    pattern: Point[];
}

export const PatternSchema = SchemaFactory.createForClass(Pattern);
