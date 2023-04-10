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
import type { Response } from 'express';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinksController {
    private readonly linksService;
    constructor(linksService: LinksService);
    create(createLinkDto: CreateLinkDto): Promise<import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/links.schema").LinkDocument>;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/links.schema").LinkDocument>;
    storageInitBaseData(): Promise<(Omit<any, keyof import("./schemas/links.schema").Link | keyof import("mongoose").Document<any, any, any>> & import("./schemas/links.schema").Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateBasetData(): Promise<string>;
    datatable(query: any): Promise<any>;
    docxById(id: string, res: Response): Promise<void>;
    pdfById(id: string, res: Response): Promise<void>;
    xlsxById(id: string, res: Response): Promise<void>;
    docxReport(): Promise<string>;
}
