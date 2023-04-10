"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternsStorageService = void 0;
const common_1 = require("@nestjs/common");
const excel_1 = require("../../utils/excel");
let PatternsStorageService = class PatternsStorageService {
    constructor() {
        this.gonioBase = [];
    }
    async readExcelFile() {
        const fileName = 'GONIO_RNI_TEST.xlsx';
        const filePath = `${__dirname}/../../data/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const sheetNumber = 16;
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const data = rows.map((row) => {
            return {
                name: (0, excel_1.getCellValue)(row, 0),
                angle: (0, excel_1.getCellValue)(row, 1),
                a1: (0, excel_1.getCellValue)(row, 2),
                a2: (0, excel_1.getCellValue)(row, 3),
            };
        });
        console.log(data);
    }
    completeValuesFromBaseData() {
        const goniosWithValues = [];
        for (const gonio of this.gonioBase) {
            const { latitudeDegrees, latitudeMinutes, latitudeSeconds } = gonio;
            const { longitudeDegrees, longitudeMinutes, longitudeSeconds } = gonio;
            const { towerHeight, buildingHeight } = gonio;
            const latitudeDecimal = (latitudeDegrees + latitudeMinutes / 60 + latitudeSeconds / 3600) * -1;
            const longitudeDecimal = (longitudeDegrees + longitudeMinutes / 60 + longitudeSeconds / 3600) * -1;
            const latitudeFormat1 = latitudeDegrees * 3600 + latitudeMinutes * 60 + latitudeSeconds;
            const longitudeFormat1 = longitudeDegrees * 3600 + longitudeMinutes * 60 + longitudeSeconds;
            const totalHeight = towerHeight + buildingHeight;
            const gonioWithValues = Object.assign({ latitudeDecimal,
                longitudeDecimal,
                latitudeFormat1,
                longitudeFormat1,
                totalHeight }, gonio);
            goniosWithValues.push(gonioWithValues);
        }
        return goniosWithValues;
    }
};
PatternsStorageService = __decorate([
    (0, common_1.Injectable)()
], PatternsStorageService);
exports.PatternsStorageService = PatternsStorageService;
//# sourceMappingURL=patterns.storage.service.js.map