import { GonioBase } from '../types';
import { getCellValue } from '../../utils/excel';

/**
 * This function assigns the values from the rows to the array of GonioBase object
 * @param {Array} rows : Array of rows from the sheet
 * @returns {Array} : Array of GonioBase
 */
export const processGonioRowsSheetData = (rows: []): GonioBase[] => {
    const goniosFromSheet = rows.map((row): GonioBase => {
        return {
            station: getCellValue(row, 1),
            address: getCellValue(row, 2),
            district: getCellValue(row, 3),
            province: getCellValue(row, 4),
            department: getCellValue(row, 5),
            latitudeDegrees: +getCellValue(row, 9),
            latitudeMinutes: +getCellValue(row, 10),
            latitudeSeconds: +getCellValue(row, 11),
            longitudeDegrees: +getCellValue(row, 6),
            longitudeMinutes: +getCellValue(row, 7),
            longitudeSeconds: +getCellValue(row, 8),
            towerHeight: +getCellValue(row, 12),
            buildingHeight: +getCellValue(row, 13),
            seaLevel: +getCellValue(row, 19),
        };
    });
    return goniosFromSheet;
};
