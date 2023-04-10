"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntennasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const datatable_1 = __importDefault(require("mongoose-datatable/dist/datatable"));
const antennas_service_1 = require("./services/antennas.service");
const antennas_storage_service_1 = require("./services/antennas.storage.service");
const antennas_controller_1 = require("./controllers/antennas.controller");
const antennas_schema_1 = require("./schemas/antennas.schema");
let AntennasModule = class AntennasModule {
};
AntennasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: antennas_schema_1.Antenna.name,
                    useFactory: () => {
                        antennas_schema_1.AntennaSchema.plugin(datatable_1.default.init);
                        return antennas_schema_1.AntennaSchema;
                    },
                },
            ]),
        ],
        controllers: [antennas_controller_1.AntennasController],
        providers: [antennas_service_1.AntennasService, antennas_storage_service_1.AntennasStorageService],
    })
], AntennasModule);
exports.AntennasModule = AntennasModule;
//# sourceMappingURL=antennas.module.js.map