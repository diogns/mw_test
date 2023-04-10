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
exports.PatternsController = void 0;
const common_1 = require("@nestjs/common");
const patterns_service_1 = require("../services/patterns.service");
const patterns_storage_service_1 = require("../services/patterns.storage.service");
const create_pattern_dto_1 = require("../dto/create-pattern.dto");
const update_pattern_dto_1 = require("../dto/update-pattern.dto");
let PatternsController = class PatternsController {
    constructor(patternsApiService, patternsStorageService) {
        this.patternsApiService = patternsApiService;
        this.patternsStorageService = patternsStorageService;
    }
    create(createPatternDto) {
        return this.patternsApiService.create(createPatternDto);
    }
    findAll() {
        return this.patternsApiService.findAll();
    }
    findOne(id) {
        return this.patternsApiService.findOne(+id);
    }
    update(id, updatePatternDto) {
        return this.patternsApiService.update(+id, updatePatternDto);
    }
    remove(id) {
        return this.patternsApiService.remove(+id);
    }
    async storageInitData() {
        await this.patternsStorageService.readExcelFile();
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pattern_dto_1.CreatePatternDto]),
    __metadata("design:returntype", void 0)
], PatternsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatternsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatternsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pattern_dto_1.UpdatePatternDto]),
    __metadata("design:returntype", void 0)
], PatternsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatternsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatternsController.prototype, "storageInitData", null);
PatternsController = __decorate([
    (0, common_1.Controller)('patterns'),
    __metadata("design:paramtypes", [patterns_service_1.PatternsService,
        patterns_storage_service_1.PatternsStorageService])
], PatternsController);
exports.PatternsController = PatternsController;
//# sourceMappingURL=patterns.controller.js.map