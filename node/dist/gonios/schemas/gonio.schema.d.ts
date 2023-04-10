/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type GonioDocument = Gonio & Document;
export declare class Gonio {
    station: string;
    address: string;
    district: string;
    province: string;
    department: string;
    latitudeDegrees: number;
    latitudeMinutes: number;
    latitudeSeconds: number;
    longitudeDegrees: number;
    longitudeMinutes: number;
    longitudeSeconds: number;
    latitudeDecimal: number;
    longitudeDecimal: number;
    latitudeFormat1: number;
    longitudeFormat1: number;
    seaLevel: number;
    towerHeight: number;
    buildingHeight: number;
    totalHeight: number;
    googleSeaLevel: number;
}
export declare const GonioSchema: import("mongoose").Schema<Gonio, import("mongoose").Model<Gonio, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Gonio>;
