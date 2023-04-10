"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAntennaPatternRowsSheetData = exports.processAntennaRowsSheetData = void 0;
const excel_1 = require("../../utils/excel");
const processAntennaRowsSheetData = (rows) => {
    const antennasFromSheet = rows.map((row) => {
        return {
            model: (0, excel_1.getCellValue)(row, 1),
            diameter: +(0, excel_1.getCellValue)(row, 2) ? +(0, excel_1.getCellValue)(row, 2) : null,
            gain: +(0, excel_1.getCellValue)(row, 3) ? +(0, excel_1.getCellValue)(row, 3) : null,
            brand: (0, excel_1.getCellValue)(row, 4),
            homologation: (0, excel_1.getCellValue)(row, 5),
            type: (0, excel_1.getCellValue)(row, 6),
            weight: +(0, excel_1.getCellValue)(row, 7) ? +(0, excel_1.getCellValue)(row, 7) : null,
        };
    });
    return antennasFromSheet.filter((antenna) => antenna.model !== null && antenna.model !== '');
};
exports.processAntennaRowsSheetData = processAntennaRowsSheetData;
const processAntennaPatternRowsSheetData = (rows) => {
    const antennaHeader = rows.shift();
    const antennaFiltered = antennaHeader.values.filter((element) => element !== 'ANGULO' && element !== null);
    const namesOfAntennas = [];
    const dataWithNameAndPoints = {};
    for (let index = 0; index < antennaFiltered.length; index++) {
        const antennaName = antennaFiltered[index];
        const nameOnly = antennaName.slice(0, -1);
        if (!namesOfAntennas.includes(nameOnly)) {
            namesOfAntennas.push(nameOnly);
            dataWithNameAndPoints[nameOnly] = {};
            dataWithNameAndPoints[nameOnly][antennaName] = {
                index: index + 1,
                value: [],
            };
        }
        else {
            dataWithNameAndPoints[nameOnly][antennaName] = {
                index: index + 1,
                value: [],
            };
        }
    }
    for (const row of rows) {
        const values = row.values.slice(1, row.values.length - 1);
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
    return dataWithNameAndPoints;
};
exports.processAntennaPatternRowsSheetData = processAntennaPatternRowsSheetData;
//# sourceMappingURL=utils.js.map