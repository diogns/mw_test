"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanalizationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const excel_1 = require("../utils/excel");
const utils_1 = require("./utils");
const canalization_schema_1 = require("./schemas/canalization.schema");
let CanalizationService = class CanalizationService {
    constructor(canalizationModule) {
        this.canalizationModule = canalizationModule;
    }
    async create(createCanalizationDto) {
        const antennaCreated = await this.canalizationModule.create(createCanalizationDto);
        return antennaCreated;
    }
    async createMany(createLinkDto) {
        const createdLinks = await this.canalizationModule.insertMany(createLinkDto);
        return createdLinks;
    }
    async findAll() {
        const list = await this.canalizationModule.find({});
        return list;
    }
    findOne(id) {
        return this.canalizationModule.findById(id);
    }
    update(id, updateCanalizationDto) {
        return `This action updates a #${id} canalization`;
    }
    remove(id) {
        return this.canalizationModule.deleteOne({ id });
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
        const data = await this.canalizationModule['dataTable'](query);
        return data;
    }
    async readExcelFile(sheetNumber) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const linksFromSheet = (0, utils_1.processRowsSheetData)(rows);
        return linksFromSheet;
    }
};
CanalizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(canalization_schema_1.Canalization.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CanalizationService);
exports.CanalizationService = CanalizationService;
//# sourceMappingURL=canalization.service.js.map