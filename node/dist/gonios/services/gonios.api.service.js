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
exports.GoniosApiService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gonio_schema_1 = require("../schemas/gonio.schema");
const mongoose_2 = require("mongoose");
let GoniosApiService = class GoniosApiService {
    constructor(gonioModule) {
        this.gonioModule = gonioModule;
    }
    async create(createGonioDto) {
        const gonioCreated = await this.gonioModule.create(createGonioDto);
        return gonioCreated;
    }
    async findAll(query) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        const data = await this.gonioModule['dataTable'](query);
        return data;
    }
    findOne(id) {
        return `This action returns a #${id} gonio`;
    }
    update(id, updateGonioDto) {
        return `This action updates a #${id} gonio`;
    }
    remove(id) {
        return `This action removes a #${id} gonio`;
    }
};
GoniosApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gonio_schema_1.Gonio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GoniosApiService);
exports.GoniosApiService = GoniosApiService;
//# sourceMappingURL=gonios.api.service.js.map