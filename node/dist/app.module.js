"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const operations_module_1 = require("./operations/operations.module");
const links_module_1 = require("./links/links.module");
const canalization_module_1 = require("./canalization/canalization.module");
const antennas_module_1 = require("./antennas/antennas.module");
const gonios_module_1 = require("./gonios/gonios.module");
const patterns_module_1 = require("./patterns/patterns.module");
const calculations_module_1 = require("./calculations/calculations.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://coverage_microwave_mongo/coverage_db', {}),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
                serveRoot: '/mw/api/client',
            }),
            operations_module_1.OperationsModule,
            links_module_1.LinksModule,
            canalization_module_1.CanalizationModule,
            antennas_module_1.AntennasModule,
            gonios_module_1.GoniosModule,
            patterns_module_1.PatternsModule,
            calculations_module_1.CalculationsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map