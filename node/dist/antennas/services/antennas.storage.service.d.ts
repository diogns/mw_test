import { Model } from 'mongoose';
import { AntennaDocument } from '../schemas/antennas.schema';
export declare class AntennasStorageService {
    private antennasModule;
    constructor(antennasModule: Model<AntennaDocument>);
    readExcelFile(sheetNumber: number): Promise<import("../types").AntennaBase[]>;
    processAntennaPatterns(): Promise<any[]>;
}
