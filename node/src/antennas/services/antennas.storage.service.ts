// This service is responsible for reading the excel file and processing the data
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import { CreateGonioDto } from '../dto/create-gonio.dto';
// import { UpdateGonioDto } from '../dto/update-gonio.dto';
import { readExcelFile, readRowsFromExcelSheet, readExcelSheet } from '../../utils/excel';
import { processAntennaRowsSheetData, processAntennaPatternRowsSheetData } from './utils';
// Schema
import { Antenna, AntennaDocument } from '../schemas/antennas.schema';

@Injectable()
export class AntennasStorageService {
    constructor(
        @InjectModel(Antenna.name) private antennasModule: Model<AntennaDocument>, //
    ) {}

    async readExcelFile(sheetNumber: number) {
        const fileName = 'BASE_DATA.xlsx';
        const filePath = `${__dirname}/../../data/${fileName}`;
        const content = await readExcelFile(filePath);
        const rows = readRowsFromExcelSheet(content, sheetNumber);
        const antennasFromSheet = processAntennaRowsSheetData(rows);
        return antennasFromSheet;
    }

    async processAntennaPatterns() {
        const sheetNumber = 2;
        const rowStartIndex = 1;
        const rows = await readExcelSheet({ sheetNumber, rowStartIndex });
        const patternsFromSheet = processAntennaPatternRowsSheetData(rows);
        const antennas = [];
        for (const antennaModelName in patternsFromSheet) {
            const antennaPattern = [];
            // Vertical
            for (const pattern of patternsFromSheet[antennaModelName][`${antennaModelName}V`].value) {
                const valueNumber = Number(pattern.value);
                antennaPattern.push({ angle: pattern.angle, verticalValue: valueNumber });
            }

            // Horizontal
            for (const pattern of patternsFromSheet[antennaModelName][`${antennaModelName}H`].value) {
                const valueNumber = Number(pattern.value);
                for (const antennaPatternItem of antennaPattern) {
                    if (antennaPatternItem.angle === pattern.angle) {
                        antennaPatternItem.horizontalValue = valueNumber;
                    }
                }
            }

            const filter = { model: antennaModelName };
            const update = { pattern: antennaPattern };

            const antenna = await this.antennasModule.findOneAndUpdate(filter, update);
            antennas.push(antenna);
        }

        return antennas;
    }
}
