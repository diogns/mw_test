import { getCellValue } from '../utils/excel';
import * as fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import * as path from 'path';
import * as libre from 'libreoffice-convert';
import XlsxTemplate from 'xlsx-template';

import docxConverter from 'docx-pdf';
import { convertWordFiles } from 'convert-multiple-files-ul';
import { Gonio, GonioDocument } from '../gonios/schemas/gonio.schema';

// libre.convertAsync = util.promisify(libre.convert);

/**
 * This function assigns the values from the rows to the array of AntennaBase object
 * @param {Array} rows : Array of rows from the sheet
 * @returns {Array} : Array of AntennaBase
 */
export const processLinkRowsSheetData = (rows: []): any => {
    const linksFromSheet = rows.map((row): any => {
        return {
            concatenate: getCellValue(row, 1),
            linkName: getCellValue(row, 51),
            service: getCellValue(row, 2),
            station: +getCellValue(row, 3),
            nameA: getCellValue(row, 4),
            indicative: getCellValue(row, 5),
            linkNumber: +getCellValue(row, 6),
            nameB: getCellValue(row, 7),

            // ----------- Location Information -----------
            address: getCellValue(row, 8),
            district: getCellValue(row, 9),
            province: getCellValue(row, 10),
            department: getCellValue(row, 11),

            // ----------- Latitude & Longitude -----------
            longitudeDegrees: +getCellValue(row, 12),
            longitudeMinutes: +getCellValue(row, 13),
            longitudeSeconds: +getCellValue(row, 14),
            latitudeDegrees: +getCellValue(row, 15),
            latitudeMinutes: +getCellValue(row, 16),
            latitudeSeconds: +getCellValue(row, 17),
            // latitudeDecimal: +getCellValue(row, 2),
            // longitudeDecimal: +getCellValue(row, 2),

            // // ----------- Channel ------------
            channel: getCellValue(row, 19),
            tx: getCellValue(row, 20),
            polarizationTx: getCellValue(row, 21),
            rx: getCellValue(row, 22),
            polarizationRx: getCellValue(row, 23),
            setting: getCellValue(row, 24),

            // // ----------- Equipment ------------
            brand: getCellValue(row, 25),
            model: getCellValue(row, 26),
            frequencyRange: getCellValue(row, 27),
            power: +getCellValue(row, 28),
            emission: getCellValue(row, 30),
            capacity: +getCellValue(row, 31),

            // // ----------- Antenna: Radiant System ------------
            antennaType: getCellValue(row, 32),
            antennaBrand: getCellValue(row, 33),
            antennaModel: getCellValue(row, 34),
            antennaDiameter: +getCellValue(row, 35),
            antennaGain: +getCellValue(row, 36),
            altInst: +getCellValue(row, 39),
            pire: +getCellValue(row, 43),
            accessibleHeight: +getCellValue(row, 44),

            // // ----------- Height Information ------------
            seaLevel: +getCellValue(row, 18),
            towerHeight: +getCellValue(row, 37),
            buildingHeight: +getCellValue(row, 38),

            // // ----------- Others ------------
            gonio: getCellValue(row, 29),
            azimuth: +getCellValue(row, 40),
            pathlength: +getCellValue(row, 41),
            losses: +getCellValue(row, 45),
        };
    });
    // Delete empty values
    return linksFromSheet.filter((link) => link.concatenate !== null && link.concatenate !== '');
};

