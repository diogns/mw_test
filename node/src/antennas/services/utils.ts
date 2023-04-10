import { AntennaBase } from '../types';
import { getCellValue } from '../../utils/excel';

/**
 * This function assigns the values from the rows to the array of AntennaBase object
 * @param {Array} rows : Array of rows from the sheet
 * @returns {Array} : Array of AntennaBase
 */
export const processAntennaRowsSheetData = (rows: []): AntennaBase[] => {
    const antennasFromSheet = rows.map((row): AntennaBase => {
        return {
            model: getCellValue(row, 1),
            diameter: +getCellValue(row, 2) ? +getCellValue(row, 2) : null,
            gain: +getCellValue(row, 3) ? +getCellValue(row, 3) : null,
            brand: getCellValue(row, 4),
            homologation: getCellValue(row, 5),
            type: getCellValue(row, 6),
            weight: +getCellValue(row, 7) ? +getCellValue(row, 7) : null,
        };
    });
    // Delete empty values
    return antennasFromSheet.filter((antenna) => antenna.model !== null && antenna.model !== '');
};

export const processAntennaPatternRowsSheetData = (rows: any[]): any => {
    const antennaHeader = rows.shift();

    const antennaFiltered = antennaHeader.values.filter((element: any) => element !== 'ANGULO' && element !== null);
    const namesOfAntennas = [];
    const dataWithNameAndPoints = {};
    for (let index = 0; index < antennaFiltered.length; index++) {
        const antennaName = antennaFiltered[index];
        const nameOnly = antennaName.slice(0, -1);
        if (!namesOfAntennas.includes(nameOnly)) {
            namesOfAntennas.push(nameOnly);
            dataWithNameAndPoints[nameOnly] = {};
            dataWithNameAndPoints[nameOnly][antennaName] = {
                index: index + 1, // +1 because the first column is the angle
                value: [],
            };
        } else {
            dataWithNameAndPoints[nameOnly][antennaName] = {
                index: index + 1, // +1 because the first column is the angle
                value: [],
            };
        }
    }

    // Asociate the values to the antennas
    for (const row of rows) {
        const values = row.values.slice(1, row.values.length - 1); // Delete the first element of the array because is an empty value
        const angle = values[0];
        for (const name of namesOfAntennas) {
            const antenna = dataWithNameAndPoints[name];
            for (const antennaNameHV in antenna) {
                const antennaData = antenna[antennaNameHV];
                antennaData.value.push({
                    angle: angle,
                    value: row.values[antennaData.index],
                });
            }
        }
    }
    // console.log('dataWithNameAndPoints', dataWithNameAndPoints);
    // const antennasFromSheet = [];

    // for (const name of namesOfAntennas) {
    //     const antenna = dataWithNameAndPoints[name];
    //     for (const antennaNameHV in antenna) {
    //         console.log('antennaNameHV', antennaNameHV, antenna[antennaNameHV].value.length);
    //     }
    // }
    // const antennasFromSheet = rows.map((row, index: number): any => {
    //     const values = row.values.slice(1, row.values.length - 1); // Delete the first element of the array because is an empty value
    //     console.log('row--->', index, values);
    //     return {
    //         model: getCellValue(row, 1),
    //         diameter: +getCellValue(row, 2) ? +getCellValue(row, 2) : null,
    //         gain: +getCellValue(row, 3) ? +getCellValue(row, 3) : null,
    //         brand: getCellValue(row, 4),
    //         homologation: getCellValue(row, 5),
    //         type: getCellValue(row, 6),
    //         weight: +getCellValue(row, 7) ? +getCellValue(row, 7) : null,
    //     };
    // });
    // Delete empty values
    return dataWithNameAndPoints;
};
