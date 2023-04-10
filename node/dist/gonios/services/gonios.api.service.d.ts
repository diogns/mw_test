/// <reference types="mongoose-paginate" />
import { CreateGonioDto } from '../dto/create-gonio.dto';
import { UpdateGonioDto } from '../dto/update-gonio.dto';
import { Gonio, GonioDocument } from '../schemas/gonio.schema';
import { Model } from 'mongoose';
export declare class GoniosApiService {
    private gonioModule;
    constructor(gonioModule: Model<GonioDocument>);
    create(createGonioDto: CreateGonioDto): Promise<Gonio & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(query: any): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateGonioDto: UpdateGonioDto): string;
    remove(id: number): string;
}
