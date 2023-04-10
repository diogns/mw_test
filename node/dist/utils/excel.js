"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readExcelSheet = exports.readRowsFromExcelSheet = exports.readExcelFile = exports.getCellValue = void 0;
const exceljs_1 = require("exceljs");
const getCellValue = (row, cellIndex) => {
    const cell = row.getCell(cellIndex);
    return cell.value ? cell.value.toString() : '';
};
exports.getCellValue = getCellValue;
const readExcelFile = async (filePath) => {
    const workbook = new exceljs_1.Workbook();
    const content = await workbook.xlsx.readFile(filePath);
    return content;
};
exports.readExcelFile = readExcelFile;
const readRowsFromExcelSheet = (workbookContent, sheetNumber, rowStartIndex = 2, numberOfRows = 0) => {
    var _a;
    const worksheet = workbookContent.worksheets[sheetNumber];
    if (numberOfRows === 0) {
        numberOfRows = worksheet.actualRowCount;
    }
    const rows = (_a = worksheet.getRows(rowStartIndex, numberOfRows)) !== null && _a !== void 0 ? _a : [];
    return rows;
};
exports.readRowsFromExcelSheet = readRowsFromExcelSheet;
const readExcelSheet = async ({ fileName = 'BASE_DATA.xlsx', sheetNumber = 0, rowStartIndex = 2, numberOfRows = 0, }) => {
    var _a;
    const filePath = `${__dirname}/../data/${fileName}`;
    const workbook = new exceljs_1.Workbook();
    const workbookContent = await workbook.xlsx.readFile(filePath);
    const worksheet = workbookContent.worksheets[sheetNumber];
    if (numberOfRows === 0) {
        numberOfRows = worksheet.rowCount;
    }
    const rows = (_a = worksheet.getRows(rowStartIndex, numberOfRows)) !== null && _a !== void 0 ? _a : [];
    return rows;
};
exports.readExcelSheet = readExcelSheet;
//# sourceMappingURL=excel.js.map