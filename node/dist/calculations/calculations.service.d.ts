import { CreateCalculationDto } from './dto/create-calculation.dto';
import { UpdateCalculationDto } from './dto/update-calculation.dto';
export declare class CalculationsService {
    create(createCalculationDto: CreateCalculationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCalculationDto: UpdateCalculationDto): string;
    remove(id: number): string;
}
