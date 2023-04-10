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
exports.CreateGonioDto = void 0;
const class_validator_1 = require("class-validator");
class CreateGonioDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateGonioDto.prototype, "station", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateGonioDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateGonioDto.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateGonioDto.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateGonioDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(20),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "latitudeDegrees", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(60),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "latitudeMinutes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(60),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "latitudeSeconds", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(60),
    (0, class_validator_1.Max)(80),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "longitudeDegrees", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(60),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "longitudeMinutes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(60),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "longitudeSeconds", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNegative)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "latitudeDecimal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNegative)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "longitudeDecimal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "latitudeFormat1", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Number)
], CreateGonioDto.prototype, "longitudeFormat1", void 0);
exports.CreateGonioDto = CreateGonioDto;
//# sourceMappingURL=create-gonio.dto.js.map