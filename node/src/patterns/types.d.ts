export interface GonioBase {
    station: string;
    address: string;
    district: string;
    province: string;
    department: string;
    latitudeDegrees: number;
    latitudeMinutes: number;
    latitudeSeconds: number;
    longitudeDegrees: number;
    longitudeMinutes: number;
    longitudeSeconds: number;
    towerHeight: number;
    buildingHeight: number;
    seaLevel: number;
}

interface Gonio extends GonioBase {
    latitudeDecimal: number;
    longitudeDecimal: number;
    latitudeFormat1: number;
    longitudeFormat1: number;
    totalHeight: number;
    googleSeaLevel: number;
}
