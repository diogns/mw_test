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
import { CanalizationService } from './canalization.service';
import { CreateCanalizationDto } from './dto/create-canalization.dto';
import { UpdateCanalizationDto } from './dto/update-canalization.dto';
export declare class CanalizationController {
    private readonly canalizationService;
    constructor(canalizationService: CanalizationService);
    create(createCanalizationDto: CreateCanalizationDto): Promise<import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/canalization.schema").CanalizationDocument>;
    update(id: string, updateCanalizationDto: UpdateCanalizationDto): string;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/canalization.schema").CanalizationDocument>;
    datatable(query: any): Promise<any>;
    storageInitBaseData(): Promise<(Omit<any, keyof import("./schemas/canalization.schema").Canalization | keyof import("mongoose").Document<any, any, any>> & import("./schemas/canalization.schema").Canalization & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
