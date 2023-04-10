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
exports.GonioSchema = exports.Gonio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Gonio = class Gonio {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Gonio.prototype, "station", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Gonio.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Gonio.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Gonio.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Gonio.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "latitudeDegrees", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "latitudeMinutes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "latitudeSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "longitudeDegrees", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "longitudeMinutes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "longitudeSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "latitudeDecimal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "longitudeDecimal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "latitudeFormat1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "longitudeFormat1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "seaLevel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "towerHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "buildingHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gonio.prototype, "totalHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Gonio.prototype, "googleSeaLevel", void 0);
Gonio = __decorate([
    (0, mongoose_1.Schema)()
], Gonio);
exports.Gonio = Gonio;
exports.GonioSchema = mongoose_1.SchemaFactory.createForClass(Gonio);
//# sourceMappingURL=gonio.schema.js.map