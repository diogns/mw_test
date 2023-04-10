/// <reference types="mongoose-paginate" />
import { Model } from 'mongoose';
import { CreateAntennaBaseDto } from '../dto/create-antenna.dto';
import { Antenna, AntennaDocument } from '../schemas/antennas.schema';
export declare class AntennasService {
    private antennasModule;
    constructor(antennasModule: Model<AntennaDocument>);
    create(createAntennaDto: CreateAntennaBaseDto): Promise<Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMany(createAntennaDto: CreateAntennaBaseDto[]): Promise<(Omit<import("mongoose").MergeType<AntennaDocument, CreateAntennaBaseDto>, keyof Antenna | keyof import("mongoose").Document<any, any, any>> & Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll(): Promise<(Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AntennaDocument>;
    findOneByName(name: string): import("mongoose").Query<Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AntennaDocument>;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AntennaDocument>;
    datatable(query: any): Promise<any>;
}
