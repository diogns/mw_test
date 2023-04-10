/// <reference types="mongoose-paginate" />
import { Model } from 'mongoose';
import { CreateCanalizationDto } from './dto/create-canalization.dto';
import { UpdateCanalizationDto } from './dto/update-canalization.dto';
import { Canalization, CanalizationDocument } from './schemas/canalization.schema';
export declare class CanalizationService {
    private canalizationModule;
    constructor(canalizationModule: Model<CanalizationDocument>);
    create(createCanalizationDto: CreateCanalizationDto): Promise<Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMany(createLinkDto: any): Promise<(Omit<any, keyof Canalization | keyof import("mongoose").Document<any, any, any>> & Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll(): Promise<(Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CanalizationDocument>;
    update(id: number, updateCanalizationDto: UpdateCanalizationDto): string;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CanalizationDocument>;
    datatable(query: any): Promise<any>;
    readExcelFile(sheetNumber: number): Promise<any>;
}
