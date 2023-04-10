import { CalculationsService } from './calculations.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';
import { UpdateCalculationDto } from './dto/update-calculation.dto';
export declare class CalculationsController {
    private readonly calculationsService;
    constructor(calculationsService: CalculationsService);
    create(createCalculationDto: CreateCalculationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCalculationDto: UpdateCalculationDto): string;
    remove(id: string): string;
}
