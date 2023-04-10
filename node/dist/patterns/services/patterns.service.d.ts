/// <reference types="mongoose-paginate" />
import { Model } from 'mongoose';
import { CreatePatternDto } from '../dto/create-pattern.dto';
import { UpdatePatternDto } from '../dto/update-pattern.dto';
import { Pattern, PatternDocument } from '../schemas/patterns.schema';
export declare class PatternsService {
    private patternsModule;
    constructor(patternsModule: Model<PatternDocument>);
    create(createPatternDto: CreatePatternDto): string;
    findAll(): Promise<(Pattern & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: number): string;
    update(id: number, updatePatternDto: UpdatePatternDto): string;
    remove(id: number): string;
}
