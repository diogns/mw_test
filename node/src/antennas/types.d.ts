export interface AntennaBase {
    model: string;
    diameter: number;
    gain: number;
    brand: string;
    homologation: string;
    type: string;
    weight: number;
}

interface Gonio extends GonioBase {
    latitudeDecimal: number;
    longitudeDecimal: number;
    latitudeFormat1: number;
    longitudeFormat1: number;
    totalHeight: number;
    googleSeaLevel: number;
}
