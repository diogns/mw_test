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
exports.AntennasController = void 0;
const common_1 = require("@nestjs/common");
const antennas_service_1 = require("../services/antennas.service");
const antennas_storage_service_1 = require("../services/antennas.storage.service");
const create_antenna_dto_1 = require("../dto/create-antenna.dto");
let AntennasController = class AntennasController {
    constructor(antennasApiService, antennasStorageService) {
        this.antennasApiService = antennasApiService;
        this.antennasStorageService = antennasStorageService;
    }
    create(createAntennaDto) {
        return this.antennasApiService.create(createAntennaDto);
    }
    findAll() {
        return this.antennasApiService.findAll();
    }
    findOne(id) {
        return this.antennasApiService.findOne(id);
    }
    findOneByName(name) {
        return this.antennasApiService.findOneByName(name);
    }
    remove(id) {
        return this.antennasApiService.remove(+id);
    }
    datatable(query) {
        return this.antennasApiService.datatable(query);
    }
    async storageInitData() {
        const data = await this.antennasStorageService.readExcelFile(0);
        const antennasCreated = await this.antennasApiService.createMany(data);
        return antennasCreated;
    }
    async storageInitAdditionalData() {
        const data = await this.antennasStorageService.processAntennaPatterns();
        return data;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_antenna_dto_1.CreateAntennaBaseDto]),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/model/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "findOneByName", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/list/datatable/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AntennasController.prototype, "datatable", null);
__decorate([
    (0, common_1.Post)('init/base-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AntennasController.prototype, "storageInitData", null);
__decorate([
    (0, common_1.Post)('init/additional-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AntennasController.prototype, "storageInitAdditionalData", null);
AntennasController = __decorate([
    (0, common_1.Controller)('antenna'),
    __metadata("design:paramtypes", [antennas_service_1.AntennasService,
        antennas_storage_service_1.AntennasStorageService])
], AntennasController);
exports.AntennasController = AntennasController;
//# sourceMappingURL=antennas.controller.js.map