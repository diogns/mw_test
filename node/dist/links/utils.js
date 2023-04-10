"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateXlsx = exports.generateDataReportXlsx = exports.docxToPdf = exports.generateDocx = exports.generateDataReportDocx = exports.processUpdateData = exports.processInitData = exports.processLinkUpdateRowsSheetData = exports.processLinkRowsSheetData = void 0;
const excel_1 = require("../utils/excel");
const fs = __importStar(require("fs"));
const pizzip_1 = __importDefault(require("pizzip"));
const docxtemplater_1 = __importDefault(require("docxtemplater"));
const xlsx_template_1 = __importDefault(require("xlsx-template"));
const convert_multiple_files_ul_1 = require("convert-multiple-files-ul");
const processLinkRowsSheetData = (rows) => {
    const linksFromSheet = rows.map((row) => {
        return {
            concatenate: (0, excel_1.getCellValue)(row, 1),
            linkName: (0, excel_1.getCellValue)(row, 51),
            service: (0, excel_1.getCellValue)(row, 2),
            station: +(0, excel_1.getCellValue)(row, 3),
            nameA: (0, excel_1.getCellValue)(row, 4),
            indicative: (0, excel_1.getCellValue)(row, 5),
            linkNumber: +(0, excel_1.getCellValue)(row, 6),
            nameB: (0, excel_1.getCellValue)(row, 7),
            address: (0, excel_1.getCellValue)(row, 8),
            district: (0, excel_1.getCellValue)(row, 9),
            province: (0, excel_1.getCellValue)(row, 10),
            department: (0, excel_1.getCellValue)(row, 11),
            longitudeDegrees: +(0, excel_1.getCellValue)(row, 12),
            longitudeMinutes: +(0, excel_1.getCellValue)(row, 13),
            longitudeSeconds: +(0, excel_1.getCellValue)(row, 14),
            latitudeDegrees: +(0, excel_1.getCellValue)(row, 15),
            latitudeMinutes: +(0, excel_1.getCellValue)(row, 16),
            latitudeSeconds: +(0, excel_1.getCellValue)(row, 17),
            channel: (0, excel_1.getCellValue)(row, 19),
            tx: (0, excel_1.getCellValue)(row, 20),
            polarizationTx: (0, excel_1.getCellValue)(row, 21),
            rx: (0, excel_1.getCellValue)(row, 22),
            polarizationRx: (0, excel_1.getCellValue)(row, 23),
            setting: (0, excel_1.getCellValue)(row, 24),
            brand: (0, excel_1.getCellValue)(row, 25),
            model: (0, excel_1.getCellValue)(row, 26),
            frequencyRange: (0, excel_1.getCellValue)(row, 27),
            power: +(0, excel_1.getCellValue)(row, 28),
            emission: (0, excel_1.getCellValue)(row, 30),
            capacity: +(0, excel_1.getCellValue)(row, 31),
            antennaType: (0, excel_1.getCellValue)(row, 32),
            antennaBrand: (0, excel_1.getCellValue)(row, 33),
            antennaModel: (0, excel_1.getCellValue)(row, 34),
            antennaDiameter: +(0, excel_1.getCellValue)(row, 35),
            antennaGain: +(0, excel_1.getCellValue)(row, 36),
            altInst: +(0, excel_1.getCellValue)(row, 39),
            pire: +(0, excel_1.getCellValue)(row, 43),
            accessibleHeight: +(0, excel_1.getCellValue)(row, 44),
            seaLevel: +(0, excel_1.getCellValue)(row, 18),
            towerHeight: +(0, excel_1.getCellValue)(row, 37),
            buildingHeight: +(0, excel_1.getCellValue)(row, 38),
            gonio: (0, excel_1.getCellValue)(row, 29),
            azimuth: +(0, excel_1.getCellValue)(row, 40),
            pathlength: +(0, excel_1.getCellValue)(row, 41),
            losses: +(0, excel_1.getCellValue)(row, 45),
        };
    });
    return linksFromSheet.filter((link) => link.concatenate !== null && link.concatenate !== '');
};
exports.processLinkRowsSheetData = processLinkRowsSheetData;
const processLinkUpdateRowsSheetData = (rows) => {
    const linksFromSheet = rows.map((row) => {
        return {
            siteAID: (0, excel_1.getCellValue)(row, 1),
            siteAName: (0, excel_1.getCellValue)(row, 2),
            siteALatitude: +(0, excel_1.getCellValue)(row, 3),
            siteALongitude: +(0, excel_1.getCellValue)(row, 4),
            siteAAzimuth: +(0, excel_1.getCellValue)(row, 5),
            siteAElevation: +(0, excel_1.getCellValue)(row, 6),
            siteATypeStructure: (0, excel_1.getCellValue)(row, 7),
            siteAHeightProperty: +(0, excel_1.getCellValue)(row, 8),
            siteATowerHeight: +(0, excel_1.getCellValue)(row, 9),
            siteAAntennaheight: +(0, excel_1.getCellValue)(row, 10),
            siteAAntennamodel: (0, excel_1.getCellValue)(row, 11),
            siteAAntennadiameter: +(0, excel_1.getCellValue)(row, 12),
            siteAAntennagain: +(0, excel_1.getCellValue)(row, 13),
            siteAPolarization: (0, excel_1.getCellValue)(row, 14),
            siteATXFreq: +(0, excel_1.getCellValue)(row, 15),
            siteATXpower: +(0, excel_1.getCellValue)(row, 16),
            siteATXloss: +(0, excel_1.getCellValue)(row, 17),
            siteARXsignal: +(0, excel_1.getCellValue)(row, 18),
            siteBID: (0, excel_1.getCellValue)(row, 19),
            siteBName: (0, excel_1.getCellValue)(row, 20),
            siteBLatitude: +(0, excel_1.getCellValue)(row, 21),
            siteBLongitude: +(0, excel_1.getCellValue)(row, 22),
            siteBAzimuth: +(0, excel_1.getCellValue)(row, 23),
            siteBElevation: +(0, excel_1.getCellValue)(row, 24),
            siteBTypeStructure: (0, excel_1.getCellValue)(row, 25),
            siteBHeightProperty: +(0, excel_1.getCellValue)(row, 26),
            siteBTowerHeight: +(0, excel_1.getCellValue)(row, 27),
            siteBAntennaheight: +(0, excel_1.getCellValue)(row, 28),
            siteBAntennamodel: (0, excel_1.getCellValue)(row, 29),
            siteBAntennadiameter: +(0, excel_1.getCellValue)(row, 30),
            siteBAntennagain: +(0, excel_1.getCellValue)(row, 31),
            siteBPolarization: (0, excel_1.getCellValue)(row, 32),
            siteBTXFreq: +(0, excel_1.getCellValue)(row, 33),
            siteBTXpower: +(0, excel_1.getCellValue)(row, 34),
            siteBTXloss: +(0, excel_1.getCellValue)(row, 35),
            siteBRXsignal: +(0, excel_1.getCellValue)(row, 36),
            Pathlength: +(0, excel_1.getCellValue)(row, 37),
            Radiomodel: (0, excel_1.getCellValue)(row, 38),
            RXthresholdlevel: +(0, excel_1.getCellValue)(row, 39),
            Configuration: (0, excel_1.getCellValue)(row, 41),
            BW: (0, excel_1.getCellValue)(row, 42),
            Modulation: (0, excel_1.getCellValue)(row, 43),
            Capacity: (0, excel_1.getCellValue)(row, 44),
            Band: (0, excel_1.getCellValue)(row, 45),
            ODUType: (0, excel_1.getCellValue)(row, 46),
            siteAAddress: (0, excel_1.getCellValue)(row, 47),
            siteADistrict: (0, excel_1.getCellValue)(row, 48),
            siteAProvince: (0, excel_1.getCellValue)(row, 49),
            siteADepartment: (0, excel_1.getCellValue)(row, 50),
            siteBAddress: (0, excel_1.getCellValue)(row, 51),
            siteBDistrict: (0, excel_1.getCellValue)(row, 52),
            siteBProvince: (0, excel_1.getCellValue)(row, 53),
            siteBDepartment: (0, excel_1.getCellValue)(row, 54),
        };
    });
    return linksFromSheet.filter((link) => link.SiteAID !== null && link.SiteAID !== '');
};
exports.processLinkUpdateRowsSheetData = processLinkUpdateRowsSheetData;
const coordinatesFromDegreesToDecimal = (degree, minute, seconds) => {
    return degree + minute / 60 + seconds / 3600;
};
const processInitData = (dataArray) => {
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
            equipment,
            radiantSystem,
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
exports.processInitData = processInitData;
const processUpdateData = (dataSheetArray, linksData) => {
    const links = [];
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
exports.processUpdateData = processUpdateData;
const decimalToDMS = (decimal) => {
    const degrees = parseInt(decimal.toString(), 10);
    const minutes = parseInt(((decimal - degrees) * 60).toString(), 10);
    const seconds = ((decimal - degrees) * 60 - minutes) * 60;
    return `${degrees}° ${Math.abs(minutes)}' ${Math.abs(seconds).toFixed(4)}''`;
};
const generateDataReportDocx = (dataArray) => {
    const data = [];
    for (const link of dataArray) {
        const dataDocx = {
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
            'equipment.brand': link.equipment.brand,
            'equipment.model': link.equipment.model,
            'equipment.frequencyRange': link.equipment.frequencyRange,
            'equipment.pdbm': link.equipment.power,
            'equipment.pw': '-Pendiente-',
            'equipment.emission': link.equipment.emission ? link.equipment.emission : '-Pendiente-',
            'equipment.capacity': link.equipment.capacity ? link.equipment.capacity : '-Pendiente-',
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
            azimuth: link.azimuth,
            pathlength: link.pathlength,
        };
        data.push(dataDocx);
    }
    return data;
};
exports.generateDataReportDocx = generateDataReportDocx;
const generateDocx = (dataArray, fileName = 'MW_NEXT_23', save = false) => {
    const ext = '.docx';
    const content = fs.readFileSync('./client/files/templates/MW_NEXT.docx', 'binary');
    const zip = new pizzip_1.default(content);
    const doc = new docxtemplater_1.default();
    doc.loadZip(zip);
    if (dataArray.length > 1) {
        dataArray[dataArray.length - 1].raw_loop_pagebreak = `<w:br w:type="page"/>`;
        doc.setData({
            raw_loop_pagebreak: `<w:br w:type="page"/>`,
            dataLoop: dataArray,
        });
        doc.render();
    }
    else {
        doc.setData({
            dataLoop: dataArray,
        });
        doc.render();
    }
    const buf = doc.getZip().generate({
        type: 'nodebuffer',
        compression: 'DEFLATE',
    });
    if (save) {
        fs.writeFileSync(`./client/files/output/${fileName}${ext}`, buf);
    }
    return { buf, fileName, path: `./client/files/output/${fileName}${ext}` };
};
exports.generateDocx = generateDocx;
const docxToPdf = async (inputPath, fileName = 'MW_NEXT_23', save = false) => {
    const ext = '.pdf';
    const outputPath = `./client/files/output/${fileName}${ext}`;
    const pathOutput = await (0, convert_multiple_files_ul_1.convertWordFiles)(`./client/files/output/${fileName}.docx`, 'pdf', './client/files/output/', '10');
    const pdfBuf = fs.readFileSync(pathOutput);
    return { pdfBuf };
};
exports.docxToPdf = docxToPdf;
const decimalToDMSFormat = (decimal) => {
    const degrees = parseInt(decimal.toString(), 10);
    const minutes = parseInt(((decimal - degrees) * 60).toString(), 10);
    const seconds = ((decimal - degrees) * 60 - minutes) * 60;
    return { degrees: `${degrees}°`, minutes: `${Math.abs(minutes)}'`, seconds: `${Math.abs(seconds).toFixed(4)}''` };
};
const generateDataReportXlsx = (link, gonio) => {
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
exports.generateDataReportXlsx = generateDataReportXlsx;
const generateXlsx = (data, fileName = 'MW_NEXT_23', save = false) => {
    const inputPath = './client/files/templates/Gonio.xlsx';
    const outputPath = `./client/files/output/${fileName}.xlsx`;
    const xlsxBuf = fs.readFileSync(inputPath);
    const template = new xlsx_template_1.default(xlsxBuf);
    const sheetNumber = 1;
    template.substitute(sheetNumber, data);
    const dataProccesed = template.generate({ type: 'nodebuffer' });
    if (save) {
        fs.writeFileSync(outputPath, dataProccesed);
    }
    return { buf: 'dataProccesed', fileName, path: outputPath };
};
exports.generateXlsx = generateXlsx;
//# sourceMappingURL=utils.js.map