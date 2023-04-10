import {
    IsNegative, //
    IsPositive,
    Min,
    Max,
    IsDefined,
    IsNotEmpty,
} from 'class-validator';

export class CreateGonioDto {
    @IsNotEmpty()
    @IsDefined()
    station: string;

    // ----------- Location Information -----------
    @IsNotEmpty()
    @IsDefined()
    address: string;

    @IsNotEmpty()
    @IsDefined()
    district: string;

    @IsNotEmpty()
    @IsDefined()
    province: string;

    @IsNotEmpty()
    @IsDefined()
    department: string;

    // ----------- Latitude & Longitude For Peru-----------
    @IsNotEmpty()
    @IsDefined()
    @Min(0)
    @Max(20)
    @IsPositive()
    latitudeDegrees: number;

    @IsNotEmpty()
    @IsDefined()
    @Min(0)
    @Max(60)
    @IsPositive()
    latitudeMinutes: number;

    @IsNotEmpty()
    @IsDefined()
    @Min(0)
    @Max(60)
    @IsPositive()
    latitudeSeconds: number;

    @IsNotEmpty()
    @IsDefined()
    @Min(60)
    @Max(80)
    @IsPositive()
    longitudeDegrees: number;

    @IsNotEmpty()
    @IsDefined()
    @Min(0)
    @Max(60)
    @IsPositive()
    longitudeMinutes: number;

    @IsNotEmpty()
    @IsDefined()
    @Min(0)
    @Max(60)
    @IsPositive()
    longitudeSeconds: number;

    // Decimal Format
    @IsNotEmpty()
    @IsDefined()
    @IsNegative()
    latitudeDecimal: number;

    @IsNotEmpty()
    @IsDefined()
    @IsNegative()
    longitudeDecimal: number;

    // Unknown Format
    @IsNotEmpty()
    @IsDefined()
    latitudeFormat1: number;

    @IsNotEmpty()
    @IsDefined()
    longitudeFormat1: number;

    // ----------- Height Information ------------
    seaLevel: number;

    towerHeight: number;

    buildingHeight: number;

    totalHeight: number;

    googleSeaLevel: number;
}
