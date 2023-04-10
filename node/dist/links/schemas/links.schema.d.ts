/// <reference types="mongoose-paginate" />
import { Document } from 'mongoose';
export type LinkDocument = Link & Document;
export declare class Site {
    name: string;
    siteId: string;
    address: string;
    district: string;
    province: string;
    department: string;
    latitude: number;
    longitude: number;
    altitude: number;
    towerHeight: number;
    buildingHeight: number;
    tx: string;
    polarization: string;
}
export declare class RadiantSystem {
    model: string;
    antennaType: string;
    brand: string;
    diameter: number;
    gain: number;
    altInst: number;
    pire: number;
    accessibleHeight: number;
}
export declare class Equipment {
    model: string;
    brand: string;
    frequencyRange: string;
    power: number;
    emission: string;
    capacity: number;
}
export declare class Link {
    isReported: boolean;
    concatenate: string;
    linkName: string;
    service: string;
    indicative: string;
    siteA: Site;
    siteB: Site;
    setting: string;
    equipment: Equipment;
    radiantSystem: RadiantSystem;
    azimuth: number;
    pathlength: number;
    channel: string;
    gonio: string;
    losses: number;
}
export declare const LinkSchema: import("mongoose").Schema<Link, import("mongoose").Model<Link, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Link>;
