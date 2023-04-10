// Third party modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Local modules
import { CreateAntennaBaseDto } from '../dto/create-antenna.dto';

// Schema
import { Antenna, AntennaDocument } from '../schemas/antennas.schema';

@Injectable()
export class AntennasService {
    constructor(
        @InjectModel(Antenna.name) private antennasModule: Model<AntennaDocument>, //
    ) {}

    // CRUD
    async create(createAntennaDto: CreateAntennaBaseDto) {
        const antennaCreated = await this.antennasModule.create(createAntennaDto);
        return antennaCreated;
    }

    async createMany(createAntennaDto: CreateAntennaBaseDto[]) {
        const createdAntennas = await this.antennasModule.insertMany(createAntennaDto);
        return createdAntennas;
    }

    async findAll() {
        const list = await this.antennasModule.find({});
        return list;
    }

    findOne(id: string) {
        return this.antennasModule.findById(id);
    }

    findOneByName(name: string) {
        return this.antennasModule.findOne({ model: name });
    }

    remove(id: number) {
        return this.antennasModule.deleteOne({ id });
    }

    // Additional methods for frontend
    async datatable(query: any) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        const data = await this.antennasModule['dataTable'](query);
        return data;
    }
}
