"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const operations_service_1 = require("./operations.service");
const create_operation_dto_1 = require("./dto/create-operation.dto");
const update_operation_dto_1 = require("./dto/update-operation.dto");
let OperationsController = class OperationsController {
    constructor(operationsService) {
        this.operationsService = operationsService;
    }
    create(createOperationDto) {
        return this.operationsService.create(createOperationDto);
    }
    findAll() {
        return this.operationsService.findAll();
    }
    findOne(id) {
        return this.operationsService.findOne(id);
    }
    update(updateOperationDto) {
        return this.operationsService.update(updateOperationDto.id, updateOperationDto);
    }
    remove(id) {
        return this.operationsService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('createOperation'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_operation_dto_1.CreateOperationDto]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllOperations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneOperation'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateOperation'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_operation_dto_1.UpdateOperationDto]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeOperation'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "remove", null);
OperationsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [operations_service_1.OperationsService])
], OperationsController);
exports.OperationsController = OperationsController;
//# sourceMappingURL=operations.controller.js.map