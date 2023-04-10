"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanalizationModule = void 0;
const common_1 = require("@nestjs/common");
const canalization_service_1 = require("./canalization.service");
const canalization_controller_1 = require("./canalization.controller");
const canalization_schema_1 = require("./schemas/canalization.schema");
const datatable_1 = require("./datatable");
const mongoose_1 = require("@nestjs/mongoose");
let CanalizationModule = class CanalizationModule {
};
CanalizationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: canalization_schema_1.Canalization.name,
                    useFactory: () => {
                        canalization_schema_1.CanalizationSchema.plugin(datatable_1.DataTableModule.init);
                        return canalization_schema_1.CanalizationSchema;
                    },
                },
            ]),
        ],
        controllers: [canalization_controller_1.CanalizationController],
        providers: [canalization_service_1.CanalizationService],
    })
], CanalizationModule);
exports.CanalizationModule = CanalizationModule;
//# sourceMappingURL=canalization.module.js.map