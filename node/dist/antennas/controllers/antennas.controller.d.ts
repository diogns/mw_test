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
import { AntennasService } from '../services/antennas.service';
import { AntennasStorageService } from '../services/antennas.storage.service';
import { CreateAntennaBaseDto } from '../dto/create-antenna.dto';
export declare class AntennasController {
    private readonly antennasApiService;
    private readonly antennasStorageService;
    constructor(antennasApiService: AntennasService, antennasStorageService: AntennasStorageService);
    create(createAntennaDto: CreateAntennaBaseDto): Promise<import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): import("mongoose").Query<import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/antennas.schema").AntennaDocument>;
    findOneByName(name: string): import("mongoose").Query<import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/antennas.schema").AntennaDocument>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/antennas.schema").AntennaDocument>;
    datatable(query: any): Promise<any>;
    storageInitData(): Promise<(Omit<import("mongoose").MergeType<import("../schemas/antennas.schema").AntennaDocument, CreateAntennaBaseDto>, keyof import("../schemas/antennas.schema").Antenna | keyof import("mongoose").Document<any, any, any>> & import("../schemas/antennas.schema").Antenna & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    storageInitAdditionalData(): Promise<any[]>;
}
