"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRowsSheetData = void 0;
const excel_1 = require("../utils/excel");
const processRowsSheetData = (rows) => {
    const rowssFromSheet = rows.map((row) => {
        return {
            subBand: (0, excel_1.getCellValue)(row, 1),
            chanel: (0, excel_1.getCellValue)(row, 2),
            delivery: +(0, excel_1.getCellValue)(row, 3),
            return: +(0, excel_1.getCellValue)(row, 4),
            band: (0, excel_1.getCellValue)(row, 5),
            emission: (0, excel_1.getCellValue)(row, 6),
            capacity: (0, excel_1.getCellValue)(row, 7),
        };
    });
    return rowssFromSheet.filter((rows) => rows.return !== null && rows.return !== '');
};
exports.processRowsSheetData = processRowsSheetData;
//# sourceMappingURL=utils.js.map