export const processLinkUpdateRowsSheetData = (rows: []): any => {
    const linksFromSheet = rows.map((row): any => {
        return {
            // a
            siteAID: getCellValue(row, 1),
            siteAName: getCellValue(row, 2),
            siteALatitude: +getCellValue(row, 3),
            siteALongitude: +getCellValue(row, 4),
            siteAAzimuth: +getCellValue(row, 5),
            siteAElevation: +getCellValue(row, 6),
            siteATypeStructure: getCellValue(row, 7),
            siteAHeightProperty: +getCellValue(row, 8),
            siteATowerHeight: +getCellValue(row, 9),
            siteAAntennaheight: +getCellValue(row, 10),
            siteAAntennamodel: getCellValue(row, 11),
            siteAAntennadiameter: +getCellValue(row, 12),
            siteAAntennagain: +getCellValue(row, 13),
            siteAPolarization: getCellValue(row, 14),
            siteATXFreq: +getCellValue(row, 15),
            siteATXpower: +getCellValue(row, 16),
            siteATXloss: +getCellValue(row, 17),
            siteARXsignal: +getCellValue(row, 18),
            // b
            siteBID: getCellValue(row, 19),
            siteBName: getCellValue(row, 20),
            siteBLatitude: +getCellValue(row, 21),
            siteBLongitude: +getCellValue(row, 22),
            siteBAzimuth: +getCellValue(row, 23),
            siteBElevation: +getCellValue(row, 24),
            siteBTypeStructure: getCellValue(row, 25),
            siteBHeightProperty: +getCellValue(row, 26),
            siteBTowerHeight: +getCellValue(row, 27),
            siteBAntennaheight: +getCellValue(row, 28),
            siteBAntennamodel: getCellValue(row, 29),
            siteBAntennadiameter: +getCellValue(row, 30),
            siteBAntennagain: +getCellValue(row, 31),
            siteBPolarization: getCellValue(row, 32),
            siteBTXFreq: +getCellValue(row, 33),
            siteBTXpower: +getCellValue(row, 34),
            siteBTXloss: +getCellValue(row, 35),
            siteBRXsignal: +getCellValue(row, 36),
            // link
            Pathlength: +getCellValue(row, 37),
            Radiomodel: getCellValue(row, 38),
            RXthresholdlevel: +getCellValue(row, 39),
            Configuration: getCellValue(row, 41),
            BW: getCellValue(row, 42),
            Modulation: getCellValue(row, 43),
            Capacity: getCellValue(row, 44),
            Band: getCellValue(row, 45),
            ODUType: getCellValue(row, 46),
            // a
            siteAAddress: getCellValue(row, 47),
            siteADistrict: getCellValue(row, 48),
            siteAProvince: getCellValue(row, 49),
            siteADepartment: getCellValue(row, 50),
            // b
            siteBAddress: getCellValue(row, 51),
            siteBDistrict: getCellValue(row, 52),
            siteBProvince: getCellValue(row, 53),
            siteBDepartment: getCellValue(row, 54),
        };
    });
    // Delete empty values
    return linksFromSheet.filter((link) => link.SiteAID !== null && link.SiteAID !== '');
};

const coordinatesFromDegreesToDecimal = (degree, minute, seconds): number => {
    return degree + minute / 60 + seconds / 3600;
};

export const processInitData = (dataArray: any): any => {
    const links = [];
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        const siteA = {
            name: data.nameA,
            siteId: data.station,
            address: data.address,
            district: data.district,
            province: data.province,
            department: data.department,
            latitude: coordinatesFromDegreesToDecimal(data.latitudeDegrees, data.latitudeMinutes, data.latitudeSeconds),
            longitude: coordinatesFromDegreesToDecimal(data.longitudeDegrees, data.longitudeMinutes, data.longitudeSeconds),
            altitude: data.seaLevel,
            towerHeight: data.towerHeight,
            buildingHeight: data.buildingHeight,
            tx: data.tx,
            polarization: data.polarizationTx,
        };

        const siteB = {
            name: data.nameB,
            siteId: data.linkNumber,
            tx: data.rx,
            polarization: data.polarizationRx,
        };

        const radiantSystem = {
            model: data.antennaModel,
            antennaType: data.antennaType,
            brand: data.antennaBrand,
            diameter: data.antennaDiameter,
            gain: data.antennaGain,
            altInst: data.altInst,
            pire: data.pire,
            accessibleHeight: data.accessibleHeight,
        };

        const equipment = {
            model: data.model,
            brand: data.brand,
            frequencyRange: data.frequencyRange,
            power: data.power,
            emission: data.emission,
            capacity: data.capacity,
        };

        const link = {
            concatenate: data.nameA + '_' + data.nameB,
            linkName: data.linkName,
            service: data.service,
            siteA: siteA,
            siteB: siteB,
            setting: data.setting,
            // ----------- Equipment ------------
            equipment,
            // ----------- Radiant System ------------
            radiantSystem,
            // ----------- Add Information ------------
            azimuth: data.azimuth,
            pathlength: data.pathlength,
            channel: data.channel,
            gonio: data.gonio,
            losses: data.losses,
        };
        links.push(link);
    }

    return links;
};

