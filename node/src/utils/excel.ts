import Excel from 'exceljs';
import { Workbook } from 'exceljs';

/**
 * This function returns the value of a cell in a row
 * @param {Excel.Row} row from sheet
 * @param {number} cellIndex : Number of the cell in the row
 * @returns {string} : Value of the cell
 */
export const getCellValue = (row: Excel.Row, cellIndex: number) => {
    const cell = row.getCell(cellIndex);
    return cell.value ? cell.value.toString() : '';
};

/**
 * This function reads an excel file and returns the workbook with all the sheets
 * @param {string} filePath: Path to the excel file, including the file name
 * @returns {Promise<Excel.Workbook>} : Excel workbook
 */
export const readExcelFile = async (filePath: string) => {
    const workbook = new Workbook();
    const content = await workbook.xlsx.readFile(filePath);
    return content;
};

/**
 * This function reads the rows from a sheet in an excel file
 * @param {object} workbookContent : Data from the excel file
 * @param {number} sheetNumber : Number of the sheet to read
 * @param {number} rowStartIndex : Index of the row to start reading
 * @param {number} numberOfRows : Number of rows to read
 * @returns : The rows read from the sheet
 */
export const readRowsFromExcelSheet = (workbookContent: any, sheetNumber: number, rowStartIndex = 2, numberOfRows = 0) => {
    const worksheet = workbookContent.worksheets[sheetNumber];
    if (numberOfRows === 0) {
        numberOfRows = worksheet.actualRowCount;
    }
    const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];
    return rows;
};

export const readExcelSheet = async ({
    fileName = 'BASE_DATA.xlsx', //
    sheetNumber = 0,
    rowStartIndex = 2,
    numberOfRows = 0,
}) => {
    const filePath = `${__dirname}/../data/${fileName}`;

    // Read the excel file
    const workbook = new Workbook();
    const workbookContent = await workbook.xlsx.readFile(filePath);

    // Read the rows from the sheet
    const worksheet = workbookContent.worksheets[sheetNumber];
    if (numberOfRows === 0) {
        numberOfRows = worksheet.rowCount;
    }

    // Get rows from the sheet
    const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];
    return rows;
};
