/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type ItemsDocument = Items & Document;
export declare class Items {
    name: string;
    price: number;
    description: string;
}
export declare const ItemsSchema: import("mongoose").Schema<Items, import("mongoose").Model<Items, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Items>;
