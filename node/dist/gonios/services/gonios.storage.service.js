"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoniosStorageService = void 0;
const common_1 = require("@nestjs/common");
const excel_1 = require("../../utils/excel");
const utils_1 = require("./utils");
let GoniosStorageService = class GoniosStorageService {
    constructor() {
        this.gonioBase = [];
    }
    async readExcelFile() {
        const fileName = 'GONIO_RNI_TEST.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await (0, excel_1.readExcelFile)(filePath);
        const sheetNumber = 13;
        const rows = (0, excel_1.readRowsFromExcelSheet)(content, sheetNumber);
        const goniosFromSheet = (0, utils_1.processGonioRowsSheetData)(rows);
        this.gonioBase.push(...goniosFromSheet);
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
GoniosStorageService = __decorate([
    (0, common_1.Injectable)()
], GoniosStorageService);
exports.GoniosStorageService = GoniosStorageService;
//# sourceMappingURL=gonios.storage.service.js.map