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
exports.GoniosApiController = void 0;
const common_1 = require("@nestjs/common");
const gonios_api_service_1 = require("../services/gonios.api.service");
const create_gonio_dto_1 = require("../dto/create-gonio.dto");
const update_gonio_dto_1 = require("../dto/update-gonio.dto");
let GoniosApiController = class GoniosApiController {
    constructor(goniosApiService) {
        this.goniosApiService = goniosApiService;
    }
    create(createGonioDto) {
        return this.goniosApiService.create(createGonioDto);
    }
    findAll(query) {
        console.log('query', query);
        return this.goniosApiService.findAll(query);
    }
    findOne(id) {
        return this.goniosApiService.findOne(+id);
    }
    update(id, updateGonioDto) {
        return this.goniosApiService.update(+id, updateGonioDto);
    }
    remove(id) {
        return this.goniosApiService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gonio_dto_1.CreateGonioDto]),
    __metadata("design:returntype", void 0)
], GoniosApiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoniosApiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoniosApiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gonio_dto_1.UpdateGonioDto]),
    __metadata("design:returntype", void 0)
], GoniosApiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoniosApiController.prototype, "remove", null);
GoniosApiController = __decorate([
    (0, common_1.Controller)('gonios'),
    __metadata("design:paramtypes", [gonios_api_service_1.GoniosApiService])
], GoniosApiController);
exports.GoniosApiController = GoniosApiController;
//# sourceMappingURL=gonios.api.controller.js.map