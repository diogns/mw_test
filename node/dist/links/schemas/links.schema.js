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
exports.LinkSchema = exports.Link = exports.Equipment = exports.RadiantSystem = exports.Site = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Site = class Site {
};
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "siteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Site.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Site.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Site.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Site.prototype, "altitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Site.prototype, "towerHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Site.prototype, "buildingHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "tx", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "polarization", void 0);
Site = __decorate([
    (0, mongoose_1.Schema)()
], Site);
exports.Site = Site;
let RadiantSystem = class RadiantSystem {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], RadiantSystem.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], RadiantSystem.prototype, "antennaType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], RadiantSystem.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], RadiantSystem.prototype, "diameter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], RadiantSystem.prototype, "gain", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], RadiantSystem.prototype, "altInst", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], RadiantSystem.prototype, "pire", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], RadiantSystem.prototype, "accessibleHeight", void 0);
RadiantSystem = __decorate([
    (0, mongoose_1.Schema)()
], RadiantSystem);
exports.RadiantSystem = RadiantSystem;
let Equipment = class Equipment {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], Equipment.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Equipment.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Equipment.prototype, "frequencyRange", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Equipment.prototype, "power", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Equipment.prototype, "emission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Equipment.prototype, "capacity", void 0);
Equipment = __decorate([
    (0, mongoose_1.Schema)()
], Equipment);
exports.Equipment = Equipment;
let Link = class Link {
};
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Link.prototype, "isReported", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, unique: true, trim: true }),
    __metadata("design:type", String)
], Link.prototype, "concatenate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Link.prototype, "linkName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Link.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Link.prototype, "indicative", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Site)
], Link.prototype, "siteA", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Site)
], Link.prototype, "siteB", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Link.prototype, "setting", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Equipment)
], Link.prototype, "equipment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", RadiantSystem)
], Link.prototype, "radiantSystem", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Link.prototype, "azimuth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Link.prototype, "pathlength", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Link.prototype, "channel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Link.prototype, "gonio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Link.prototype, "losses", void 0);
Link = __decorate([
    (0, mongoose_1.Schema)()
], Link);
exports.Link = Link;
exports.LinkSchema = mongoose_1.SchemaFactory.createForClass(Link);
//# sourceMappingURL=links.schema.js.map