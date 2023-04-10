import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Controller()
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @MessagePattern('createOperation')
  create(@Payload() createOperationDto: CreateOperationDto) {
    return this.operationsService.create(createOperationDto);
  }

  @MessagePattern('findAllOperations')
  findAll() {
    return this.operationsService.findAll();
  }

  @MessagePattern('findOneOperation')
  findOne(@Payload() id: number) {
    return this.operationsService.findOne(id);
  }

  @MessagePattern('updateOperation')
  update(@Payload() updateOperationDto: UpdateOperationDto) {
    return this.operationsService.update(updateOperationDto.id, updateOperationDto);
  }

  @MessagePattern('removeOperation')
  remove(@Payload() id: number) {
    return this.operationsService.remove(id);
  }
}
