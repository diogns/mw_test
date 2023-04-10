import {
    IsNegative, //
    IsPositive,
    Min,
    Max,
    IsDefined,
    IsNotEmpty,
} from 'class-validator';

export class CreateAntennaBaseDto {
    @IsNotEmpty()
    @IsDefined()
    model: string;

    diameter: number;

    gain: number;

    brand: string;

    homologation: string;

    type: string;

    weight: number;
}
