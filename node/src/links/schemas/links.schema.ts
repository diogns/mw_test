/**
 * @file Link Schema
 * @description Link Schema:
 * This file contains the schema for the Link collection.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type LinkDocument = Link & Document;

@Schema()
export class Site {
    @Prop({ default: null, trim: true })
    name: string;

    @Prop({ default: null, trim: true })
    siteId: string;

    // ----------- Location Information -----------
    @Prop({ default: null, trim: true })
    address: string;

    @Prop({ default: null, trim: true })
    district: string;

    @Prop({ default: null, trim: true })
    province: string;

    @Prop({ default: null, trim: true })
    department: string;

    @Prop({ default: null })
    latitude: number;

    @Prop({ default: null })
    longitude: number;

    @Prop({ default: null })
    altitude: number;

    // ----------- Height Information ------------
    @Prop({ default: null })
    towerHeight: number;

    @Prop({ default: null })
    buildingHeight: number;

    // ----------- TX ------------
    @Prop({ default: null })
    tx: string;

    @Prop({ default: null })
    polarization: string;
}

@Schema()
export class RadiantSystem {
    @Prop({ trim: true })
    model: string;

    @Prop({ default: null })
    antennaType: string; // calculation

    @Prop({ default: null })
    brand: string; // calculation

    @Prop({ default: null })
    diameter: number;

    @Prop({ default: null })
    gain: number; // calculation

    @Prop({ default: null })
    altInst: number;

    @Prop({ default: null })
    pire: number; // calculation

    @Prop({ default: null })
    accessibleHeight: number; // calculation
}

@Schema()
export class Equipment {
    @Prop({ trim: true })
    model: string;

    @Prop({ default: null })
    brand: string; // calculation

    @Prop({ default: null })
    frequencyRange: string;

    @Prop({ default: null })
    power: number; // calculation

    @Prop({ default: null })
    emission: string;

    @Prop({ default: null })
    capacity: number; // calculation
}

@Schema()
export class Link {
    @Prop({ default: false })
    isReported: boolean;

    @Prop({ default: null, unique: true, trim: true })
    concatenate: string;

    @Prop({ default: null, trim: true })
    linkName: string;

    @Prop({ default: null, trim: true })
    service: string;

    @Prop({ default: null })
    indicative: string;

    @Prop({ default: null })
    siteA: Site;

    @Prop({ default: null })
    siteB: Site;

    @Prop({ default: null })
    setting: string;

    // ----------- Equipment ------------
    @Prop({ default: null })
    equipment: Equipment;

    // ----------- Radiant System ------------
    @Prop({ default: null })
    radiantSystem: RadiantSystem;

    // ----------- Add Information ------------

    @Prop({ default: null })
    azimuth: number;

    @Prop({ default: null })
    pathlength: number;

    @Prop({ default: null })
    channel: string;

    @Prop({ default: null })
    gonio: string;

    @Prop({ default: null })
    losses: number;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
