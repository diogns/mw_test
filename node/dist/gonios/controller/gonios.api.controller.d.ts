/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate" />
/// <reference types="mongoose" />
import { GoniosApiService } from '../services/gonios.api.service';
import { CreateGonioDto } from '../dto/create-gonio.dto';
import { UpdateGonioDto } from '../dto/update-gonio.dto';
export declare class GoniosApiController {
    private readonly goniosApiService;
    constructor(goniosApiService: GoniosApiService);
    create(createGonioDto: CreateGonioDto): Promise<import("../schemas/gonio.schema").Gonio & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(query: any): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateGonioDto: UpdateGonioDto): string;
    remove(id: string): string;
}
