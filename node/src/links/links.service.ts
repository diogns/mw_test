// Third party modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';

import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

// Schema
import { Link, LinkDocument } from './schemas/links.schema';
import { Gonio, GonioDocument } from '../gonios/schemas/gonio.schema';

import { readExcelFile, readRowsFromExcelSheet, readExcelSheet } from '../utils/excel';
import {
    processLinkRowsSheetData,
    processInitData,
    generateXlsx,
    generateDataReportXlsx,
    generateDataReportDocx,
    generateDocx,
    docxToPdf,
    processLinkUpdateRowsSheetData,
    processUpdateData,
} from './utils';

@Injectable()
export class LinksService {
    constructor(
        @InjectModel(Link.name) private linksModule: Model<LinkDocument>, //
        @InjectModel(Gonio.name) private gonioModule: Model<GonioDocument>, //
    ) {}

    // CRUD
    async create(createLinkDto: CreateLinkDto) {
        const antennaCreated = await this.linksModule.create(createLinkDto);
        return antennaCreated;
    }

    async createMany(createLinkDto: any) {
        const createdLinks = await this.linksModule.insertMany(createLinkDto);
        return createdLinks;
    }

    async findAll() {
        const list = await this.linksModule.find({});
        return list;
    }

    findOne(id: string) {
        return this.linksModule.findById(id);
    }

    remove(id: number) {
        return this.linksModule.deleteOne({ id });
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
        const data = await this.linksModule['dataTable'](query);
        return data;
    }

    async readExcelFile(sheetNumber: number) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await readExcelFile(filePath);
        const rows = readRowsFromExcelSheet(content, sheetNumber);
        const linksFromSheet = processLinkRowsSheetData(rows);
        const dataProccesed = processInitData(linksFromSheet);
        return dataProccesed;
    }

    async readExcelFileUpdate(sheetNumber: number) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await readExcelFile(filePath);
        const rows = readRowsFromExcelSheet(content, sheetNumber);
        const linksFromSheet = processLinkUpdateRowsSheetData(rows);
        console.log(linksFromSheet.slice(0, 10));
        const list = await this.linksModule.find({});
        const dataProccesed = processUpdateData(linksFromSheet, list);
        return 'dataProccesed';
    }

    async getDocById(id: string) {
        const link = await this.linksModule.findById(id);
        const dataReport = generateDataReportDocx([link]);
        const { buf } = generateDocx(dataReport, id);
        return { buf, fileName: `${id}.docx` };
    }

    async getPdfById(id: string) {
        const link = await this.linksModule.findById(id);
        const dataReport = generateDataReportDocx([link]);
        const { path, fileName } = generateDocx(dataReport, id, true);
        const { pdfBuf } = await docxToPdf(path, fileName, true);
        return { buf: pdfBuf, fileName: `${id}.pdf` };
    }
    async getXlsxById(id: string) {
        const link = await this.linksModule.findById(id);
        const gonio = await this.gonioModule.findOne({ station: link.gonio });
        console.log(gonio);
        const dataReport = generateDataReportXlsx(link, gonio);
        const { path, fileName } = generateXlsx(dataReport, dataReport.fileName, true);
        const xlsxBuf = fs.readFileSync(path);

        return { buf: xlsxBuf, fileName: `${fileName}.xlsx` };
    }

    async getDocReport() {
        const link = await this.linksModule.find({});
        //const dataReport = generateDataReportDocx(link.slice(0, 10));
        //console.log(dataReport);
        // const { buf } = generateDocx(dataReport, id);
        return { buf: '', fileName: 'sds.docx' };
    }

    // async getPdfReport() {}

    // async getXlsxReport() {}
}
