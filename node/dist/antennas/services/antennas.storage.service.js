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
exports.AntennasStorageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const excel_1 = require("../../utils/excel");
const utils_1 = require("./utils");
const antennas_schema_1 = require("../schemas/antennas.schema");
let AntennasStorageService = class AntennasStorageService {
    constructor(antennasModule) {
        this.antennasModule = antennasModule;
    }
    async readExcelFile(sheetNumber) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `${__dirname}/../../data/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const antennasFromSheet = (0, utils_1.processAntennaRowsSheetData)(rows);
        return antennasFromSheet;
    }
    async processAntennaPatterns() {
        const sheetNumber = 2;
        const rowStartIndex = 1;
        const rows = await (0, excel_1.readExcelSheet)({ sheetNumber, rowStartIndex });
        const patternsFromSheet = (0, utils_1.processAntennaPatternRowsSheetData)(rows);
        const antennas = [];
        for (const antennaModelName in patternsFromSheet) {
            const antennaPattern = [];
            for (const pattern of patternsFromSheet[antennaModelName][`${antennaModelName}V`].value) {
                const valueNumber = Number(pattern.value);
                antennaPattern.push({ angle: pattern.angle, verticalValue: valueNumber });
            }
            for (const pattern of patternsFromSheet[antennaModelName][`${antennaModelName}H`].value) {
                const valueNumber = Number(pattern.value);
                for (const antennaPatternItem of antennaPattern) {
                    if (antennaPatternItem.angle === pattern.angle) {
                        antennaPatternItem.horizontalValue = valueNumber;
                    }
                }
            }
            const filter = { model: antennaModelName };
            const update = { pattern: antennaPattern };
            const antenna = await this.antennasModule.findOneAndUpdate(filter, update);
            antennas.push(antenna);
        }
        return antennas;
    }
};
AntennasStorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(antennas_schema_1.Antenna.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AntennasStorageService);
exports.AntennasStorageService = AntennasStorageService;
//# sourceMappingURL=antennas.storage.service.js.map