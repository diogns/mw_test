"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const datatable_1 = require("./datatable");
const links_service_1 = require("./links.service");
const links_controller_1 = require("./links.controller");
const links_schema_1 = require("./schemas/links.schema");
const gonio_schema_1 = require("../gonios/schemas/gonio.schema");
let LinksModule = class LinksModule {
};
LinksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: links_schema_1.Link.name,
                    useFactory: () => {
                        links_schema_1.LinkSchema.plugin(datatable_1.DataTableModule.init);
                        return links_schema_1.LinkSchema;
                    },
                },
            ]),
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: gonio_schema_1.Gonio.name,
                    useFactory: () => {
                        gonio_schema_1.GonioSchema.plugin(datatable_1.DataTableModule.init);
                        return gonio_schema_1.GonioSchema;
                    },
                },
            ]),
        ],
        controllers: [links_controller_1.LinksController],
        providers: [links_service_1.LinksService],
    })
], LinksModule);
exports.LinksModule = LinksModule;
//# sourceMappingURL=links.module.js.map