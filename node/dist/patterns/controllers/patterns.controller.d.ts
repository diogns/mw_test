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
import { PatternsService } from '../services/patterns.service';
import { PatternsStorageService } from '../services/patterns.storage.service';
import { CreatePatternDto } from '../dto/create-pattern.dto';
import { UpdatePatternDto } from '../dto/update-pattern.dto';
export declare class PatternsController {
    private readonly patternsApiService;
    private readonly patternsStorageService;
    constructor(patternsApiService: PatternsService, patternsStorageService: PatternsStorageService);
    create(createPatternDto: CreatePatternDto): string;
    findAll(): Promise<(import("../schemas/patterns.schema").Pattern & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): string;
    update(id: string, updatePatternDto: UpdatePatternDto): string;
    remove(id: string): string;
    storageInitData(): Promise<string>;
}