export const processUpdateData = (dataSheetArray: any, linksData: any): any => {
    const links = [];
    //for (let i = 0; i < linksData.length; i++) {
    //    const concatenate = linksData[i].concatenate;
    //}

    for (let i = 0; i < dataSheetArray.length; i++) {
        const concatenate = dataSheetArray[i].concatenate;
        const siteA = {
            siteId: dataSheetArray[i].siteAID,
            name: dataSheetArray[i].siteAName,
            latitude: dataSheetArray[i].siteALatitude,
            longitude: dataSheetArray[i].siteALongitude,
            azimuth: dataSheetArray[i].siteAAzimuth,
            elevation: dataSheetArray[i].siteAElevation,
            typeStructure: dataSheetArray[i].siteATypeStructure,
            heightProperty: dataSheetArray[i].siteAHeightProperty,
            towerHeight: dataSheetArray[i].siteATowerHeight,
            antennaHeight: dataSheetArray[i].siteAAntennaheight,
            antennaModel: dataSheetArray[i].siteAAntennamodel,
            antennaDiameter: dataSheetArray[i].siteAAntennadiameter,
            antennaGain: dataSheetArray[i].siteAAntennagain,
            polarization: dataSheetArray[i].siteAPolarization,
            txFreq: dataSheetArray[i].siteATXFreq,
            txPower: dataSheetArray[i].siteATXpower,
            txLoss: dataSheetArray[i].siteATXloss,
            rxSignal: dataSheetArray[i].siteARXsignal,
            address: dataSheetArray[i].SiteAAddress,
            district: dataSheetArray[i].siteADistrict,
            province: dataSheetArray[i].siteAProvince,
            department: dataSheetArray[i].siteADepartment,
        };
        const siteB = {
            siteId: dataSheetArray[i].siteBID,
            name: dataSheetArray[i].siteBName,
            latitude: dataSheetArray[i].siteBLatitude,
            longitude: dataSheetArray[i].siteBLongitude,
            azimuth: dataSheetArray[i].siteBAzimuth,
            elevation: dataSheetArray[i].siteBElevation,
            typeStructure: dataSheetArray[i].siteBTypeStructure,
            heightProperty: dataSheetArray[i].siteBHeightProperty,
            towerHeight: dataSheetArray[i].siteBTowerHeight,
            antennaHeight: dataSheetArray[i].siteBAntennaheight,
            antennaModel: dataSheetArray[i].siteBAntennamodel,
            antennaDiameter: dataSheetArray[i].siteBAntennadiameter,
            antennaGain: dataSheetArray[i].siteBAntennagain,
            polarization: dataSheetArray[i].siteBPolarization,
            txFreq: dataSheetArray[i].siteBTXFreq,
            txPower: dataSheetArray[i].siteBTXpower,
            txLoss: dataSheetArray[i].siteBTXloss,
            rxSignal: dataSheetArray[i].siteBRXsignal,
            address: dataSheetArray[i].SiteBAddress,
            district: dataSheetArray[i].siteBDistrict,
            province: dataSheetArray[i].siteBProvince,
            department: dataSheetArray[i].siteBDepartment,
        };

        const link = {
            pathLength: dataSheetArray[i].Pathlength,
            radioModel: dataSheetArray[i].Radiomodel,
            rxThresholdlevel: dataSheetArray[i].RXthresholdlevel,
            configuration: dataSheetArray[i].Configuration,
            bw: dataSheetArray[i].BW,
            modulation: dataSheetArray[i].Modulation,
            capacity: dataSheetArray[i].Capacity,
            band: dataSheetArray[i].Band,
            oduType: dataSheetArray[i].ODUtype,
            siteA: siteA,
            siteB: siteB,
        };
        console.log('link', link);
        break;
    }

    return 'links';
};

