import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
export declare class OperationsController {
    private readonly operationsService;
    constructor(operationsService: OperationsService);
    create(createOperationDto: CreateOperationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateOperationDto: UpdateOperationDto): string;
    remove(id: number): string;
}
