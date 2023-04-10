import { Injectable } from '@nestjs/common';
// import { CreateGonioDto } from '../dto/create-gonio.dto';
// import { UpdateGonioDto } from '../dto/update-gonio.dto';
import { readExcelFile, readRowsFromExcelSheet } from '../../utils/excel';
import { processGonioRowsSheetData } from './utils';
import { GonioBase } from '../types';

@Injectable()
export class GoniosStorageService {
    private readonly gonioBase: GonioBase[] = [];

    async readExcelFile() {
        const fileName = 'GONIO_RNI_TEST.xlsx';
        const filePath = `./client/files/base/${fileName}`;
        const content = await readExcelFile(filePath);
        const sheetNumber = 13;
        const rows = readRowsFromExcelSheet(content, sheetNumber);
        const goniosFromSheet = processGonioRowsSheetData(rows);
        this.gonioBase.push(...goniosFromSheet);
    }

    completeValuesFromBaseData() {
        const goniosWithValues = [];
        for (const gonio of this.gonioBase) {
            const { latitudeDegrees, latitudeMinutes, latitudeSeconds } = gonio;
            const { longitudeDegrees, longitudeMinutes, longitudeSeconds } = gonio;
            const { towerHeight, buildingHeight } = gonio;

            // Calculate the decimal values of latitude and longitude
            const latitudeDecimal = (latitudeDegrees + latitudeMinutes / 60 + latitudeSeconds / 3600) * -1;
            const longitudeDecimal = (longitudeDegrees + longitudeMinutes / 60 + longitudeSeconds / 3600) * -1;
            const latitudeFormat1 = latitudeDegrees * 3600 + latitudeMinutes * 60 + latitudeSeconds;
            const longitudeFormat1 = longitudeDegrees * 3600 + longitudeMinutes * 60 + longitudeSeconds;
            // Calculate the total height
            const totalHeight = towerHeight + buildingHeight;

            const gonioWithValues = {
                latitudeDecimal,
                longitudeDecimal,
                latitudeFormat1,
                longitudeFormat1,
                totalHeight,
                ...gonio,
            };
            goniosWithValues.push(gonioWithValues);
        }

        return goniosWithValues;
    }
}