const decimalToDMS = (decimal: number): string => {
    const degrees = parseInt(decimal.toString(), 10);
    const minutes = parseInt(((decimal - degrees) * 60).toString(), 10);
    const seconds = ((decimal - degrees) * 60 - minutes) * 60;
    return `${degrees}° ${Math.abs(minutes)}' ${Math.abs(seconds).toFixed(4)}''`;
};

export const generateDataReportDocx = (dataArray: any): any => {
    const data = [];
    for (const link of dataArray) {
        const dataDocx = {
            // description
            service: link.service,
            'siteA.name': link.siteA.name,
            'siteA.address': link.siteA.address ? link.siteA.address : '-Pendiente-',
            'siteA.dep': link.siteA.department ? link.siteA.department.toUpperCase() : '-Pendiente-',
            'siteA.pro': link.siteA.province ? link.siteA.province.toUpperCase() : '-Pendiente-',
            'siteA.dis': link.siteA.district ? link.siteA.district.toUpperCase() : '-Pendiente-',
            longitude: decimalToDMS(link.siteA.longitude),
            latitude: decimalToDMS(link.siteA.latitude),
            altitude: link.siteA.altitude,
            indicative: link.indicative ? link.indicative : '-Pendiente-',
            'A.pol': link.siteA.polarization ? link.siteA.polarization : '-Pendiente-',
            'B.pol': link.siteB.polarization ? link.siteB.polarization : '-Pendiente-',
            'A.tx': link.siteA.tx,
            'B.tx': link.siteB.tx,
            setting: link.setting,
            // equipment
            'equipment.brand': link.equipment.brand,
            'equipment.model': link.equipment.model,
            'equipment.frequencyRange': link.equipment.frequencyRange,
            'equipment.pdbm': link.equipment.power,
            'equipment.pw': '-Pendiente-',
            'equipment.emission': link.equipment.emission ? link.equipment.emission : '-Pendiente-',
            'equipment.capacity': link.equipment.capacity ? link.equipment.capacity : '-Pendiente-',
            // radiantSystem
            'radiantSystem.antennaType': link.radiantSystem.antennaType,
            'radiantSystem.brand': link.radiantSystem.brand,
            'radiantSystem.model': link.radiantSystem.model,
            'radiantSystem.gain': link.radiantSystem.gain,
            'radiantSystem.p': link.radiantSystem.pire,
            'radiantSystem.w': '-Pendiente-',
            'siteA.towerHeight': link.siteA.towerHeight,
            'siteA.buildingHeight': link.siteA.buildingHeight,
            'radiantSystem.altInst': link.radiantSystem.altInst,
            'radiantSystem.accessibleHeight': link.radiantSystem.accessibleHeight ? link.radiantSystem.accessibleHeight : '-Pendiente-',
            // add information
            azimuth: link.azimuth,
            pathlength: link.pathlength,
        };
        data.push(dataDocx);
    }
    return data;
};

export const generateDocx = (dataArray: any, fileName = 'MW_NEXT_23', save = false): any => {
    const ext = '.docx';

    // Read template
    const content = fs.readFileSync('./client/files/templates/MW_NEXT.docx', 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);

    // Add end Page stopper
    if (dataArray.length > 1) {
        dataArray[dataArray.length - 1].raw_loop_pagebreak = `<w:br w:type="page"/>`;
        doc.setData({
            raw_loop_pagebreak: `<w:br w:type="page"/>`,
            dataLoop: dataArray,
        });
        doc.render();
    } else {
        doc.setData({
            dataLoop: dataArray,
        });
        doc.render();
    }

    // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)

    const buf = doc.getZip().generate({
        type: 'nodebuffer',
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: 'DEFLATE',
    });

    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    if (save) {
        fs.writeFileSync(`./client/files/output/${fileName}${ext}`, buf);
    }
    return { buf, fileName, path: `./client/files/output/${fileName}${ext}` };
};

