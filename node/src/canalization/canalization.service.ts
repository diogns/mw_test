import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCanalizationDto } from './dto/create-canalization.dto';
import { UpdateCanalizationDto } from './dto/update-canalization.dto';

import { readExcelFile, readRowsFromExcelSheet, readExcelSheet } from '../utils/excel';
import { processRowsSheetData } from './utils';
// Schema
import { Canalization, CanalizationDocument } from './schemas/canalization.schema';

@Injectable()
export class CanalizationService {
    constructor(
        @InjectModel(Canalization.name) private canalizationModule: Model<CanalizationDocument>, //
    ) {}

    async create(createCanalizationDto: CreateCanalizationDto) {
        const antennaCreated = await this.canalizationModule.create(createCanalizationDto);
        return antennaCreated;
    }

    async createMany(createLinkDto: any) {
        const createdLinks = await this.canalizationModule.insertMany(createLinkDto);
        return createdLinks;
    }

    async findAll() {
        const list = await this.canalizationModule.find({});
        return list;
    }

    findOne(id: string) {
        return this.canalizationModule.findById(id);
    }

    update(id: number, updateCanalizationDto: UpdateCanalizationDto) {
        return `This action updates a #${id} canalization`;
    }

    remove(id: number) {
        return this.canalizationModule.deleteOne({ id });
    }
    // Additional methods for frontend
    async datatable(query: any) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        if (typeof query.columns === 'object') {
            const columnsFixed = [];
            for (const column in query.columns) {
                columnsFixed.push(query.columns[column]);
            }
            query.columns = columnsFixed;
        }
        // query['limit'] = 50;
        // console.log(this.linksModule['dataTable']);
        const data = await this.canalizationModule['dataTable'](query);
        return data;
    }

    async readExcelFile(sheetNumber: number) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await readExcelFile(filePath);
        const rows = readRowsFromExcelSheet(content, sheetNumber);
        const linksFromSheet = processRowsSheetData(rows);
        return linksFromSheet;
    }
}
