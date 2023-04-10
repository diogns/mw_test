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
exports.AntennasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const antennas_schema_1 = require("../schemas/antennas.schema");
let AntennasService = class AntennasService {
    constructor(antennasModule) {
        this.antennasModule = antennasModule;
    }
    async create(createAntennaDto) {
        const antennaCreated = await this.antennasModule.create(createAntennaDto);
        return antennaCreated;
    }
    async createMany(createAntennaDto) {
        const createdAntennas = await this.antennasModule.insertMany(createAntennaDto);
        return createdAntennas;
    }
    async findAll() {
        const list = await this.antennasModule.find({});
        return list;
    }
    findOne(id) {
        return this.antennasModule.findById(id);
    }
    findOneByName(name) {
        return this.antennasModule.findOne({ model: name });
    }
    remove(id) {
        return this.antennasModule.deleteOne({ id });
    }
    async datatable(query) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        const data = await this.antennasModule['dataTable'](query);
        return data;
    }
};
AntennasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(antennas_schema_1.Antenna.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AntennasService);
exports.AntennasService = AntennasService;
//# sourceMappingURL=antennas.service.js.map