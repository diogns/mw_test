/// <reference types="mongoose-paginate" />
/// <reference types="node" />
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto/create-link.dto';
import { Link, LinkDocument } from './schemas/links.schema';
import { GonioDocument } from '../gonios/schemas/gonio.schema';
export declare class LinksService {
    private linksModule;
    private gonioModule;
    constructor(linksModule: Model<LinkDocument>, gonioModule: Model<GonioDocument>);
    create(createLinkDto: CreateLinkDto): Promise<Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMany(createLinkDto: any): Promise<(Omit<any, keyof Link | keyof import("mongoose").Document<any, any, any>> & Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll(): Promise<(Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, LinkDocument>;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, Link & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, LinkDocument>;
    datatable(query: any): Promise<any>;
    readExcelFile(sheetNumber: number): Promise<any>;
    readExcelFileUpdate(sheetNumber: number): Promise<string>;
    getDocById(id: string): Promise<{
        buf: any;
        fileName: string;
    }>;
    getPdfById(id: string): Promise<{
        buf: Buffer;
        fileName: string;
    }>;
    getXlsxById(id: string): Promise<{
        buf: Buffer;
        fileName: string;
    }>;
    getDocReport(): Promise<{
        buf: string;
        fileName: string;
    }>;
}
