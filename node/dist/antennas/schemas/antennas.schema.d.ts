/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type AntennaDocument = Antenna & Document;
export declare class Point {
    angle: number;
    verticalValue: number;
    horizontalValue: number;
}
export declare class Antenna {
    model: string;
    diameter: number;
    gain: number;
    brand: string;
    homologation: string;
    type: string;
    weight: number;
    pattern: Point[];
}
export declare const AntennaSchema: import("mongoose").Schema<Antenna, import("mongoose").Model<Antenna, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Antenna>;
