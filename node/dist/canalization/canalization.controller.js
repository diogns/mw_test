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
exports.CanalizationController = void 0;
const common_1 = require("@nestjs/common");
const canalization_service_1 = require("./canalization.service");
const create_canalization_dto_1 = require("./dto/create-canalization.dto");
const update_canalization_dto_1 = require("./dto/update-canalization.dto");
let CanalizationController = class CanalizationController {
    constructor(canalizationService) {
        this.canalizationService = canalizationService;
    }
    create(createCanalizationDto) {
        return this.canalizationService.create(createCanalizationDto);
    }
    findAll() {
        return this.canalizationService.findAll();
    }
    findOne(id) {
        return this.canalizationService.findOne(id);
    }
    update(id, updateCanalizationDto) {
        return this.canalizationService.update(+id, updateCanalizationDto);
    }
    remove(id) {
        return this.canalizationService.remove(+id);
    }
    datatable(query) {
        return this.canalizationService.datatable(query);
    }
    async storageInitBaseData() {
        const data = await this.canalizationService.readExcelFile(4);
        const canalizationsCreated = await this.canalizationService.createMany(data);
        return canalizationsCreated;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_canalization_dto_1.CreateCanalizationDto]),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_canalization_dto_1.UpdateCanalizationDto]),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/list/datatable/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CanalizationController.prototype, "datatable", null);
__decorate([
    (0, common_1.Post)('init/base-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CanalizationController.prototype, "storageInitBaseData", null);
CanalizationController = __decorate([
    (0, common_1.Controller)('canalization'),
    __metadata("design:paramtypes", [canalization_service_1.CanalizationService])
], CanalizationController);
exports.CanalizationController = CanalizationController;
//# sourceMappingURL=canalization.controller.js.map