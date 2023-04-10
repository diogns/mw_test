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
exports.GoniosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const datatable_1 = __importDefault(require("mongoose-datatable/dist/datatable"));
const gonios_api_service_1 = require("./services/gonios.api.service");
const gonios_storage_service_1 = require("./services/gonios.storage.service");
const gonios_storage_controller_1 = require("./controller/gonios.storage.controller");
const gonios_api_controller_1 = require("./controller/gonios.api.controller");
const gonio_schema_1 = require("./schemas/gonio.schema");
let GoniosModule = class GoniosModule {
};
GoniosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: gonio_schema_1.Gonio.name,
                    useFactory: () => {
                        gonio_schema_1.GonioSchema.plugin(datatable_1.default.init);
                        return gonio_schema_1.GonioSchema;
                    },
                },
            ]),
        ],
        controllers: [gonios_api_controller_1.GoniosApiController, gonios_storage_controller_1.GoniosStorageController],
        providers: [gonios_api_service_1.GoniosApiService, gonios_storage_service_1.GoniosStorageService],
    })
], GoniosModule);
exports.GoniosModule = GoniosModule;
//# sourceMappingURL=gonios.module.js.map