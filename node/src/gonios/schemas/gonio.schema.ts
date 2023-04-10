/**
 * @file Gonio Schema
 * @description Gonio Schema:
 * This file contains the schema for the Gonio collection.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GonioDocument = Gonio & Document;

@Schema()
export class Gonio {
    @Prop({ required: true, unique: true, trim: true })
    station: string;

    // ----------- Location Information -----------
    @Prop({ required: true, unique: true, trim: true })
    address: string;

    @Prop({ required: true, trim: true })
    district: string;

    @Prop({ required: true, trim: true })
    province: string;

    @Prop({ required: true, trim: true })
    department: string;

    // ----------- Latitude & Longitude -----------
    // Degrees Format
    // Latitude: 73° 23' 32.04974"
    @Prop({ required: true })
    latitudeDegrees: number;

    @Prop({ required: true })
    latitudeMinutes: number;

    @Prop({ required: true })
    latitudeSeconds: number;

    // Longitude: 13° 39' 26.24204"
    @Prop({ required: true })
    longitudeDegrees: number;

    @Prop({ required: true })
    longitudeMinutes: number;

    @Prop({ required: true })
    longitudeSeconds: number;

    // Decimal Format
    @Prop({ required: true })
    latitudeDecimal: number;

    @Prop({ required: true })
    longitudeDecimal: number;

    // Unknown Format
    @Prop({ required: true })
    latitudeFormat1: number;

    @Prop({ required: true })
    longitudeFormat1: number;

    // ----------- Height Information ------------
    @Prop({ required: true })
    seaLevel: number;

    @Prop({ required: true })
    towerHeight: number;

    @Prop({ required: true })
    buildingHeight: number;

    @Prop({ required: true })
    totalHeight: number;

    @Prop({ default: null })
    googleSeaLevel: number;
}

export const GonioSchema = SchemaFactory.createForClass(Gonio);