export const docxToPdf = async (inputPath: string, fileName = 'MW_NEXT_23', save = false) => {
    const ext = '.pdf';
    const outputPath = `./client/files/output/${fileName}${ext}`;

    //// Read file
    //const docxBuf = fs.readFileSync(inputPath);

    //return new Promise<any>((resolve, reject) => {
    //    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    //    libre.convert(docxBuf, ext, undefined, (err, pdfBuf) => {
    //        if (err) {
    //            console.log(`Error converting file: ${err}`);
    //            reject(err);
    //        }

    //        // Here in done you have pdf file which you can save or transfer in another stream
    //        if (save) {
    //            fs.writeFileSync(outputPath, pdfBuf);
    //        }
    //        resolve({ pdfBuf, fileName, path: outputPath });
    //    });
    //});

    // return new Promise<any>((resolve, reject) => {
    //     docxConverter(inputPath, outputPath, function (err, result) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log('result' + result);
    //     });
    // });
    const pathOutput = await convertWordFiles(`./client/files/output/${fileName}.docx`, 'pdf', './client/files/output/', '10');
    const pdfBuf = fs.readFileSync(pathOutput);
    return { pdfBuf };
};

const decimalToDMSFormat = (decimal: number): any => {
    const degrees = parseInt(decimal.toString(), 10);
    const minutes = parseInt(((decimal - degrees) * 60).toString(), 10);
    const seconds = ((decimal - degrees) * 60 - minutes) * 60;
    // `${degrees}° ${Math.abs(minutes)}' ${Math.abs(seconds).toFixed(4)}''`
    return { degrees: `${degrees}°`, minutes: `${Math.abs(minutes)}'`, seconds: `${Math.abs(seconds).toFixed(4)}''` };
};

export const generateDataReportXlsx = (link: any, gonio: any): any => {
    const nameSiteA = link.siteA.name;
    const nameArray = nameSiteA.split('_');
    const nameA = nameArray.slice(0, 2).join('_');
    const nameB = nameArray.slice(2, nameArray.length).join('_');

    const longitude = decimalToDMSFormat(link.siteA.longitude);
    const latitude = decimalToDMSFormat(link.siteA.latitude);

    const dataProccesed = {
        fileName: link.concatenate,
        siteAName: nameSiteA,
        siteANameA: nameA,
        siteANameB: nameB,
        siteAAdress: link.siteA.address ? link.siteA.address : '-Pendiente-',
        siteADis: link.siteA.district ? link.siteA.district : '-Pendiente-',
        siteAPro: link.siteA.province ? link.siteA.province : '-Pendiente-',
        siteADep: link.siteA.department ? link.siteA.department : '-Pendiente-',
        siteALongD: longitude.degrees,
        siteALongM: longitude.minutes,
        siteALongS: longitude.seconds,
        siteALatD: latitude.degrees,
        siteALatM: latitude.minutes,
        siteALatS: latitude.seconds,
        gonioName: gonio.station,
        gonioAddress: gonio.address,
        gonioDis: gonio.district,
        gonioPro: gonio.province,
        gonioDep: gonio.department,
        gonioLongD: `${gonio.longitudeDegrees}°`,
        gonioLongM: `${gonio.longitudeMinutes}'`,
        gonioLongS: `${gonio.longitudeSeconds}''`,
        gonioLatD: `${gonio.latitudeDegrees}°`,
        gonioLatM: `${gonio.latitudeMinutes}'`,
        gonioLatS: `${gonio.latitudeSeconds}''`,
    };
    return dataProccesed;
};

export const generateXlsx = (data: any, fileName = 'MW_NEXT_23', save = false): any => {
    const inputPath = './client/files/templates/Gonio.xlsx';
    const outputPath = `./client/files/output/${fileName}.xlsx`;
    const xlsxBuf = fs.readFileSync(inputPath);

    // Load an XLSX file into memory
    // Create a template
    const template = new XlsxTemplate(xlsxBuf);

    // Replacements take place on first sheet
    const sheetNumber = 1;

    // Perform substitution
    template.substitute(sheetNumber, data);

    const dataProccesed = template.generate({ type: 'nodebuffer' });
    // Get binary data
    if (save) {
        fs.writeFileSync(outputPath, dataProccesed);
    }
    return { buf: 'dataProccesed', fileName, path: outputPath };
};
