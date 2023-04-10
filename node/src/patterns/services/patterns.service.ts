// Third party modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Local modules
import { CreatePatternDto } from '../dto/create-pattern.dto';
import { UpdatePatternDto } from '../dto/update-pattern.dto';

// Schema
import { Pattern, PatternDocument } from '../schemas/patterns.schema';

@Injectable()
export class PatternsService {
    constructor(
        @InjectModel(Pattern.name) private patternsModule: Model<PatternDocument>, //
    ) {}

    create(createPatternDto: CreatePatternDto) {
        return 'This action adds a new pattern';
    }

    async findAll() {
        const list = await this.patternsModule.find({});
        return list;
    }

    findOne(id: number) {
        return `This action returns a #${id} pattern`;
    }

    update(id: number, updatePatternDto: UpdatePatternDto) {
        return `This action updates a #${id} pattern`;
    }

    remove(id: number) {
        return `This action removes a #${id} pattern`;
    }
}
