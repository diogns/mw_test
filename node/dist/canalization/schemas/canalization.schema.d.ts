/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type CanalizationDocument = Canalization & Document;
export declare class Canalization {
    subBand: string;
    chanel: string;
    delivery: number;
    return: number;
    band: string;
    emission: string;
    capacity: string;
}
export declare const CanalizationSchema: import("mongoose").Schema<Canalization, import("mongoose").Model<Canalization, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Canalization>;
