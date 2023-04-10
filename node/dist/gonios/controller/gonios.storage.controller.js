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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoniosStorageController = void 0;
const common_1 = require("@nestjs/common");
const gonios_storage_service_1 = require("../services/gonios.storage.service");
const gonios_api_service_1 = require("../services/gonios.api.service");
let GoniosStorageController = class GoniosStorageController {
    constructor(goniosStorageService, goniosApiService) {
        this.goniosStorageService = goniosStorageService;
        this.goniosApiService = goniosApiService;
    }
    async create() {
        await this.goniosStorageService.readExcelFile();
        const data = this.goniosStorageService.completeValuesFromBaseData();
        const goniosToReturn = [];
        for (const gonio of data) {
            try {
                const gonioItem = await this.goniosApiService.create(gonio);
                goniosToReturn.push(gonioItem);
            }
            catch (err) {
                console.log(gonio);
                console.log(err.message);
            }
        }
        return goniosToReturn;
    }
};
__decorate([
    (0, common_1.Post)('excel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoniosStorageController.prototype, "create", null);
GoniosStorageController = __decorate([
    (0, common_1.Controller)('gonios/storage'),
    __metadata("design:paramtypes", [gonios_storage_service_1.GoniosStorageService,
        gonios_api_service_1.GoniosApiService])
], GoniosStorageController);
exports.GoniosStorageController = GoniosStorageController;
//# sourceMappingURL=gonios.storage.controller.js.map