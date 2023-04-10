"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const patterns_service_1 = require("./services/patterns.service");
const patterns_storage_service_1 = require("./services/patterns.storage.service");
const patterns_controller_1 = require("./controllers/patterns.controller");
const patterns_schema_1 = require("./schemas/patterns.schema");
let PatternsModule = class PatternsModule {
};
PatternsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: patterns_schema_1.Pattern.name,
                    schema: patterns_schema_1.PatternSchema,
                },
            ]),
        ],
        controllers: [patterns_controller_1.PatternsController],
        providers: [patterns_service_1.PatternsService, patterns_storage_service_1.PatternsStorageService],
    })
], PatternsModule);
exports.PatternsModule = PatternsModule;
//# sourceMappingURL=patterns.module.js.map