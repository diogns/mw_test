"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs = __importStar(require("fs"));
const links_schema_1 = require("./schemas/links.schema");
const gonio_schema_1 = require("../gonios/schemas/gonio.schema");
const excel_1 = require("../utils/excel");
const utils_1 = require("./utils");
let LinksService = class LinksService {
    constructor(linksModule, gonioModule) {
        this.linksModule = linksModule;
        this.gonioModule = gonioModule;
    }
    async create(createLinkDto) {
        const antennaCreated = await this.linksModule.create(createLinkDto);
        return antennaCreated;
    }
    async createMany(createLinkDto) {
        const createdLinks = await this.linksModule.insertMany(createLinkDto);
        return createdLinks;
    }
    async findAll() {
        const list = await this.linksModule.find({});
        return list;
    }
    findOne(id) {
        return this.linksModule.findById(id);
    }
    remove(id) {
        return this.linksModule.deleteOne({ id });
    }
    async datatable(query) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        if (typeof query.columns === 'object') {
            const columnsFixed = [];
            for (const column in query.columns) {
                columnsFixed.push(query.columns[column]);
            }
            query.columns = columnsFixed;
        }
        const data = await this.linksModule['dataTable'](query);
        return data;
    }
    async readExcelFile(sheetNumber) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const linksFromSheet = (0, utils_1.processLinkRowsSheetData)(rows);
        const dataProccesed = (0, utils_1.processInitData)(linksFromSheet);
        return dataProccesed;
    }
    async readExcelFileUpdate(sheetNumber) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const linksFromSheet = (0, utils_1.processLinkUpdateRowsSheetData)(rows);
        console.log(linksFromSheet.slice(0, 10));
        const list = await this.linksModule.find({});
        const dataProccesed = (0, utils_1.processUpdateData)(linksFromSheet, list);
        return 'dataProccesed';
    }
    async getDocById(id) {
        const link = await this.linksModule.findById(id);
        const dataReport = (0, utils_1.generateDataReportDocx)([link]);
        const { buf } = (0, utils_1.generateDocx)(dataReport, id);
        return { buf, fileName: `${id}.docx` };
    }
    async getPdfById(id) {
        const link = await this.linksModule.findById(id);
        const dataReport = (0, utils_1.generateDataReportDocx)([link]);
        const { path, fileName } = (0, utils_1.generateDocx)(dataReport, id, true);
        const { pdfBuf } = await (0, utils_1.docxToPdf)(path, fileName, true);
        return { buf: pdfBuf, fileName: `${id}.pdf` };
    }
    async getXlsxById(id) {
        const link = await this.linksModule.findById(id);
        const gonio = await this.gonioModule.findOne({ station: link.gonio });
        console.log(gonio);
        const dataReport = (0, utils_1.generateDataReportXlsx)(link, gonio);
        const { path, fileName } = (0, utils_1.generateXlsx)(dataReport, dataReport.fileName, true);
        const xlsxBuf = fs.readFileSync(path);
        return { buf: xlsxBuf, fileName: `${fileName}.xlsx` };
    }
    async getDocReport() {
        const link = await this.linksModule.find({});
        return { buf: '', fileName: 'sds.docx' };
    }
};
LinksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(links_schema_1.Link.name)),
    __param(1, (0, mongoose_1.InjectModel)(gonio_schema_1.Gonio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LinksService);
exports.LinksService = LinksService;
//# sourceMappingURL=links.service.js.map