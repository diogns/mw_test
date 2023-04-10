import { getCellValue } from '../utils/excel';

// libre.convertAsync = util.promisify(libre.convert);

/**
 * This function assigns the values from the rows to the array of AntennaBase object
 * @param {Array} rows : Array of rows from the sheet
 * @returns {Array} : Array of AntennaBase
 */
export const processRowsSheetData = (rows: []): any => {
    const rowssFromSheet = rows.map((row): any => {
        return {
            subBand: getCellValue(row, 1),
            chanel: getCellValue(row, 2),
            delivery: +getCellValue(row, 3),
            return: +getCellValue(row, 4),
            band: getCellValue(row, 5),
            emission: getCellValue(row, 6),
            capacity: getCellValue(row, 7),
        };
    });
    // Delete empty values
    return rowssFromSheet.filter((rows) => rows.return !== null && rows.return !== '');
};
