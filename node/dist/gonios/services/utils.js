"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processGonioRowsSheetData = void 0;
const excel_1 = require("../../utils/excel");
const processGonioRowsSheetData = (rows) => {
    const goniosFromSheet = rows.map((row) => {
        return {
            station: (0, excel_1.getCellValue)(row, 1),
            address: (0, excel_1.getCellValue)(row, 2),
            district: (0, excel_1.getCellValue)(row, 3),
            province: (0, excel_1.getCellValue)(row, 4),
            department: (0, excel_1.getCellValue)(row, 5),
            latitudeDegrees: +(0, excel_1.getCellValue)(row, 9),
            latitudeMinutes: +(0, excel_1.getCellValue)(row, 10),
            latitudeSeconds: +(0, excel_1.getCellValue)(row, 11),
            longitudeDegrees: +(0, excel_1.getCellValue)(row, 6),
            longitudeMinutes: +(0, excel_1.getCellValue)(row, 7),
            longitudeSeconds: +(0, excel_1.getCellValue)(row, 8),
            towerHeight: +(0, excel_1.getCellValue)(row, 12),
            buildingHeight: +(0, excel_1.getCellValue)(row, 13),
            seaLevel: +(0, excel_1.getCellValue)(row, 19),
        };
    });
    return goniosFromSheet;
};
exports.processGonioRowsSheetData = processGonioRowsSheetData;
//# sourceMappingURL=utils.js.map