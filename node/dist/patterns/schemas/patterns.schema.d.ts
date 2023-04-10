/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type PatternDocument = Pattern & Document;
export declare class Point {
    angle: number;
    verticalValue: number;
    horizontalValue: number;
}
export declare class Pattern {
    antenna: string;
    pattern: Point[];
}
export declare const PatternSchema: import("mongoose").Schema<Pattern, import("mongoose").Model<Pattern, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pattern>;
